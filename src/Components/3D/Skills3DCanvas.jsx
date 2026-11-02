import { useEffect, useRef } from "react";
import * as THREE from "three";

const Skills3DCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 380;
    const height = container.clientHeight || 380;

    const isDarkMode = () =>
      document.documentElement.classList.contains("dark");

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const nodeCount = 65;
    const radius = 1.6;
    const nodes = [];
    const positions = [];

    const phi = Math.PI * (Math.sqrt(5) - 1);

    for (let i = 0; i < nodeCount; i++) {
      const y = 1 - (i / (nodeCount - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;

      const vec = new THREE.Vector3(x * radius, y * radius, z * radius);
      nodes.push(vec);
      positions.push(vec.x, vec.y, vec.z);
    }

    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );

    const pCanvas = document.createElement("canvas");
    pCanvas.width = 32;
    pCanvas.height = 32;
    const pCtx = pCanvas.getContext("2d");
    const pGrad = pCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
    pGrad.addColorStop(0, "#ffffff");
    pGrad.addColorStop(0.3, "#00f5ff");
    pGrad.addColorStop(0.8, "#6366f1");
    pGrad.addColorStop(1, "rgba(0,0,0,0)");
    pCtx.fillStyle = pGrad;
    pCtx.fillRect(0, 0, 32, 32);

    const nodeTexture = new THREE.CanvasTexture(pCanvas);
    const nodeMat = new THREE.PointsMaterial({
      size: 0.14,
      map: nodeTexture,
      transparent: true,
      blending: isDarkMode() ? THREE.AdditiveBlending : THREE.NormalBlending,
      opacity: 0.9,
      depthWrite: false,
    });

    const nodePoints = new THREE.Points(nodeGeo, nodeMat);
    group.add(nodePoints);

    const linePositions = [];
    const maxDist = 0.85;

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const d = nodes[i].distanceTo(nodes[j]);
        if (d < maxDist) {
          linePositions.push(nodes[i].x, nodes[i].y, nodes[i].z);
          linePositions.push(nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
    }

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3)
    );

    const lineMat = new THREE.LineBasicMaterial({
      color: isDarkMode() ? 0x00f5ff : 0x2563eb,
      transparent: true,
      opacity: isDarkMode() ? 0.35 : 0.65,
      blending: isDarkMode() ? THREE.AdditiveBlending : THREE.NormalBlending,
    });

    const lines = new THREE.LineSegments(lineGeo, lineMat);
    group.add(lines);

    const innerGeo = new THREE.IcosahedronGeometry(0.9, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: isDarkMode() ? 0xa855f7 : 0x7c3aed,
      wireframe: true,
      transparent: true,
      opacity: isDarkMode() ? 0.35 : 0.5,
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerSphere);

    // Observer for dark mode changes
    const observer = new MutationObserver(() => {
      const dark = isDarkMode();
      nodeMat.blending = dark ? THREE.AdditiveBlending : THREE.NormalBlending;
      lineMat.color.setHex(dark ? 0x00f5ff : 0x2563eb);
      lineMat.opacity = dark ? 0.35 : 0.65;
      lineMat.blending = dark ? THREE.AdditiveBlending : THREE.NormalBlending;
      innerMat.color.setHex(dark ? 0xa855f7 : 0x7c3aed);
      nodeMat.needsUpdate = true;
      lineMat.needsUpdate = true;
      innerMat.needsUpdate = true;
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    let mouse = { x: 0, y: 0 };
    let target = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      target.x = y * 0.5;
      target.y = x * 0.5;
    };

    container.addEventListener("mousemove", handleMouseMove);

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width: nw, height: nh } = entry.contentRect;
        if (nw > 0 && nh > 0) {
          camera.aspect = nw / nh;
          camera.updateProjectionMatrix();
          renderer.setSize(nw, nh);
        }
      }
    });
    resizeObserver.observe(container);

    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      mouse.x += (target.x - mouse.x) * 0.05;
      mouse.y += (target.y - mouse.y) * 0.05;

      group.rotation.x = elapsedTime * 0.15 + mouse.x;
      group.rotation.y = elapsedTime * 0.2 + mouse.y;

      innerSphere.rotation.x = -elapsedTime * 0.2;
      innerSphere.rotation.z = elapsedTime * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      observer.disconnect();
      container.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      nodeGeo.dispose();
      nodeMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      nodeTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-[320px] sm:h-[380px] lg:h-[420px] relative flex items-center justify-center cursor-pointer"
    >
      <div className="absolute -bottom-2 text-center text-xs font-mono text-cyan/70 dark:text-cyan/70 tracking-wider">
        [ 3D TECH MESH CONSTELLATION ]
      </div>
    </div>
  );
};

export default Skills3DCanvas;
