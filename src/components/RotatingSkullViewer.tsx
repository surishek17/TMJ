"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Rotate3d, Play, Pause } from "lucide-react";

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

  // 60fps auto-rotation loop
  useEffect(() => {
    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      const delta = (currentTime - lastTime) / 16.67;
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

  // Pointer Drag Handlers
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
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const y = e.clientY - rect.top;
        const normalizedY = (y / rect.height - 0.5) * -10; // -5deg to +5deg
        setPitch(normalizedY);
      }
      return;
    }

    const deltaX = e.clientX - startX;
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

  const snapToAngle = (targetAngle: number) => {
    setIsAutoRotating(false);
    setAngle(targetAngle);
  };

  const normalizedAngle = Math.round(angle);
  const isCyan = accentColor === "cyan";
  const glowBorder = isCyan ? "border-cyan-500/40" : "border-[#D8B45C]/40";
  const glowText = isCyan ? "text-cyan-400" : "text-[#D8B45C]";
  const glowBg = isCyan ? "bg-cyan-500" : "bg-[#D8B45C]";
  const glowShadow = isCyan
    ? "shadow-[0_0_15px_rgba(6,182,212,0.6)]"
    : "shadow-[0_0_15px_rgba(216,180,92,0.6)]";

  // Dynamic light calculation based on rotation
  const lightX = 25 + ((normalizedAngle % 360) / 360) * 50;

  // Pedestal shadow perspective scaling as skull rotates
  const shadowScale = 0.85 + Math.abs(Math.sin((angle * Math.PI) / 180)) * 0.25;

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className={`relative w-full ${aspectRatio} rounded-xl overflow-hidden border border-white/10 bg-[#0B0B0B] group/viewer select-none cursor-grab active:cursor-grabbing transition-colors duration-300 hover:${glowBorder}`}
      style={{ perspective: "1000px" }}
    >
      {/* 1. FIXED STATIONARY BACKGROUND (Never rotates) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-[#0D0D0D] to-[#121212] pointer-events-none" />
      
      {/* Subtle Studio Pedestal Glow */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 h-12 rounded-full blur-[20px] pointer-events-none opacity-40 transition-all duration-300"
        style={{
          background: isCyan
            ? "radial-gradient(ellipse at center, rgba(6,182,212,0.45) 0%, transparent 70%)"
            : "radial-gradient(ellipse at center, rgba(216,180,92,0.45) 0%, transparent 70%)",
        }}
      />

      {/* Stationary Circular Pedestal Ring on Floor */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-44 h-8 rounded-full border border-white/[0.08] pointer-events-none flex items-center justify-center opacity-60">
        <div
          className="w-32 h-4 rounded-full bg-black/60 blur-[4px] transition-transform duration-100"
          style={{ transform: `scaleX(${shadowScale})` }}
        />
      </div>

      {/* 2. FIXED STATIONARY TOP BAR: Badge & 360° Angle Dial */}
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

      {/* 3. ONLY THE FLOATING SKULL ROTATES (Isolated from Background) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="relative w-[78%] h-[82%] flex items-center justify-center"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(${angle}deg) rotateX(${pitch}deg)`,
            transition: isDragging ? "none" : "transform 0.08s linear",
          }}
        >
          {/* FRONT SKULL (0° - 90°, 270° - 360°) */}
          <div
            className="absolute inset-0 w-full h-full flex items-center justify-center"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "translateZ(1px)",
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={frontImage}
                alt={`${alt} - Front View`}
                fill
                className="object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)]"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Dynamic Specular Highlight sweep across the rotating skull bone */}
              <div
                className="absolute inset-0 pointer-events-none mix-blend-screen opacity-70"
                style={{
                  background: `radial-gradient(circle 220px at ${lightX}% 40%, ${
                    isCyan ? "rgba(56, 189, 248, 0.35)" : "rgba(216, 180, 92, 0.35)"
                  } 0%, transparent 65%)`,
                }}
              />

              {/* Floating TMJ Hotspot on the Skull's Condyle */}
              {showHotspot && (
                <div
                  className="absolute top-[48%] left-[45%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
                  style={{ transform: "translateZ(25px)" }}
                  title={hotspotLabel}
                >
                  <span className="relative flex h-3.5 w-3.5">
                    <span
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full ${glowBg} opacity-75`}
                    />
                    <span
                      className={`relative inline-flex rounded-full h-3.5 w-3.5 ${glowBg} border border-black ${glowShadow}`}
                    />
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* BACK SKULL (90° - 270°) */}
          <div
            className="absolute inset-0 w-full h-full flex items-center justify-center"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg) translateZ(1px)",
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={backImage}
                alt={`${alt} - Posterior View`}
                fill
                className="object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)] brightness-95 contrast-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Posterior Dynamic Specular Highlight */}
              <div
                className="absolute inset-0 pointer-events-none mix-blend-screen opacity-70"
                style={{
                  background: `radial-gradient(circle 220px at ${100 - lightX}% 40%, ${
                    isCyan ? "rgba(56, 189, 248, 0.35)" : "rgba(216, 180, 92, 0.35)"
                  } 0%, transparent 65%)`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 4. FIXED STATIONARY BOTTOM CONTROLS */}
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
          Drag Skull to Rotate
        </span>
      </div>

      {/* 5. Fixed Stationary Progress Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10 z-30">
        <div
          className={`h-full ${glowBg} transition-all duration-75`}
          style={{ width: `${((angle % 360) / 360) * 100}%` }}
        />
      </div>
    </div>
  );
}
