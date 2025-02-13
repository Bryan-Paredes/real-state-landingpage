/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend-real-state-fr3m.onrender.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
