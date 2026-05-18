# 3D Components Documentation

## Overview

This portfolio uses **Three.js** for creating immersive 3D visual effects. All 3D components are optimized for performance and include fallbacks for devices that don't support WebGL.

---

## Components

### 1. Scene3D - Particle Effect Background

**Location**: `src/components/3d/Scene3D.tsx`

Renders an animated particle cloud effect with 800 particles that rotate and animate based on time.

```tsx
import Scene3D from "@/components/3d/Scene3D";

// Usage
<Scene3D className="absolute inset-0" />;
```

**Features**:

- 800 animated particles
- Golden color (#c9a15a) matching brand
- Auto-resizes on window resize
- Proper cleanup to prevent memory leaks
- Fallback for unsupported browsers

**Performance**:

- Disabled on mobile devices by default
- WebGL detection and validation
- Optimized particle updates

---

### 2. Card3D - 3D Hover Effect Cards

**Location**: `src/components/3d/Card3D.tsx`

Creates cards with perspective 3D rotation based on mouse movement.

```tsx
import Card3D from "@/components/3d/Card3D";

// Usage
<Card3D intensity={15} className="rounded-lg">
  <div>Your content here</div>
</Card3D>;
```

**Props**:

```typescript
interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number; // 0-30, default: 20
}
```

**Features**:

- Mouse tracking on desktop
- CSS 3D transforms
- Smooth animations
- Touch-device friendly (disables on touch)

---

### 3. Orb3D - Rotating 3D Sphere

**Location**: `src/components/3d/Orb3D.tsx`

Renders a rotating geometric orb with lighting effects.

```tsx
import Orb3D from "@/components/3d/Orb3D";

// Usage
<Orb3D size={400} color="#c9a15a" className="mx-auto" />;
```

**Props**:

```typescript
interface Orb3DProps {
  className?: string;
  color?: string; // Hex color
  size?: number; // Size in pixels
}
```

**Features**:

- Icosahedron geometry (64 subdivisions)
- Dual-light setup for depth
- Smooth rotation animation
- Emissive material for glow effect

---

## Performance Optimization

### Device Detection

```typescript
import performanceUtils from "@/lib/performance";

// Check if device is low-performance
if (performanceUtils.isLowPerformanceDevice()) {
  // Disable 3D effects
}

// Check WebGL support
if (!performanceUtils.isWebGLSupported()) {
  // Show fallback
}

// Check for reduced motion preference
if (performanceUtils.shouldReduceMotion()) {
  // Use simplified animations
}
```

### Automatic Optimization

The app automatically:

- ✅ Disables 3D effects on mobile devices
- ✅ Detects low memory (< 4GB) devices
- ✅ Detects slow connections (2G/3G)
- ✅ Respects `prefers-reduced-motion`
- ✅ Cleans up Three.js resources
- ✅ Reduces animation duration on lower-end devices

---

## Browser Support

| Browser       | Support          | Notes                       |
| ------------- | ---------------- | --------------------------- |
| Chrome 90+    | ✅ Full          | Best performance            |
| Firefox 88+   | ✅ Full          | Good performance            |
| Safari 15+    | ✅ Full          | Good performance            |
| Edge 90+      | ✅ Full          | Chromium-based              |
| Mobile Chrome | ✅ Limited       | 3D disabled, fallback shown |
| Mobile Safari | ✅ Limited       | 3D disabled, fallback shown |
| IE 11         | ❌ Not supported | Use fallback design         |

---

## Memory Management

### Proper Cleanup

All Three.js components properly dispose of resources:

```typescript
// Geometry cleanup
geometry.dispose();

// Material cleanup
material.dispose();

// Renderer cleanup
renderer.dispose();

// Remove from DOM
container?.removeChild(renderer.domElement);
```

---

## Customization

### Changing Colors

Update in `src/components/3d/Scene3D.tsx`:

```typescript
const particlesMaterial = new THREE.PointsMaterial({
  size: 0.5,
  color: 0xc9a15a, // Change this hex value
  transparent: true,
  opacity: 0.6,
});
```

### Changing Animation Speed

Update rotation speed:

```typescript
// In animate loop
particles.rotation.x += 0.0001; // Increase/decrease value
particles.rotation.y += 0.0002;
```

### Changing Particle Count

Update in `Scene3D.tsx`:

```typescript
const particleCount = 800; // Change this number
```

---

## Troubleshooting

### 3D Elements Not Rendering

1. Check WebGL support:

```bash
# Open browser console
console.log(performanceUtils.isWebGLSupported());
```

2. Check device detection:

```bash
console.log(performanceUtils.isLowPerformanceDevice());
```

3. Clear cache and reload:

- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### Memory Leaks

Monitor in DevTools:

1. Open DevTools → Memory tab
2. Take heap snapshots before/after interaction
3. Look for uncleared Three.js objects

### Performance Issues

1. Check FPS:

```typescript
performanceUtils.monitorPerformance((fps) => {
  console.log(`FPS: ${fps}`);
});
```

2. Reduce particle count or animation complexity
3. Disable 3D for specific devices

---

## Future Enhancements

Potential upgrades:

- [ ] Three.js postprocessing (bloom, depth-of-field)
- [ ] Interactive 3D models
- [ ] GLTF model loading
- [ ] Canvas-based 2D fallback
- [ ] WebGL 2.0 advanced features

---

**Last Updated**: May 2026
**Three.js Version**: r128 (stable)
**React-Three-Fiber Version**: 8.15.0
