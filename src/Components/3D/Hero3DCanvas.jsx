import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const Hero3DCanvas = () => {
  const mountRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 450;
    const height = container.clientHeight || 450;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Central Core: Dual geometric polyhedrons
    // Outer wireframe icosahedron
    const outerGeo = new THREE.IcosahedronGeometry(1.8, 1);
    const outerMat = new THREE.MeshStandardMaterial({
      color: 0x00f5ff,
      wireframe: true,
      transparent: true,
      opacity: 0.75,
      roughness: 0.2,
      metalness: 0.8,
      emissive: 0x007799,
      emissiveIntensity: 0.4,
    });
    const outerCore = new THREE.Mesh(outerGeo, outerMat);
    rootGroup.add(outerCore);

    // Inner glowing sphere
    const innerGeo = new THREE.SphereGeometry(0.9, 32, 32);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x9333ea,
      roughness: 0.1,
      metalness: 0.9,
      emissive: 0xa855f7,
      emissiveIntensity: 0.8,
      wireframe: false,
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    rootGroup.add(innerCore);

    // Inner wireframe ring (Torus)
    const torusGeo = new THREE.TorusGeometry(1.3, 0.04, 16, 100);
    const torusMat = new THREE.MeshStandardMaterial({
      color: 0x00f5ff,
      emissive: 0x00f5ff,
      emissiveIntensity: 0.6,
      roughness: 0.3,
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.rotation.x = Math.PI / 3;
    rootGroup.add(torus);

    // Second inclined torus
    const torus2Geo = new THREE.TorusGeometry(2.3, 0.02, 16, 100);
    const torus2Mat = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      emissive: 0xa855f7,
      emissiveIntensity: 0.5,
    });
    const torus2 = new THREE.Mesh(torus2Geo, torus2Mat);
    torus2.rotation.x = -Math.PI / 4;
    torus2.rotation.y = Math.PI / 6;
    rootGroup.add(torus2);

    // 2. Orbital Particle Ring (Accretion Disk)
    const ringParticlesCount = 500;
    const ringGeo = new THREE.BufferGeometry();
    const ringPos = new Float32Array(ringParticlesCount * 3);
    const ringColors = new Float32Array(ringParticlesCount * 3);

    const c1 = new THREE.Color("#00f5ff");
    const c2 = new THREE.Color("#a855f7");

    for (let i = 0; i < ringParticlesCount; i++) {
      const i3 = i * 3;
      const angle = (i / ringParticlesCount) * Math.PI * 2;
      const radius = 2.4 + (Math.random() - 0.5) * 0.7;

      ringPos[i3] = Math.cos(angle) * radius;
      ringPos[i3 + 1] = (Math.random() - 0.5) * 0.4;
      ringPos[i3 + 2] = Math.sin(angle) * radius;

      const mixed = Math.random() > 0.5 ? c1 : c2;
      ringColors[i3] = mixed.r;
      ringColors[i3 + 1] = mixed.g;
      ringColors[i3 + 2] = mixed.b;
    }

    ringGeo.setAttribute("position", new THREE.BufferAttribute(ringPos, 3));
    ringGeo.setAttribute("color", new THREE.BufferAttribute(ringColors, 3));

    const ringMat = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const ringParticles = new THREE.Points(ringGeo, ringMat);
    ringParticles.rotation.z = Math.PI / 8;
    rootGroup.add(ringParticles);

    // 3. Orbiting Geometric Satellites
    const satellites = [];
    const satCount = 4;
    for (let i = 0; i < satCount; i++) {
      const satGeo =
        i % 2 === 0
          ? new THREE.OctahedronGeometry(0.18)
          : new THREE.BoxGeometry(0.2, 0.2, 0.2);
      const satMat = new THREE.MeshStandardMaterial({
        color: i % 2 === 0 ? 0x00f5ff : 0xa855f7,
        emissive: i % 2 === 0 ? 0x00f5ff : 0xa855f7,
        emissiveIntensity: 0.7,
        wireframe: true,
      });
      const sat = new THREE.Mesh(satGeo, satMat);
      rootGroup.add(sat);
      satellites.push({
        mesh: sat,
        speed: 0.8 + i * 0.3,
        radius: 2.5 + i * 0.4,
        angle: (i * Math.PI) / 2,
        inclination: (i * Math.PI) / 4,
      });
    }

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00f5ff, 2, 10);
    cyanLight.position.set(3, 2, 4);
    scene.add(cyanLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 2, 10);
    purpleLight.position.set(-3, -2, -3);
    scene.add(purpleLight);

    // Mouse tracking & Raycasting
    let mouse = { x: 0, y: 0 };
    let targetRotation = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.x = x;
      mouse.y = y;
      targetRotation.y = x * 0.6;
      targetRotation.x = -y * 0.6;
    };

    container.addEventListener("mousemove", handleMouseMove);

    // Resize handling
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        if (newWidth > 0 && newHeight > 0) {
          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
        }
      }
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera/group tilt lerp
      rootGroup.rotation.y += (targetRotation.y - rootGroup.rotation.y) * 0.05;
      rootGroup.rotation.x += (targetRotation.x - rootGroup.rotation.x) * 0.05;

      // Rotations
      const spinSpeed = hovered ? 1.6 : 1.0;
      outerCore.rotation.y += 0.008 * spinSpeed;
      outerCore.rotation.x += 0.005 * spinSpeed;

      innerCore.rotation.y -= 0.012 * spinSpeed;
      torus.rotation.z += 0.015 * spinSpeed;
      torus2.rotation.y += 0.008 * spinSpeed;
      ringParticles.rotation.y += 0.005 * spinSpeed;

      // Pulse inner core scale
      const pulse = 1 + Math.sin(elapsedTime * 2) * 0.06;
      innerCore.scale.set(pulse, pulse, pulse);

      // Animate orbiting satellites
      satellites.forEach((sat) => {
        sat.angle += 0.015 * sat.speed * spinSpeed;
        sat.mesh.position.x =
          Math.cos(sat.angle) * sat.radius * Math.cos(sat.inclination);
        sat.mesh.position.y = Math.sin(sat.angle) * sat.radius * 0.5;
        sat.mesh.position.z =
          Math.sin(sat.angle) * sat.radius * Math.sin(sat.inclination);

        sat.mesh.rotation.x += 0.03;
        sat.mesh.rotation.y += 0.03;
      });

      // Float effect on root group
      rootGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      outerGeo.dispose();
      outerMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      torus2Geo.dispose();
      torus2Mat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, [hovered]);

  return (
    <div
      ref={mountRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-full h-[400px] sm:h-[450px] lg:h-[500px] relative cursor-grab active:cursor-grabbing flex items-center justify-center"
    >
      {/* Floating 3D Tech Badges */}
      <div className="absolute top-4 left-4 z-10 glass-panel px-3 py-1.5 rounded-full text-xs font-mono text-cyan flex items-center gap-2 border border-cyan/30 shadow-[0_0_15px_rgba(0,245,255,0.2)] animate-float">
        <span className="w-2 h-2 rounded-full bg-cyan animate-pulse"></span>
        <span>Interactive 3D Engine</span>
      </div>

      <div className="absolute bottom-6 right-4 z-10 glass-panel px-3.5 py-1.5 rounded-full text-xs font-mono text-purple-300 flex items-center gap-2 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)] animate-float-delayed">
        <span>Three.js • WebGL 60FPS</span>
      </div>
    </div>
  );
};

export default Hero3DCanvas;
