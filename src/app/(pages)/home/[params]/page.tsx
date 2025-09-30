


// "use client";

import ListViewBodyPage from "./ListViewBodyPage";

// import { useParams } from "next/navigation";
// import React from "react";
// import data from "../../../../../ListData.json";
// import Image from "next/image";
// import dynamic from "next/dynamic";

// const MapComponent = dynamic(() => import("@/components/MapComponent"), {
//   ssr: false,
// });

// function ListViewPage() {
// const params = useParams() as { params: string[] }; 
//          const place_id = params.params
//   const destinations = data.data.places;


//   // Find the destination by place_id
// const destination = destinations.find(
//   (dest) => String(dest.place_id).trim() === String(place_id).trim()
// );



//   if (!destination) {
//     return (
//       <div className="p-8 text-center mt-16 text-red-600 text-xl">
//         Destination not found!
//       </div>
//     );
//   }

//   const {
//     name,
//     description,
//     cover_media,
//     rating,
//     review_count,
//     open_hours_text,
//     coordinates,
//   } = destination;
// const imgs = cover_media.large
//   return (
//     <div className="max-w-4xl mt-16 mx-auto p-6 text-black space-y-6">
//       {/* Image */}
//       <div className="relative w-full h-64 rounded-lg overflow-hidden">
//         <Image
//           src={cover_media.large || "/placeholder.jpg"}
//           alt={name}
//           fill
//           className="object-cover"
//         />
//       </div>

//       {/* Name + Description */}
//       <div>
//         <h1 className="text-3xl text-black font-bold mb-2">{name}</h1>
//         <p className="text-gray-700">{description}</p>
//       </div>

//       {/* Info */}
//       <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
//         <p><strong>Rating:</strong> {rating}</p>
//         <p><strong>Reviews:</strong> {review_count}</p>
//         <p><strong>Open Hours:</strong> {open_hours_text}</p>
//         <p><strong>Latitude:</strong> {coordinates.latitude}</p>
//         <p><strong>Longitude:</strong> {coordinates.longitude}</p>
//       </div>

//       {/* Map */}
//       <div className="mt-6">
//         {/* <iframe
//           title="Google Map"
//           width="100%"
//           height="350"
//           loading="lazy"
//           className="rounded-lg"
//           allowFullScreen
//           referrerPolicy="no-referrer-when-downgrade"
//           src={`https://www.google.com/maps/embed/v1/view?key=YOUR_GOOGLE_MAPS_API_KEY&center=${coordinates.latitude},${coordinates.longitude}&zoom=14`}
//         ></iframe> */}
//         <MapComponent destination={{ name, coordinates, imgs }} />

//       </div>
//     </div>
//   );
// }

// export default ListViewPage;

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EightDays Travel | ListView',
  description: 'EightDays Travel App',
}
export default function ListViewPage () {
    return(
        <>
        <ListViewBodyPage/>
        </>
    )
}