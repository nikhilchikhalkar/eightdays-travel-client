"use client";

import Loader from "@/components/Common/Loader";
import data from "../../../../ListData.json";
import { useEffect, useState } from "react";
import Carousel from "@/components/Destination/DestinationCarousel";
import DestinationCard from "@/components/Destination/DestinationCard";

export default function HomePageBody() {
  // const destinations = data.data.places;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds

    return () => clearTimeout(timer);
  }, []);
  const destinations = data.data.places;
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader size="lg" />
      </div>
    );
  }

  return (
    <div>
      <Carousel destinations={destinations} />

      <div className="container mx-auto px-4">
        <h1 className="text-3xl text-black font-bold flex items-center justify-center my-4">
          Top Destinations
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
          {destinations.map((dest) => (
            <DestinationCard key={dest.place_id} destination={dest} />
          ))}
        </div>
      </div>
    </div>
  );
}
