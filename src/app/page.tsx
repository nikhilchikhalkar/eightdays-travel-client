


// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import logo from "../../public/assets/logo.png";
// import img from "../../public/assets/img5.jpg";
// import app_store from "../../public/assets/app_store_icon.svg";
// import play_store from "../../public/assets/website_play_store.png";

// export default function Home() {
//   return (
//     <main className="relative min-h-screen flex items-end md:items-center justify-center bg-gray-900 overflow-hidden">
//       {/* 🌄 Background Image */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src={img}
//           alt="Background"
//           fill
//           style={{ objectFit: "cover" }}
//           className="pointer-events-none select-none"
//           priority
//         />
//       </div>

//       {/* 🧊 Foreground Card */}
//       <div className="relative z-10 max-w-6xl w-full bg-black/60 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-12 flex flex-col md:flex-row items-center gap-10">
//         {/* 📄 Left Content */}
//         <div className="flex-1 text-center md:text-left">
//           <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-100 leading-tight mb-6">
//             Plan your next adventure with{" "}
//             <span className="text-blue-600">EightyDays</span>
//           </h1>
//           <p className="text-lg text-gray-100 mb-8">
//             Discover new places, plan smarter itineraries, and make every trip
//             unforgettable.
//           </p>

//           {/* 🔘 CTA Buttons */}
//           <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-center md:justify-start mb-6">
//             <Link href="/signup">
//               <button className="bg-white px-6 py-3 rounded-2xl text-black shadow hover:bg-gray-100 transition">
//                 New here? Get Started
//               </button>
//             </Link>

//               <button className="text-white font-medium">
//                 Already a member? 
//             <Link className="hover:underline" href="/signin">
//                  Login now
//             </Link>
//               </button>
//           </div>

//           {/* 📱 App Store / Play Store Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//             {/* ✅ App Store button (correct icon + Apple link) */}
//             <Link
//               href="https://apps.apple.com/in/app/eighty-days-travel-planner/id6474486950"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 px-10 py-3 rounded-2xl bg-gray-200 text-black 
//                 border-t-2 border-l-2 border-r-4 border-b-4 border-black 
//                 hover:border-r-6 hover:border-b-6 
//                 hover:translate-x-0.5 hover:translate-y-0.5 
//                 hover:opacity-90 transition-all duration-200 ease-in-out"
//             >
//               <Image
//                 src={app_store}
//                 width={20}
//                 style={{ height: "auto" }}
//                 alt="App Store icon"
//                 className="object-contain"
//                 priority
//               />
//                App Store
//             </Link>

//             {/* ✅ Play Store button (correct icon + Play link) */}
//             <Link
//               href="https://play.google.com/store/apps/details?id=com.phatventures.eightydays"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 px-10 py-3 rounded-2xl bg-gray-200 text-black 
//                 border-t-2 border-l-2 border-r-4 border-b-4 border-black 
//                 hover:border-r-6 hover:border-b-6 
//                 hover:translate-x-0.5 hover:translate-y-0.5 
//                 hover:opacity-90 transition-all duration-200 ease-in-out"
//             >
//               <Image
//                 src={play_store}
//                 width={20}
//                 height={20}
//                 alt="Play Store icon"
//                 className="object-contain"
//                 priority
//               />
//                Play Store
//             </Link>
//           </div>
//         </div>

//         {/* 🖼️ Right Content (Logo) */}
//         <div className="flex-1 md:flex justify-center hidden">
//           <Image
//             src={logo}
//             alt="EightyDays Logo"
//             width={350}
//             height={350}
//             className="object-contain"
//             priority
//           />
//         </div>
//       </div>
//     </main>
//   );
// }







// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import logo from "../../public/assets/logo.png";
// import img from "../../public/assets/img5.jpg";
// import app_store from "../../public/assets/app_store_icon.svg";
// import play_store from "../../public/assets/website_play_store.png";

// export default function Home() {
//   return (
//     <main className="relative min-h-screen flex items-end md:items-center justify-center bg-gray-900 overflow-hidden">
//       {/* 🌄 Background Image */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src={img}
//           alt="Background"
//           fill
//           style={{ objectFit: "cover" }}
//           className="pointer-events-none select-none"
//           priority
//         />
//       </div>

//       {/* 🧊 Foreground Card */}
//       <div className="relative z-10 max-w-6xl w-full rounded-3xl  p-6 md:p-12 flex flex-col md:flex-row items-center gap-10">
//         {/* icon at top  */}
//         <div className=" flex items-start">
//          <Image
//             src={logo}
//             alt="EightyDays Logo"
//             width={50}
//             height={50}
//             className="object-contain"
//             priority
//             />
//             </div>
//         {/* 📄 Left Content */}
//         <div className="flex-1 text-center md:text-left">
//           <h1 className="text-4xl sm:text-5xl font-extrabold text-black leading-tight mb-6">
//             Plan your next adventure with{" "}
//             <span className="text-blue-600">EightyDays</span>
//           </h1>
//           <p className="text-lg text-black mb-8">
//             Discover new places, plan smarter itineraries, and make every trip
//             unforgettable.
//           </p>

