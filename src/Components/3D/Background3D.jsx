import { useEffect, useRef } from "react";
import * as THREE from "three";

const Background3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 80;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Particle geometries
    const particleCount = 1400;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const isDarkMode = () =>
      document.documentElement.classList.contains("dark");

    const darkChoices = [
      new THREE.Color("#00f5ff"),
      new THREE.Color("#a855f7"),
      new THREE.Color("#ffffff"),
      new THREE.Color("#6366f1"),
    ];

    const lightChoices = [
      new THREE.Color("#2563EB"),
      new THREE.Color("#06B6D4"),
      new THREE.Color("#7C3AED"),
      new THREE.Color("#3B82F6"),
    ];

    const applyColors = (dark) => {
      const choices = dark ? darkChoices : lightChoices;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const chosen = choices[Math.floor(Math.random() * choices.length)];
        colors[i3] = chosen.r;
        colors[i3 + 1] = chosen.g;
        colors[i3 + 2] = chosen.b;
      }
      if (geometry.attributes.color) {
        geometry.attributes.color.needsUpdate = true;
      }
    };

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 220;
      positions[i3 + 1] = (Math.random() - 0.5) * 220;
      positions[i3 + 2] = (Math.random() - 0.5) * 200;
    }

    applyColors(isDarkMode());

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Particle Texture
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.3, "rgba(0,245,255,0.8)");
    gradient.addColorStop(0.7, "rgba(168,85,247,0.3)");
    gradient.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);

    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 1.8,
      vertexColors: true,
      map: texture,
      transparent: true,
      blending: isDarkMode() ? THREE.AdditiveBlending : THREE.NormalBlending,
      opacity: isDarkMode() ? 0.85 : 0.4,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Observer for dark/light class on <html>
    const observer = new MutationObserver(() => {
      const dark = isDarkMode();
      material.blending = dark ? THREE.AdditiveBlending : THREE.NormalBlending;
      material.opacity = dark ? 0.85 : 0.4;
      applyColors(dark);
      material.needsUpdate = true;
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Mouse coordinates
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      targetX = (event.clientX - window.innerWidth / 2) * 0.015;
      targetY = (event.clientY - window.innerHeight / 2) * 0.015;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Window resize
    const handleResize = () => {
      if (!renderer || !camera) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      particles.rotation.y = elapsedTime * 0.03 + mouseX * 0.3;
      particles.rotation.x = elapsedTime * 0.015 + mouseY * 0.3;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden transition-opacity duration-300"
      aria-hidden="true"
    />
  );
};

export default Background3D;
