/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: false,
    output: "standalone",
    experimental: {
      instrumentationHook: true,
      serverComponentsExternalPackages: ["dd-trace"],
    },
    devIndicators: {
      buildActivity: false,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  };