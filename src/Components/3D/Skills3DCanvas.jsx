import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const Skills3DCanvas = () => {
  const mountRef = useRef(null);
  const [activeTab, setActiveTab] = useState("FullStack.ts");
  const [compileCount, setCompileCount] = useState(0);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 380;
    const height = container.clientHeight || 380;

    const isDarkMode = () =>
      document.documentElement.classList.contains("dark");

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.6, 5.0);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Master interactive root group
    const rootGroup = new THREE.Group();
    rootGroup.position.set(0, -0.2, 0);
    scene.add(rootGroup);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(
      isDarkMode() ? 0x223355 : 0x667799,
      1.8
    );
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.2);
    dirLight.position.set(4, 6, 5);
    scene.add(dirLight);

    const cyanPoint = new THREE.PointLight(0x00f5ff, 3.5, 8);
    cyanPoint.position.set(-2, 2, 2);
    scene.add(cyanPoint);

    const purplePoint = new THREE.PointLight(0xa855f7, 3.0, 8);
    purplePoint.position.set(2.5, 2, 1.5);
    scene.add(purplePoint);

    // 4. Laptop Construction
    const laptopGroup = new THREE.Group();
    rootGroup.add(laptopGroup);

    // Chassis Base
    const baseGeo = new THREE.BoxGeometry(2.7, 0.1, 1.8);
    const chassisMat = new THREE.MeshStandardMaterial({
      color: isDarkMode() ? 0x181e2b : 0xd1d5db,
      metalness: 0.85,
      roughness: 0.25,
    });
    const laptopBase = new THREE.Mesh(baseGeo, chassisMat);
    laptopBase.position.y = 0;
    laptopGroup.add(laptopBase);

    // Trackpad
    const trackpadGeo = new THREE.BoxGeometry(0.85, 0.015, 0.55);
    const trackpadMat = new THREE.MeshStandardMaterial({
      color: isDarkMode() ? 0x0f172a : 0xe2e8f0,
      metalness: 0.9,
      roughness: 0.2,
    });
    const trackpad = new THREE.Mesh(trackpadGeo, trackpadMat);
    trackpad.position.set(0, 0.052, 0.45);
    laptopGroup.add(trackpad);

    // Illuminated Keyboard Canvas Texture
    const kbCanvas = document.createElement("canvas");
    kbCanvas.width = 512;
    kbCanvas.height = 256;
    const kbCtx = kbCanvas.getContext("2d");

    const renderKeyboard = (dark) => {
      kbCtx.fillStyle = dark ? "#0a0f1d" : "#e2e8f0";
      kbCtx.fillRect(0, 0, 512, 256);

      // Key rows
      const rows = 5;
      const cols = 14;
      const keyW = 30;
      const keyH = 36;
      const startX = 22;
      const startY = 18;

      kbCtx.fillStyle = dark ? "#111827" : "#f8fafc";
      kbCtx.strokeStyle = dark ? "rgba(0, 245, 255, 0.4)" : "rgba(37, 99, 235, 0.3)";
      kbCtx.lineWidth = 1.5;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (r === 4 && (c > 3 && c < 10)) {
            // Spacebar
            if (c === 4) {
              const spW = keyW * 6 + 15;
              kbCtx.fillRect(startX + c * 34, startY + r * 44, spW, keyH);
              kbCtx.strokeRect(startX + c * 34, startY + r * 44, spW, keyH);
            }
            continue;
          }
          const x = startX + c * 34;
          const y = startY + r * 44;
          kbCtx.fillRect(x, y, keyW, keyH);
          kbCtx.strokeRect(x, y, keyW, keyH);
        }
      }
    };
    renderKeyboard(isDarkMode());

    const kbTexture = new THREE.CanvasTexture(kbCanvas);
    const kbMat = new THREE.MeshBasicMaterial({
      map: kbTexture,
      transparent: true,
      opacity: 0.95,
    });
    const kbGeo = new THREE.PlaneGeometry(2.35, 1.05);
    const keyboard = new THREE.Mesh(kbGeo, kbMat);
    keyboard.rotation.x = -Math.PI / 2;
    keyboard.position.set(0, 0.053, -0.22);
    laptopGroup.add(keyboard);

    // Screen Assembly (Hinge and Screen Lid)
    const screenHinge = new THREE.Group();
    screenHinge.position.set(0, 0.05, -0.9);
    laptopGroup.add(screenHinge);

    // Lid chassis
    const lidGeo = new THREE.BoxGeometry(2.7, 1.78, 0.06);
    const screenLid = new THREE.Mesh(lidGeo, chassisMat);
    screenLid.position.set(0, 0.89, 0);
    screenHinge.add(screenLid);

    // Inner Screen Display with dynamic code canvas
    const screenCanvas = document.createElement("canvas");
    screenCanvas.width = 1024;
    screenCanvas.height = 640;
    const sCtx = screenCanvas.getContext("2d");

    // Multi-tab code snippets
    const snippets = [
      {
        tab: "⚡ FullStack.ts",
        file: "portfolio > src > skills > MohammadEmon.ts",
        lines: [
          { num: "01", text: "import { MERNStack, CloudArchitect } from 'developer';", color: "#c678dd" },
          { num: "02", text: "", color: "" },
          { num: "03", text: "const engineer: CloudArchitect = {", color: "#61afef" },
          { num: "04", text: "  name: 'Mohammad Emon',", color: "#98c379" },
          { num: "05", text: "  role: 'Full-Stack Web Architect',", color: "#98c379" },
          { num: "06", text: "  frontend: ['React.js', 'Next.js', 'TailwindCSS'],", color: "#e5c07b" },
          { num: "07", text: "  backend:  ['Node.js', 'Express.js', 'MongoDB'],", color: "#e5c07b" },
          { num: "08", text: "  database: ['Mongoose', 'REST APIs', 'JWT Auth'],", color: "#56b6c2" },
          { num: "09", text: "  status:   'Building scalable modern web apps 🚀',", color: "#98c379" },
          { num: "10", text: "};", color: "#61afef" },
          { num: "11", text: "export default async function deploy() {", color: "#c678dd" },
          { num: "12", text: "  return await engineer.craftNextGenExperience();", color: "#61afef" },
          { num: "13", text: "}", color: "#c678dd" },
        ],
        cursorLine: 12,
        cursorX: 575,
      },
      {
        tab: "⚛️ ReactApp.tsx",
        file: "portfolio > src > components > InteractiveUI.tsx",
        lines: [
          { num: "01", text: "import React, { useState, useEffect } from 'react';", color: "#c678dd" },
          { num: "02", text: "import { motion } from 'framer-motion';", color: "#c678dd" },
          { num: "03", text: "", color: "" },
          { num: "04", text: "export const PortfolioExperience = () => {", color: "#61afef" },
          { num: "05", text: "  const [theme, setTheme] = useState('cyber-dark');", color: "#e5c07b" },
          { num: "06", text: "  const [performance, setPerf] = useState('60 FPS');", color: "#e5c07b" },
          { num: "07", text: "", color: "" },
          { num: "08", text: "  // Render seamless responsive UI with Tailwind & 3D", color: "#7f848e" },
          { num: "09", text: "  return <motion.div className='glass-morphism' />;", color: "#98c379" },
          { num: "10", text: "};", color: "#61afef" },
          { num: "11", text: "// React 19 + Next.js 15 + Tailwind CSS v3", color: "#7f848e" },
        ],
        cursorLine: 9,
        cursorX: 620,
      },
      {
        tab: "🟢 ServerApi.js",
        file: "portfolio > server > routes > apiCluster.js",
        lines: [
          { num: "01", text: "const express = require('express');", color: "#c678dd" },
          { num: "02", text: "const mongoose = require('mongoose');", color: "#c678dd" },
          { num: "03", text: "const router = express.Router();", color: "#61afef" },
          { num: "04", text: "", color: "" },
          { num: "05", text: "router.post('/api/deploy', authGuard, async (req, res) => {", color: "#61afef" },
          { num: "06", text: "  const project = await Project.create(req.body);", color: "#98c379" },
          { num: "07", text: "  res.status(200).json({ status: 'DEPLOYED_OK', project });", color: "#56b6c2" },
          { num: "08", text: "});", color: "#61afef" },
          { num: "09", text: "module.exports = router;", color: "#c678dd" },
        ],
        cursorLine: 7,
        cursorX: 680,
      },
    ];

    let currentSnippetIdx = 0;
    let cursorBlink = true;
    let compileFlash = 0;

    const renderScreen = (dark, cursorOn, flashRatio = 0) => {
      const activeSnippet = snippets[currentSnippetIdx];

      // Editor background
      sCtx.fillStyle = dark ? "#0b1021" : "#1e293b";
      sCtx.fillRect(0, 0, 1024, 640);

      if (flashRatio > 0) {
        sCtx.fillStyle = `rgba(0, 245, 255, ${flashRatio * 0.28})`;
        sCtx.fillRect(0, 0, 1024, 640);
      }

      // Title bar
      sCtx.fillStyle = dark ? "#070b16" : "#0f172a";
      sCtx.fillRect(0, 0, 1024, 46);

      // Window control dots
      const dots = ["#ff5f56", "#ffbd2e", "#27c93f"];
      dots.forEach((color, i) => {
        sCtx.beginPath();
        sCtx.arc(24 + i * 22, 23, 7, 0, Math.PI * 2);
        sCtx.fillStyle = color;
        sCtx.fill();
      });

      // Active tab label
      sCtx.fillStyle = "#1e293b";
      sCtx.fillRect(110, 8, 290, 38);
      sCtx.fillStyle = "#00f5ff";
      sCtx.font = "bold 17px 'JetBrains Mono', 'Fira Code', monospace";
      sCtx.fillText(activeSnippet.tab + "  [Emon]", 125, 32);

      // Breadcrumb / Status Line
      sCtx.fillStyle = "rgba(148, 163, 184, 0.45)";
      sCtx.font = "14px monospace";
      sCtx.fillText(activeSnippet.file, 430, 32);

      // Line Numbers & Code lines
      const startY = 88;
      const lineHeight = 36;

      activeSnippet.lines.forEach((line, index) => {
        const y = startY + index * lineHeight;
        // Line number
        sCtx.fillStyle = "#475569";
        sCtx.font = "16px 'JetBrains Mono', monospace";
        sCtx.fillText(line.num, 20, y);

        // Code content
        if (line.text) {
          sCtx.fillStyle = line.color || "#e2e8f0";
          sCtx.font = "bold 17px 'JetBrains Mono', 'Fira Code', monospace";
          sCtx.fillText(line.text, 68, y);
        }
      });

      // Blinking cursor
      if (cursorOn) {
        sCtx.fillStyle = "#00f5ff";
        sCtx.fillRect(
          activeSnippet.cursorX || 550,
          startY + (activeSnippet.cursorLine - 1) * lineHeight - 18,
          10,
          24
        );
      }

      // Bottom Terminal Bar
      sCtx.fillStyle = dark ? "#050914" : "#0f172a";
      sCtx.fillRect(0, 580, 1024, 60);

      sCtx.fillStyle = "#10b981";
      sCtx.beginPath();
      sCtx.arc(28, 610, 5, 0, Math.PI * 2);
      sCtx.fill();

      sCtx.fillStyle = "#38bdf8";
      sCtx.font = "bold 15px monospace";
      sCtx.fillText(
        `STATUS: build successful [Tab ${currentSnippetIdx + 1}/3] • http://localhost:5173`,
        44,
        615
      );

      sCtx.fillStyle = "#a855f7";
      sCtx.fillText("[Click to Switch / Run]", 800, 615);
    };

    renderScreen(isDarkMode(), true, 0);

    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    screenTexture.generateMipmaps = true;

    const screenGeo = new THREE.PlaneGeometry(2.55, 1.62);
    const screenMat = new THREE.MeshBasicMaterial({
      map: screenTexture,
      toneMapped: false,
    });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, 0.89, 0.032);
    screenHinge.add(screenMesh);

    // Screen open angle tilt (~112 degrees back)
    screenHinge.rotation.x = -Math.PI * 0.62;

    // 5. Floating 3D React Atom Ecosystem
    const reactAtomGroup = new THREE.Group();
    reactAtomGroup.position.set(1.75, 0.9, 0.2);
    rootGroup.add(reactAtomGroup);

    // React nucleus
    const nucleusGeo = new THREE.SphereGeometry(0.12, 24, 24);
    const nucleusMat = new THREE.MeshStandardMaterial({
      color: 0x00f5ff,
      emissive: 0x00d8f6,
      emissiveIntensity: 1.2,
      roughness: 0.1,
    });
    const nucleus = new THREE.Mesh(nucleusGeo, nucleusMat);
    reactAtomGroup.add(nucleus);

    // 3 React orbital rings
    const ringGeo = new THREE.TorusGeometry(0.48, 0.016, 16, 64);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x00f5ff,
      emissive: 0x00b4d8,
      emissiveIntensity: 0.8,
      roughness: 0.2,
    });

    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    const ring2 = new THREE.Mesh(ringGeo, ringMat);
    const ring3 = new THREE.Mesh(ringGeo, ringMat);

    ring1.rotation.y = 0;
    ring2.rotation.y = Math.PI / 3;
    ring2.rotation.x = Math.PI / 4;
    ring3.rotation.y = -Math.PI / 3;
    ring3.rotation.x = -Math.PI / 4;

    reactAtomGroup.add(ring1, ring2, ring3);

    // 6. Floating 3D Database Tier (MongoDB/Backend Stack)
    const dbGroup = new THREE.Group();
    dbGroup.position.set(-1.8, 0.85, 0.3);
    rootGroup.add(dbGroup);

    const cylGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.12, 32);
    const cylMat = new THREE.MeshStandardMaterial({
      color: isDarkMode() ? 0x10b981 : 0x059669,
      metalness: 0.7,
      roughness: 0.3,
      emissive: 0x047857,
      emissiveIntensity: 0.4,
    });

    const dbLayer1 = new THREE.Mesh(cylGeo, cylMat);
    const dbLayer2 = new THREE.Mesh(cylGeo, cylMat);
    const dbLayer3 = new THREE.Mesh(cylGeo, cylMat);

    dbLayer1.position.y = -0.22;
    dbLayer2.position.y = 0;
    dbLayer3.position.y = 0.22;
    dbGroup.add(dbLayer1, dbLayer2, dbLayer3);

    // Glowing Neon Separator Rings for Database
    const dbGlowGeo = new THREE.TorusGeometry(0.33, 0.018, 16, 32);
    const dbGlowMat = new THREE.MeshStandardMaterial({
      color: 0x34d399,
      emissive: 0x10b981,
      emissiveIntensity: 1.2,
    });
    const dbGlow1 = new THREE.Mesh(dbGlowGeo, dbGlowMat);
    dbGlow1.rotation.x = Math.PI / 2;
    dbGlow1.position.y = -0.11;

    const dbGlow2 = new THREE.Mesh(dbGlowGeo, dbGlowMat);
    dbGlow2.rotation.x = Math.PI / 2;
    dbGlow2.position.y = 0.11;
    dbGroup.add(dbGlow1, dbGlow2);

    // 7. Floating 3D Holographic Code Badges (Sprites)
    const createBadgeSprite = (label, color) => {
      const bCanvas = document.createElement("canvas");
      bCanvas.width = 160;
      bCanvas.height = 80;
      const bCtx = bCanvas.getContext("2d");

      bCtx.fillStyle = "rgba(15, 23, 42, 0.85)";
      bCtx.strokeStyle = color;
      bCtx.lineWidth = 4;
      bCtx.beginPath();
      if (typeof bCtx.roundRect === "function") {
        bCtx.roundRect(6, 6, 148, 68, 16);
      } else {
        const rx = 6, ry = 6, rw = 148, rh = 68, rr = 16;
        bCtx.moveTo(rx + rr, ry);
        bCtx.lineTo(rx + rw - rr, ry);
        bCtx.quadraticCurveTo(rx + rw, ry, rx + rw, ry + rr);
        bCtx.lineTo(rx + rw, ry + rh - rr);
        bCtx.quadraticCurveTo(rx + rw, ry + rh, rx + rw - rr, ry + rh);
        bCtx.lineTo(rx + rr, ry + rh);
        bCtx.quadraticCurveTo(rx, ry + rh, rx, ry + rh - rr);
        bCtx.lineTo(rx, ry + rr);
        bCtx.quadraticCurveTo(rx, ry, rx + rr, ry);
      }
      bCtx.fill();
      bCtx.stroke();

      bCtx.fillStyle = color;
      bCtx.font = "bold 32px 'JetBrains Mono', monospace";
      bCtx.textAlign = "center";
      bCtx.textBaseline = "middle";
      bCtx.fillText(label, 80, 42);

      const bTex = new THREE.CanvasTexture(bCanvas);
      const sMat = new THREE.SpriteMaterial({
        map: bTex,
        transparent: true,
        opacity: 0.95,
      });
      const sprite = new THREE.Sprite(sMat);
      sprite.scale.set(0.65, 0.32, 1);
      return sprite;
    };

    const badgeReact = createBadgeSprite("</React>", "#00f5ff");
    badgeReact.position.set(1.75, 1.6, 0.2);
    rootGroup.add(badgeReact);

    const badgeMongo = createBadgeSprite("{ MongoDB }", "#10b981");
    badgeMongo.position.set(-1.8, 1.45, 0.3);
    rootGroup.add(badgeMongo);

    const badgeNode = createBadgeSprite("Node.js ⚙️", "#22c55e");
    badgeNode.position.set(0, 1.85, -0.6);
    rootGroup.add(badgeNode);

    // 8. Cyber Platform Base / Ground Holographic Rings
    const platformGroup = new THREE.Group();
    platformGroup.position.set(0, -0.7, 0);
    rootGroup.add(platformGroup);

    const ringBaseGeo = new THREE.RingGeometry(1.6, 1.65, 48);
    const ringBaseMat = new THREE.MeshBasicMaterial({
      color: isDarkMode() ? 0x00f5ff : 0x2563eb,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: isDarkMode() ? 0.4 : 0.6,
    });
    const baseRing = new THREE.Mesh(ringBaseGeo, ringBaseMat);
    baseRing.rotation.x = Math.PI / 2;
    platformGroup.add(baseRing);

    const ringOuterGeo = new THREE.RingGeometry(2.1, 2.14, 48);
    const ringOuterMat = new THREE.MeshBasicMaterial({
      color: isDarkMode() ? 0xa855f7 : 0x7c3aed,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: isDarkMode() ? 0.3 : 0.5,
    });
    const outerRing = new THREE.Mesh(ringOuterGeo, ringOuterMat);
    outerRing.rotation.x = Math.PI / 2;
    platformGroup.add(outerRing);

    // 9. Orbiting Data Packet Particles
    const particleCount = 75;
    const pGeo = new THREE.BufferGeometry();
    const pPositions = new Float32Array(particleCount * 3);
    const pColors = new Float32Array(particleCount * 3);

    const cCyan = new THREE.Color("#00f5ff");
    const cPurple = new THREE.Color("#a855f7");
    const cGreen = new THREE.Color("#10b981");

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.2 + Math.random() * 1.8;
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 1.8;

      pPositions[i * 3] = Math.cos(angle) * radius;
      pPositions[i * 3 + 1] = y;
      pPositions[i * 3 + 2] = Math.sin(angle) * radius;

      const col = i % 3 === 0 ? cCyan : i % 3 === 1 ? cPurple : cGreen;
      pColors[i * 3] = col.r;
      pColors[i * 3 + 1] = col.g;
      pColors[i * 3 + 2] = col.b;
    }

    pGeo.setAttribute("position", new THREE.BufferAttribute(pPositions, 3));
    pGeo.setAttribute("color", new THREE.BufferAttribute(pColors, 3));

    const pMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });
    const particles = new THREE.Points(pGeo, pMat);
    rootGroup.add(particles);

    // 10. Dark mode observer
    const observer = new MutationObserver(() => {
      const dark = isDarkMode();
      ambientLight.color.setHex(dark ? 0x223355 : 0x667799);
      chassisMat.color.setHex(dark ? 0x181e2b : 0xd1d5db);
      trackpadMat.color.setHex(dark ? 0x0f172a : 0xe2e8f0);
      ringBaseMat.color.setHex(dark ? 0x00f5ff : 0x2563eb);
      ringOuterMat.color.setHex(dark ? 0xa855f7 : 0x7c3aed);
      renderKeyboard(dark);
      kbTexture.needsUpdate = true;
      renderScreen(dark, cursorBlink, compileFlash);
      screenTexture.needsUpdate = true;
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // 11. Mouse Movement & Parallax Tilting
    let mouse = { x: 0, y: 0 };
    let target = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      target.x = y * 0.35;
      target.y = x * 0.55;
    };

    container.addEventListener("mousemove", handleMouseMove);

    // Click triggers dynamic code compilation pulse + cycles tab snippets
    const handleClick = () => {
      compileFlash = 1.0;
      currentSnippetIdx = (currentSnippetIdx + 1) % snippets.length;
      setCompileCount((prev) => prev + 1);
    };

    container.addEventListener("click", handleClick);

    // Resize observer
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

    // 12. Animation Loop
    let animationFrameId;
    let startTime = performance.now();
    let lastBlink = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) / 1000;

      // Smooth mouse damping
      mouse.x += (target.x - mouse.x) * 0.06;
      mouse.y += (target.y - mouse.y) * 0.06;

      // Subtle natural breathing float
      const breath = Math.sin(elapsedTime * 1.5) * 0.04;
      laptopGroup.position.y = breath;

      // Interactive rotation with mouse parallax
      rootGroup.rotation.x = 0.22 + mouse.x * 0.3;
      rootGroup.rotation.y = -0.35 + mouse.y * 0.6;

      // React atom orbital animation
      reactAtomGroup.rotation.y = elapsedTime * 0.8;
      ring1.rotation.z = elapsedTime * 1.2;
      ring2.rotation.z = -elapsedTime * 1.0;
      ring3.rotation.z = elapsedTime * 0.9;
      reactAtomGroup.position.y = 0.9 + Math.sin(elapsedTime * 2 + 1) * 0.08;
      badgeReact.position.y = 1.55 + Math.sin(elapsedTime * 2 + 1) * 0.08;

      // Database hover bobbing & slow spin
      dbGroup.rotation.y = elapsedTime * 0.4;
      dbGroup.position.y = 0.85 + Math.sin(elapsedTime * 1.8) * 0.07;
      badgeMongo.position.y = 1.45 + Math.sin(elapsedTime * 1.8) * 0.07;

      // Node badge bobbing
      badgeNode.position.y = 1.85 + Math.cos(elapsedTime * 1.6) * 0.06;

      // Platform hologram slow rotation
      baseRing.rotation.z = elapsedTime * 0.2;
      outerRing.rotation.z = -elapsedTime * 0.15;

      // Orbiting particles
      particles.rotation.y = elapsedTime * 0.25;

      // Cursor blink and compile flash updates (at 500ms intervals or during flash)
      if (elapsedTime - lastBlink > 0.53 || compileFlash > 0.02) {
        if (elapsedTime - lastBlink > 0.53) {
          cursorBlink = !cursorBlink;
          lastBlink = elapsedTime;
        }

        if (compileFlash > 0) {
          compileFlash = Math.max(0, compileFlash - 0.06);
        }

        renderScreen(isDarkMode(), cursorBlink, compileFlash);
        screenTexture.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      observer.disconnect();
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("click", handleClick);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Memory cleanup
      baseGeo.dispose();
      trackpadGeo.dispose();
      kbGeo.dispose();
      lidGeo.dispose();
      screenGeo.dispose();
      nucleusGeo.dispose();
      ringGeo.dispose();
      cylGeo.dispose();
      dbGlowGeo.dispose();
      ringBaseGeo.dispose();
      ringOuterGeo.dispose();
      pGeo.dispose();

      chassisMat.dispose();
      trackpadMat.dispose();
      kbMat.dispose();
      screenMat.dispose();
      nucleusMat.dispose();
      ringMat.dispose();
      cylMat.dispose();
      dbGlowMat.dispose();
      ringBaseMat.dispose();
      ringOuterMat.dispose();
      pMat.dispose();

      kbTexture.dispose();
      screenTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-[340px] sm:h-[400px] lg:h-[430px] relative flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
      title="Click laptop to compile & run code!"
    >
      {/* Bottom Floating Interactive Tag */}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-blue-50/90 dark:bg-slate-900/90 border border-blue-200/80 dark:border-cyan/30 text-[11px] font-mono text-[#2563EB] dark:text-cyan flex items-center gap-2 shadow-sm backdrop-blur-md z-10 whitespace-nowrap">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
        <span>Click screen to compile • Drag to rotate</span>
      </div>
    </div>
  );
};

export default Skills3DCanvas;
