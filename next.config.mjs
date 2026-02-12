/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images-na.ssl-images-amazon.com",
      },
      {
        protocol: "https",
        hostname: "iskconbhiwandi.org",
      },
      {
        protocol: "https",
        hostname: "yaronschoen.com",
      },
      {
        protocol: "https",
        hostname: "images.thenile.io",
      },
    ],
  },
};

export default nextConfig;
