"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Rotate3d, Play, Pause, Compass, Eye, Sparkles } from "lucide-react";

interface RotatingSkullViewerProps {
  frontImage: string;
  backImage: string;
  alt: string;
  badgeText?: string;
  accentColor?: "cyan" | "gold";
  aspectRatio?: string;
  showHotspot?: boolean;
  hotspotLabel?: string;
  initialAngle?: number;
  autoRotateSpeed?: number;
}

export default function RotatingSkullViewer({
  frontImage,
  backImage,
  alt,
  badgeText,
  accentColor = "gold",
  aspectRatio = "aspect-[16/10]",
  showHotspot = true,
  hotspotLabel = "TMJ Condyle",
  initialAngle = 0,
  autoRotateSpeed = 0.45,
}: RotatingSkullViewerProps) {
  const [angle, setAngle] = useState<number>(initialAngle);
  const [isAutoRotating, setIsAutoRotating] = useState<boolean>(true);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [startAngle, setStartAngle] = useState<number>(0);
  const [pitch, setPitch] = useState<number>(0); // subtle vertical tilt

  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Auto-rotation loop using requestAnimationFrame for 60fps smoothness
  useEffect(() => {
    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      const delta = (currentTime - lastTime) / 16.67; // normalize to 60fps
      lastTime = currentTime;

      if (isAutoRotating && !isDragging) {
        setAngle((prev) => (prev + autoRotateSpeed * delta) % 360);
      }

      animationFrameRef.current = requestAnimationFrame(loop);
    };

    animationFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isAutoRotating, isDragging, autoRotateSpeed]);

  // Mouse & Touch Dragging Handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setStartAngle(angle);
    if (containerRef.current) {
      containerRef.current.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) {
      // Subtle 3D pitch tilt on hover
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const y = e.clientY - rect.top;
        const normalizedY = (y / rect.height - 0.5) * -12; // -6deg to +6deg
        setPitch(normalizedY);
      }
      return;
    }

    const deltaX = e.clientX - startX;
    // 1 pixel = ~0.65 degrees of rotation
    const newAngle = ((startAngle + deltaX * 0.65) % 360 + 360) % 360;
    setAngle(newAngle);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    if (containerRef.current) {
      try {
        containerRef.current.releasePointerCapture(e.pointerId);
      } catch (_) {
        // Safe fallback
      }
    }
  };

  // Quick preset angle buttons
  const snapToAngle = (targetAngle: number) => {
    setIsAutoRotating(false);
    setAngle(targetAngle);
  };

  // Normalize angle for lighting calculations
  const normalizedAngle = Math.round(angle);
  const lightX = 25 + ((normalizedAngle % 360) / 360) * 50; // moves 25% to 75%

  const isCyan = accentColor === "cyan";
  const glowBorder = isCyan ? "border-cyan-500/40" : "border-[#D8B45C]/40";
  const glowText = isCyan ? "text-cyan-400" : "text-[#D8B45C]";
  const glowBg = isCyan ? "bg-cyan-500" : "bg-[#D8B45C]";
  const glowShadow = isCyan ? "shadow-[0_0_15px_rgba(6,182,212,0.6)]" : "shadow-[0_0_15px_rgba(216,180,92,0.6)]";

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className={`relative w-full ${aspectRatio} rounded-xl overflow-hidden border border-white/10 bg-[#0B0B0B] group/viewer select-none cursor-grab active:cursor-grabbing transition-colors duration-300 hover:${glowBorder}`}
      style={{ perspective: "1200px" }}
    >
      {/* 1. Cinematic Studio Gradient & Depth Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none z-10" />

      {/* 2. Top Bar: Badge & 360° Angle Dial */}
      <div className="absolute top-3 left-3 right-3 z-30 flex items-center justify-between pointer-events-none">
        {badgeText && (
          <div className="px-2.5 py-1 rounded-[4px] bg-black/80 border border-white/15 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-neutral-300 flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${glowBg} animate-pulse`} />
            <span className={glowText}>{badgeText}</span>
          </div>
        )}

        {/* 360° Angle Readout */}
        <div className="px-2.5 py-1 rounded-full bg-black/75 border border-white/15 backdrop-blur-md text-[10px] font-mono text-white/90 flex items-center gap-1.5">
          <Rotate3d className={`w-3 h-3 ${glowText} animate-spin`} style={{ animationDuration: "8s" }} />
          <span>{normalizedAngle}°</span>
          <span className="text-white/40">360° Orbit</span>
        </div>
      </div>

      {/* 3. 3D Rotating Skull Object Container (Preserves 3D Space) */}
      <div
        className="w-full h-full relative"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateY(${angle}deg) rotateX(${pitch}deg)`,
          transition: isDragging ? "none" : "transform 0.08s linear",
        }}
      >
        {/* FRONT FACE (0° - 90°, 270° - 360°) */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "translateZ(1px)",
          }}
        >
          <Image
            src={frontImage}
            alt={`${alt} - Front View`}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Dynamic Specular Studio Lighting Reflection that sweeps with rotation */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle 320px at ${lightX}% 45%, ${
                isCyan ? "rgba(56, 189, 248, 0.26)" : "rgba(216, 180, 92, 0.26)"
              } 0%, transparent 70%)`,
            }}
          />

          {/* Floating 3D TMJ Hotspot Pin in Front */}
          {showHotspot && (
            <div
              className="absolute top-[44%] left-[48%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
              style={{ transform: "translateZ(20px)" }}
            >
              <span className="relative flex h-3.5 w-3.5">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${glowBg} opacity-75`} />
                <span className={`relative inline-flex rounded-full h-3.5 w-3.5 ${glowBg} border border-black ${glowShadow}`} />
              </span>
            </div>
          )}
        </div>

        {/* BACK FACE (90° - 270°) */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg) translateZ(1px)",
          }}
        >
          <Image
            src={backImage}
            alt={`${alt} - Posterior View`}
            fill
            className="object-cover brightness-95 contrast-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Posterior Specular Light Overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle 320px at ${100 - lightX}% 45%, ${
                isCyan ? "rgba(56, 189, 248, 0.24)" : "rgba(216, 180, 92, 0.24)"
              } 0%, transparent 70%)`,
            }}
          />

          {/* Posterior Perspective Tag */}
          <div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded bg-black/80 border border-white/20 text-[9px] font-mono uppercase tracking-wider text-white/80 pointer-events-none"
            style={{ transform: "translateZ(15px)" }}
          >
            Posterior Cranial Aspect (180°)
          </div>
        </div>
      </div>

      {/* 4. Bottom Controls: Quick Angle Presets & Auto-Spin Play/Pause */}
      <div className="absolute bottom-2.5 left-3 right-3 z-30 flex items-center justify-between pointer-events-auto">
        {/* Play/Pause 360 Spin */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsAutoRotating(!isAutoRotating);
          }}
          className="px-2.5 py-1 rounded-full bg-black/80 hover:bg-white/10 border border-white/20 text-[11px] text-white/90 flex items-center gap-1.5 transition-colors backdrop-blur-md"
          title={isAutoRotating ? "Pause 360° Rotation" : "Auto-Rotate 360°"}
        >
          {isAutoRotating ? (
            <>
              <Pause className="w-3 h-3 text-[#D8B45C]" />
              <span className="text-[10px] font-mono">Auto 360°</span>
            </>
          ) : (
            <>
              <Play className="w-3 h-3 text-[#D8B45C]" />
              <span className="text-[10px] font-mono">Rotate</span>
            </>
          )}
        </button>

        {/* Orbit Angle Presets */}
        <div className="flex items-center gap-1 bg-black/80 p-0.5 rounded-full border border-white/15 backdrop-blur-md">
          <button
            onClick={(e) => {
              e.stopPropagation();
              snapToAngle(0);
            }}
            className={`px-2 py-0.5 rounded-full text-[10px] font-mono transition-colors ${
              Math.abs(angle - 0) < 15 || Math.abs(angle - 360) < 15
                ? `${glowBg} text-black font-semibold`
                : "text-white/60 hover:text-white"
            }`}
          >
            Front
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              snapToAngle(90);
            }}
            className={`px-2 py-0.5 rounded-full text-[10px] font-mono transition-colors ${
              Math.abs(angle - 90) < 15 ? `${glowBg} text-black font-semibold` : "text-white/60 hover:text-white"
            }`}
          >
            90°
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              snapToAngle(180);
            }}
            className={`px-2 py-0.5 rounded-full text-[10px] font-mono transition-colors ${
              Math.abs(angle - 180) < 15 ? `${glowBg} text-black font-semibold` : "text-white/60 hover:text-white"
            }`}
          >
            180°
          </button>
        </div>

        {/* Drag Hint */}
        <span className="text-[9px] font-mono text-white/40 hidden sm:inline-block pointer-events-none">
          Drag to 3D Orbit
        </span>
      </div>

      {/* 5. Interactive Scrub Bar on Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10 z-30">
        <div
          className={`h-full ${glowBg} transition-all duration-75`}
          style={{ width: `${((angle % 360) / 360) * 100}%` }}
        />
      </div>
    </div>
  );
}
