// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//    images: {
//     qualities:  [60, 75, 80, 90], // Add allowed values here
//      domains: ['d3iq0vcqnt2b9k.cloudfront.net'],
//   },
//    eslint: {
//       ignoreDuringBuilds: true,
//     },
// };

// export default nextConfig;





import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // ✅ Replaces deprecated `domains`
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d3iq0vcqnt2b9k.cloudfront.net",
        port: "",
        pathname: "/**", // Allow all image paths
      },
    ],
  
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
