"use client"; 

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Destination {
  place_id: string;
  name: string;
  description: string;
  cover_media?: {
    large?: string;
  };
}

interface CarouselProps {
  destinations: Destination[];
}

const Carousel = ({ destinations }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = destinations.length;
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(interval);
  }, [total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };


   const handleExplore = (id: string) => {
    console.log("Navigating to:", `/home/${id}`);
    router.push(`/home/${id}`);
  };
  
  return (
    <div className="relative w-full h-[40vh] md:h-[40vh] lg:h-[60vh] overflow-hidden">
      {/* Slides */}
      {destinations.map((destination, index) => {
        const imageSrc = destination.cover_media?.large || "/placeholder.jpg";
        return (
          <div
            key={destination.place_id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={imageSrc}
                alt={destination.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 flex justify-center items-center bg-opacity-40">
                <div className="bg-white bg-opacity-90 p-4 md:p-6 rounded shadow-lg max-w-xl text-center">
                  <h2 className="text-lg md:text-2xl font-bold mb-2 text-black truncate">
                    {destination.name}
                  </h2>
                  <p className="text-gray-700 mb-4 hidden md:block line-clamp-2">
                    {destination.description}
                  </p>
                  <button
                    // onClick={() => router.push(`/home/${destination.place_id}`)}
                     onClick={() => handleExplore(destination.place_id)}
                    className="bg-black  text-white px-4 py-2 rounded hover:bg-gray-800 transition text-sm"
                  >
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Prev/Next Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-20"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-20"
      >
        ❯
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {destinations.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              i === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
