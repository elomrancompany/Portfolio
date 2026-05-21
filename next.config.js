/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization for long-term stability
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**.cloudinary.com",
      },
    ],
    // Cache images for 10 years
    minimumCacheTTL: 60 * 60 * 24 * 365 * 10,
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    deviceSizes: [320, 375, 425, 640, 750, 1024, 1366, 1536, 1920, 2560],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },


  // Production optimizations for Vercel
  experimental: {
    optimizePackageImports: [
      "@react-three/fiber",
      "@react-three/drei",
      "three",
      "lucide-react",
    ],
    scrollRestoration: true,
  },

  // TypeScript strict mode
  typescript: {
    tsconfigPath: "./tsconfig.json",
    ignoreBuildErrors: false,
  },

  // ESLint configuration
  eslint: {
    dirs: ["src/app", "src/components", "src/lib"],
    ignoreDuringBuilds: false,
  },

  // Build optimization
  compress: true,
  productionBrowserSourceMaps: false,
  swcMinify: true,

  // Output for Vercel static export where possible
  output: "standalone",

  // Redirects for old URLs
  async redirects() {
    return [
      {
        source: "/old-page",
        destination: "/",
        permanent: true,
      },
    ];
  },

  // Security headers for 10-year stability
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=(), microphone=(), camera=()",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Rewrites for API routing if needed
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/en",
          destination: "/",
        },
        {
          source: "/en/:path*",
          destination: "/:path*",
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },

  // Performance tuning
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },

  // React strict mode for development
  reactStrictMode: true,

  // PoweredByHeader removed for security
  poweredByHeader: false,

  // Generate ETags for cache busting
  generateEtags: true,

  // Trailing slash configuration
  trailingSlash: false,

  // Webpack configuration for better bundling
  webpack: (config, { isServer }) => {
    config.optimization = {
      ...config.optimization,
      minimize: true,
      runtimeChunk: isServer ? false : "single",
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          default: false,
          vendors: false,
          vendor: {
            name: "vendor",
            chunks: "all",
            test: /node_modules/,
            priority: 20,
          },
          common: {
            minChunks: 2,
            priority: 10,
            reuseExistingChunk: true,
            enforce: true,
          },
        },
      },
    };
    return config;
  },
};

module.exports = nextConfig;
