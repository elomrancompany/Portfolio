"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface Orb3DProps {
  className?: string;
  color?: string;
  size?: number;
}

export const Orb3D: React.FC<Orb3DProps> = ({
  className = "",
  color = "#c9a15a",
  size = 400,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(size, size);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Orb geometry
    const geometry = new THREE.IcosahedronGeometry(2, 64);
    const material = new THREE.MeshPhongMaterial({
      color: color,
      wireframe: false,
      emissive: color,
      emissiveIntensity: 0.2,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Lights
    const light1 = new THREE.PointLight(0xffffff, 1, 100);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xc9a15a, 0.5, 100);
    light2.position.set(-5, -5, 5);
    scene.add(light2);

    // Animation
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      mesh.rotation.x += 0.002;
      mesh.rotation.y += 0.003;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      containerRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [size, color]);

  return <div ref={containerRef} className={className} />;
};

export default Orb3D;