//           {/* 🔘 CTA Buttons */}
//           <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-center md:justify-start mb-6">
//             <Link href="/signup">
//               <button className="bg-white px-6 py-3 rounded-2xl text-black shadow hover:bg-gray-100 transition">
//                 New here? Get Started
//               </button>
//             </Link>

//               <button className="text-white font-medium">
//                 Already a member? 
//             <Link className="hover:underline" href="/signin">
//                  Login now
//             </Link>
//               </button>
//           </div>

//           {/* 📱 App Store / Play Store Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//             {/* ✅ App Store button (correct icon + Apple link) */}
//             <Link
//               href="https://apps.apple.com/in/app/eighty-days-travel-planner/id6474486950"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 px-10 py-3 rounded-2xl bg-gray-200 text-black 
//                 border-t-2 border-l-2 border-r-4 border-b-4 border-black 
//                 hover:border-r-6 hover:border-b-6 
//                 hover:translate-x-0.5 hover:translate-y-0.5 
//                 hover:opacity-90 transition-all duration-200 ease-in-out"
//             >
//               <Image
//                 src={app_store}
//                 width={20}
//                 style={{ height: "auto" }}
//                 alt="App Store icon"
//                 className="object-contain"
//                 priority
//               />
//                App Store
//             </Link>

//             {/* ✅ Play Store button (correct icon + Play link) */}
//             <Link
//               href="https://play.google.com/store/apps/details?id=com.phatventures.eightydays"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 px-10 py-3 rounded-2xl bg-gray-200 text-black 
//                 border-t-2 border-l-2 border-r-4 border-b-4 border-black 
//                 hover:border-r-6 hover:border-b-6 
//                 hover:translate-x-0.5 hover:translate-y-0.5 
//                 hover:opacity-90 transition-all duration-200 ease-in-out"
//             >
//               <Image
//                 src={play_store}
//                 width={20}
//                 height={20}
//                 alt="Play Store icon"
//                 className="object-contain"
//                 priority
//               />
//                Play Store
//             </Link>
//           </div>
//         </div>

//       </div>
//     </main>
//   );
// }


















"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/logo.png";
import img from "../../public/assets/img5.jpg";
import app_store from "../../public/assets/app_store_icon.svg";
import play_store from "../../public/assets/website_play_store.png";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* 🌄 Background Image */}
      <div className="  absolute inset-0 z-0">
        <Image
          src={img}
          alt="Background"
          fill
          className="object-cover object-top sm:object-center pointer-events-none select-none"
          priority
        />
      </div>

      {/* ✅ Logo fixed at top-left */}
      <div className="absolute top-6 left-6 z-20 ">
        <Image
          src={logo}
          alt="EightyDays Logo"
          width={60}
          height={60}
          className="object-contain"
          priority
        />
      </div>

      {/* 🧊 Foreground Card */}
      <div className="relative z-10 max-w-6xl w-full rounded-3xl  p-6 md:p-12 flex flex-col md:flex-row items-center gap-10 ">
        {/* 📄 Left Content */}
        <div className="flex-1 text-center md:text-left ">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-black leading-tight mb-6 mt-4">
            Plan your next adventure with{" "}
            <span className="text-blue-600">EightyDays</span>
          </h1>
          <p className="text-lg text-black mb-8">
            Discover new places, plan smarter itineraries, and make every trip unforgettable.
          </p>

          {/* 🔘 CTA Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-center md:justify-start mb-6">
            <Link href="/signup">
              <button className="bg-white px-6 py-3 rounded-2xl border-2 border-black text-black shadow hover:bg-gray-100 transition">
                New here?
                 <strong className="hover:underline">
                  Get Started
                  </strong> 
              </button>
            </Link>

            <button className="text-black font-medium ">
              Already a member?
              <Link className="hover:underline ml-1 " href="/signin">
               <strong>
                 Login now
                </strong>
              </Link>
            </button>
          </div>

          {/* 📱 App Store / Play Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {/* App Store */}
            <Link
              href="https://apps.apple.com/in/app/eighty-days-travel-planner/id6474486950"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-3 rounded-2xl bg-gray-200 text-black 
                border-t-2 border-l-2 border-r-4 border-b-4 border-black 
                hover:border-r-6 hover:border-b-6 
                hover:translate-x-0.5 hover:translate-y-0.5 
                hover:opacity-90 transition-all duration-200 ease-in-out"
            >
              <Image
                src={app_store}
                width={20}
                style={{ height: "auto" }}
                alt="App Store icon"
                className="object-contain"
              />
              App Store
            </Link>

            {/* Play Store */}
            <Link
              href="https://play.google.com/store/apps/details?id=com.phatventures.eightydays"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-3 rounded-2xl bg-gray-200 text-black 
                border-t-2 border-l-2 border-r-4 border-b-4 border-black 
                hover:border-r-6 hover:border-b-6 
                hover:translate-x-0.5 hover:translate-y-0.5 
                hover:opacity-90 transition-all duration-200 ease-in-out"
            >
              <Image
                src={play_store}
                width={20}
                height={20}
                alt="Play Store icon"
                className="object-contain"
              />
              Play Store
            </Link>
          </div>
        </div>

        

      </div>
    </main>
  );
}
