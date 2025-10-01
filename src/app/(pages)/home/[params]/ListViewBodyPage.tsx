"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import data from "../../../../../ListData.json";
import Image from "next/image";
import dynamic from "next/dynamic";
import Loader from "@/components/Common/Loader";

const MapComponent = dynamic(() => import("@/components/Map/MapComponent"), {
  ssr: false,
});

function ListViewBodyPage() {
  const params = useParams() as { params: string[] };
  const place_id = params.params;
  const destinations = data.data.places;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader size="lg" />
      </div>
    );
  }

  // Find the destination by place_id
  const destination = destinations.find(
    (dest) => String(dest.place_id).trim() === String(place_id).trim()
  );

  if (!destination) {
    return (
      <div className="p-8 text-center mt-16 text-red-600 text-xl">
        Destination not found!
      </div>
    );
  }

  const {
    name,
    description,
    cover_media,
    rating,
    review_count,
    open_hours_text,
    coordinates,
  } = destination;
  const imgs = cover_media.large;
  return (
    <div className="max-w-4xl mt-16 mx-auto p-6 text-black space-y-6">
      {/* Image */}
      <div className="relative w-full h-64 rounded-lg overflow-hidden">
        <Image
          src={cover_media.large || "/placeholder.jpg"}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* Name + Description */}
      <div>
        <h1 className="text-3xl text-black font-bold mb-2">{name}</h1>
        <p className="text-gray-700">{description}</p>
      </div>

      {/* Info */}
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
        <p>
          <strong>Rating:</strong> {rating}
        </p>
        <p>
          <strong>Reviews:</strong> {review_count}
        </p>
        <p>
          <strong>Open Hours:</strong> {open_hours_text}
        </p>
        <p>
          <strong>Latitude:</strong> {coordinates.latitude}
        </p>
        <p>
          <strong>Longitude:</strong> {coordinates.longitude}
        </p>
      </div>

      {/* Map */}
      <div className="mt-6">
        <MapComponent destination={{ name, coordinates, imgs }} />
      </div>
    </div>
  );
}

export default ListViewBodyPage;
