import React from "react";

interface GlobeCanvasProps {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  onPointerDown: (e: React.PointerEvent) => void;
  onPointerUp: () => void;
  onPointerOut: () => void;
  onMouseMove: (e: React.MouseEvent) => void;
  onTouchMove: (e: React.TouchEvent) => void;
}

export function GlobeCanvas({
  canvasRef,
  onPointerDown,
  onPointerUp,
  onPointerOut,
  onMouseMove,
  onTouchMove,
}: GlobeCanvasProps) {
  return (
    <canvas
      ref={canvasRef}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerOut={onPointerOut}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      className="w-full h-full cursor-grab"
      style={{ opacity: 0, position: "absolute", zIndex: 50 }}
    />
  );
}
