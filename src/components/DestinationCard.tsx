
'use client';

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface DestinationType {
  place_id: string;
  google_place_id: string;
  name: string;
  is_custom: number;
  description: string;
  rating: number;
  review_count: number;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  cover_media: {
    small: string;
    medium: string;
    large: string;
  };
  is_AI_generated: boolean;
  open_hours_text: string;
  imageUrl?: string;
}

type Props = {
  destination: DestinationType;
};

export default function DestinationCard({ destination }: Props) {
  const imageSrc = destination.cover_media.medium || "/placeholder.jpg";

  return (
    <Link href={`/home/${destination.place_id}`} passHref>
      <div className="min-w-[300px] rounded-lg shadow-md overflow-hidden bg-white cursor-pointer hover:shadow-lg transition">
        <div className="relative w-full h-48">
          <Image
            src={imageSrc}
            alt={destination.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl text-black font-semibold">{destination.name}</h2>
          <p className="text-gray-600 text-sm line-clamp-2">{destination.description}</p>
          <p className="text-xs mt-2 text-gray-400">Rating: {destination.rating}</p>
          <p className="text-xs mt-1 text-gray-400">Reviews: {destination.review_count}</p>
          <p className="text-xs mt-1 text-gray-400">Open: {destination.open_hours_text}</p>
        </div>
      </div>
    </Link>
  );
}

