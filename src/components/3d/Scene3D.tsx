"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface Scene3DProps {
  className?: string;
}

export const Scene3D: React.FC<Scene3DProps> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const originalPositionsRef = useRef<Float32Array | null>(null);

  useEffect(() => {
    const currentContainer = containerRef.current;
    if (!currentContainer) return;

    // Check capability: disable webgl on super slow or mobile devices to save battery
    const isLowPower =
      typeof navigator !== "undefined" &&
      (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
        window.innerWidth < 768);

    if (isLowPower) {
      // Just render empty div, falling back to pure CSS background
      return;
    }

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      60,
      currentContainer.clientWidth / currentContainer.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 40;
    cameraRef.current = camera;

    // Renderer with proper error handling
    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: false, // Turn off antialias for particle performance
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch (e) {
      console.error("WebGL not supported:", e);
      return;
    }

    renderer.setSize(
      currentContainer.clientWidth,
      currentContainer.clientHeight
    );
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // cap pixel ratio at 1.5 for performance
    renderer.setClearColor(0x0d1b2a, 0.2); // Set brand Navy transparent clear
    currentContainer.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Particles setup (elegant starfield)
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 450; // Optimized count
    const posArray = new Float32Array(particleCount * 3);
    const originalPosArray = new Float32Array(particleCount * 3);
    const randomSpeeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const x = (Math.random() - 0.5) * 160;
      const y = (Math.random() - 0.5) * 120;
      const z = (Math.random() - 0.5) * 120;
      
      posArray[i] = x;
      posArray[i + 1] = y;
      posArray[i + 2] = z;

      originalPosArray[i] = x;
      originalPosArray[i + 1] = y;
      originalPosArray[i + 2] = z;
      
      randomSpeeds[i / 3] = 0.2 + Math.random() * 0.8;
    }

    originalPositionsRef.current = originalPosArray;
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

    // Particle texture - soft dot instead of square
    const canvas = document.createElement("canvas");
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      grad.addColorStop(0, "rgba(255, 255, 255, 1)");
      grad.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 16, 16);
    }
    const texture = new THREE.CanvasTexture(canvas);

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.6,
      color: 0xc49a5a, // Correct brand Gold color
      transparent: true,
      opacity: 0.45,
      map: texture,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // Animation loop with smooth sine wave math instead of jitter
    const clock = new THREE.Clock();

    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      if (particles) {
        // Slow rotative drift
        particles.rotation.x = elapsedTime * 0.015;
        particles.rotation.y = elapsedTime * 0.025;
      }

      // Smooth wave movement
      if (originalPositionsRef.current) {
        const positions = particlesGeometry.attributes.position.array as Float32Array;
        const original = originalPositionsRef.current;
        
        for (let i = 0; i < positions.length; i += 3) {
          const idx = i / 3;
          const speed = randomSpeeds[idx];
          // Elegant sine wave drift for each point
          positions[i] = original[i] + Math.sin(elapsedTime * 0.5 * speed + original[i + 1] * 0.05) * 3;
          positions[i + 1] = original[i + 1] + Math.cos(elapsedTime * 0.4 * speed + original[i] * 0.05) * 3;
        }
        particlesGeometry.attributes.position.needsUpdate = true;
      }

      renderer!.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!currentContainer || !renderer) return;

      const width = currentContainer.clientWidth;
      const height = currentContainer.clientHeight;

      if (width === 0 || height === 0) return;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (renderer && currentContainer) {
        try {
          currentContainer.removeChild(renderer.domElement);
        } catch (e) {
          console.warn("Error removing renderer:", e);
        }
      }
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      texture.dispose();
      renderer?.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 ${className}`}
      style={{ width: "100%", height: "100%", pointerEvents: "none" }}
    />
  );
};

export default Scene3D;
