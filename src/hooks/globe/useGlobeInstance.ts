import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import type { GlobeMarker } from "../../components/CombinedGlobe/types";

function latLngToPhiTheta(lat: number, lng: number) {
  return {
    phi: (lng * Math.PI) / 180,
    theta: ((90 - lat) * Math.PI) / 180,
  };
}

export function useGlobeInstance({
  canvasRef,
  markers,
  r,
  pointerInteracting,
  targetLocation,
}: {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  markers: GlobeMarker[];
  r: { get: () => number };
  pointerInteracting: React.MutableRefObject<number | null>;
  targetLocation?: [number, number] | null;
}) {
  const phiRef = useRef(0);
  const thetaRef = useRef(0.8); // default theta
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    let phi = phiRef.current;
    const theta = thetaRef.current;
    let width = canvasRef.current.offsetWidth;
    const currentAnimationRef = animationRef.current;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width,
      height: width,
      phi,
      theta,
      mapSamples: 8000,
      baseColor: [0.35, 0.45, 0.9],
      glowColor: [0.6, 0.7, 1.2],
      dark: 0.85,
      diffuse: 1.6,
      mapBrightness: 3.5,
      markerColor: [251 / 255, 100 / 255, 21 / 255],
      markers,
      onRender: (state: Record<string, unknown>) => {
        if (!pointerInteracting.current) phi += 0.005;
        state.phi = phi + r.get();
        state.theta = theta;
        state.width = width * 2;
        state.height = width * 2;
        phiRef.current = phi;
        thetaRef.current = theta;
      },
    });
    const fadeInTimer = setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    }, 100);
    return () => {
      clearTimeout(fadeInTimer);
      globe.destroy();
      window.removeEventListener("resize", onResize);
      if (currentAnimationRef) cancelAnimationFrame(currentAnimationRef);
    };
  }, [canvasRef, markers, r, pointerInteracting]);

  useEffect(() => {
    if (!targetLocation) return;
    const [lat, lng] = targetLocation;
    const { phi: targetPhi, theta: targetTheta } = latLngToPhiTheta(lat, lng);
    let frame: number;
    function animate() {
      phiRef.current += (targetPhi - phiRef.current) * 0.08;
      thetaRef.current += (targetTheta - thetaRef.current) * 0.08;
      if (
        Math.abs(phiRef.current - targetPhi) < 0.001 &&
        Math.abs(thetaRef.current - targetTheta) < 0.001
      ) {
        phiRef.current = targetPhi;
        thetaRef.current = targetTheta;
        return;
      }
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [targetLocation]);
}
