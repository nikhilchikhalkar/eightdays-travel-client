

"use client";

import { MapContainer, TileLayer, Marker, Polyline, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import { MapUpdater } from "./MapUpdater"; // adjust path if needed
import L from "leaflet";

import 'leaflet/dist/leaflet.css';
import Image from "next/image";


// Fix default Leaflet marker icon
delete (L.Icon.Default as any).prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface MapProps {
  destination: {
    name: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    imgs: string
  };
}

type PermissionState = "granted" | "prompt" | "denied";

export default function MapComponent({ destination }: MapProps) {
  const [userPosition, setUserPosition] = useState<[number, number] | null>(null);
  const [permissionStatus, setPermissionStatus] = useState<PermissionState>("prompt");

  const destPosition: [number, number] = [
    destination.coordinates.latitude,
    destination.coordinates.longitude,
  ];

  // Check location permission on mount
  useEffect(() => {
    if (!navigator.permissions || !navigator.geolocation) return;

    navigator.permissions.query({ name: "geolocation" as PermissionName }).then((result) => {
      setPermissionStatus(result.state as PermissionState);

      if (result.state === "granted") {
        getLocation(); // Auto fetch
      }

      result.onchange = () => {
        setPermissionStatus(result.state as PermissionState);
      };
    });
  }, []);

  // Request user location with high accuracy
  const getLocation = () => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        console.log("User location (accurate):", latitude, longitude);
        setUserPosition([latitude, longitude]);
      },
      (error) => {
        console.error("Geolocation error:", error.message);
      },{
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
      
    );
  };

  const calculateDistance = (): string | null => {
    if (!userPosition) return null;

    const R = 6371; // km
    const toRad = (value: number) => (value * Math.PI) / 180;

    const [lat1, lon1] = userPosition;
    const [lat2, lon2] = destPosition;

    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distanceKm = R * c;

    return `${distanceKm.toFixed(2)} kilometers`;
  };

  const distanceText = calculateDistance();

  return (
    <div className="relative h-[400px] w-full mt-6 rounded-lg overflow-hidden shadow-md">

      {/* Show Allow Location button if needed */}
      {permissionStatus === "prompt" && !userPosition && (
        <div className="absolute inset-0 z-10 bg-white/90 flex flex-col items-center justify-center text-center p-6">
          <p className="text-gray-700 mb-4 text-lg font-medium">
            To show your location and calculate distance to <strong>{destination.name}</strong>,
            please allow location access.
          </p>
          <button
            onClick={getLocation}
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          >
            Allow Location Access
          </button>
        </div>
      )}

      {/* Show instructions if location access is blocked */}
      {permissionStatus === "denied" && !userPosition && (
        <div className="absolute inset-0 z-10 bg-white/90 flex flex-col items-center justify-center text-center p-6">
          <p className="text-gray-700 mb-3 text-lg font-medium">
            Location access is blocked.
          </p>
          <p className="text-sm text-gray-500 max-w-md">
            Please enable location access in your browser settings to see your current location and distance to <strong>{destination.name}</strong>.
            <br /><br />
            Click the 🔒 icon near the address bar and allow location for this site.
          </p>
        </div>
      )}

      {/* Leaflet Map */}
      <MapContainer
        center={destPosition}
        zoom={13}
        className="h-full w-full z-0"
        scrollWheelZoom={true}
      >
        <MapUpdater center={userPosition ?? destPosition} />

        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Destination Marker */}
        {/* <Marker position={destPosition}>
          <Popup>
            <strong>{destination.name}</strong>
            <br />
            Destination
          </Popup>
        </Marker> */}
        <Marker position={destPosition}>
  <Popup>
    <div style={{ maxWidth: "200px" }}>
      <strong>{destination.name}</strong>
      <br />
      Destination
      <br />
      <Image
        src={destination.imgs} 
        alt={destination.name}
        width={60}
        height={20}
        style={{ width: "100%", marginTop: "8px", borderRadius: "6px" }}
      />
    </div>
  </Popup>
</Marker>


        {/* User Marker and distance line */}
        {userPosition && (
          <>
            <Marker position={userPosition}>
              <Popup>You are here</Popup>
            </Marker>

            <Polyline positions={[userPosition, destPosition]} color="blue" />

            {/* Distance Display */}
            <div className="absolute top-2 left-12 bg-white px-4 py-2 text-black text-sm rounded shadow z-[1000]">
              Distance to <strong>{destination.name}</strong>: {distanceText}
            </div>

            {/* Debug Location Display */}
            <div className="absolute bottom-2 left-2 z-[1000] bg-white text-xs text-black px-3 py-1 rounded shadow">
              Your Location: {userPosition[0].toFixed(5)}, {userPosition[1].toFixed(5)}
            </div>
          </>
        )}
      </MapContainer>
    </div>
  );
}
