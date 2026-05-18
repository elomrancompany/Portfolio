// Performance optimization utilities
export const performanceUtils = {
  // Check device performance
  isLowPerformanceDevice: (): boolean => {
    if (typeof window === "undefined") return false;

    // Check for low memory devices
    const deviceMemory = (navigator as any).deviceMemory;
    if (deviceMemory && deviceMemory < 4) return true;

    // Check for mobile
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
    if (isMobile) return true;

    // Check for slow connection
    const connection = (navigator as any).connection;
    if (connection) {
      const slowTypes = ["slow-2g", "2g", "3g"];
      if (slowTypes.includes(connection.effectiveType)) return true;
    }

    return false;
  },

  // Check if WebGL is supported
  isWebGLSupported: (): boolean => {
    if (typeof window === "undefined") return false;
    try {
      const canvas = document.createElement("canvas");
      return !!(
        window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
      );
    } catch (e) {
      return false;
    }
  },

  // Dynamically disable animations on low performance devices
  shouldReduceMotion: (): boolean => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      performanceUtils.isLowPerformanceDevice()
    );
  },

  // Get FPS monitoring (for debugging)
  monitorPerformance: (callback: (fps: number) => void) => {
    let lastTime = performance.now();
    let frames = 0;

    const loop = () => {
      const currentTime = performance.now();
      frames++;

      if (currentTime - lastTime >= 1000) {
        callback(frames);
        frames = 0;
        lastTime = currentTime;
      }

      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);
  },
};

export default performanceUtils;
