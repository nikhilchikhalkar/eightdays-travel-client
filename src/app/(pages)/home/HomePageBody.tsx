
"use client";

import Carousel from "@/components/DestinationCarousel";
import data from "../../../../ListData.json";
import DestinationCard from "@/components/DestinationCard";

export default function HomePageBody() {
  const destinations = data.data.places;

  return (
    <div>

      <Carousel destinations={destinations} />

      <div className="container mx-auto px-4">
        <h1 className="text-3xl text-black font-bold flex items-center justify-center my-4">Top Destinations</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
          {destinations.map((dest) => (
            <DestinationCard key={dest.place_id} destination={dest} />
          ))}
        </div>
      </div>
    </div>
  );
}
