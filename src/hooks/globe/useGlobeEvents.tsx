import React, { useCallback } from "react";
import { SpringRef } from "react-spring";

const useGlobeEvents = (
  pointerInteracting: React.RefObject<number | null>,
  pointerInteractionMovement: React.RefObject<number>,
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  api: SpringRef<{
    r: number;
  }>
) => {
  // Pointer event handlers
  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      pointerInteracting.current =
        e.clientX - pointerInteractionMovement.current;
      if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
    },
    [pointerInteracting, pointerInteractionMovement, canvasRef]
  );
  const handlePointerUp = useCallback(() => {
    pointerInteracting.current = null;
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
  }, [pointerInteracting, canvasRef]);
  const handlePointerOut = useCallback(() => {
    pointerInteracting.current = null;
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
  }, [pointerInteracting, canvasRef]);
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (pointerInteracting.current !== null) {
        const delta = e.clientX - pointerInteracting.current;
        pointerInteractionMovement.current = delta;
        api.start({ r: delta / 200 });
      }
    },
    [api, pointerInteracting, pointerInteractionMovement]
  );
  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (pointerInteracting.current !== null && e.touches[0]) {
        const delta = e.touches[0].clientX - pointerInteracting.current;
        pointerInteractionMovement.current = delta;
        api.start({ r: delta / 100 });
      }
    },
    [api, pointerInteracting, pointerInteractionMovement]
  );
  return {
    handlePointerDown,
    handlePointerUp,
    handlePointerOut,
    handleMouseMove,
    handleTouchMove,
  };
};

export default useGlobeEvents;
