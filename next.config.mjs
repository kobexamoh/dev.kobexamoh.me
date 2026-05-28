/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kobexamoh.me",
        port: "",
        pathname: "/img/**",
      }
    ]
  },
};

export default nextConfig;
