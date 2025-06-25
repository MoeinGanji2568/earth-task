export interface GlobeMarker {
  location: [number, number];
  size: number;
  color: [number, number, number];
}

export interface GlobeConfig {
  initialTopPx: number;
  initialLeftPct: number;
  finalLeftPct: number;
  finalTopPx: number;
  startMoveScroll: number;
  endScroll: number;
  offset: number;
}
