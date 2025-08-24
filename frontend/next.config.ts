import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

   eslint: {
        // do not fail the production build when ESLint errors are present
        ignoreDuringBuilds: true,
    },
    
};

export default nextConfig;
