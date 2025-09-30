// components/MapUpdater.tsx
"use client";

import { useEffect } from "react";
import { useMap } from "react-leaflet";

interface MapUpdaterProps {
  center: [number, number];
}

export function MapUpdater({ center }: MapUpdaterProps) {
  const map = useMap();

  useEffect(() => {
    map.setView(center);
  }, [center, map]);

  return null;
}
