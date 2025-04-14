'use client';

import { useEffect } from 'react';

import { scan } from 'react-scan';

export function ReactScanInit() {
  useEffect(() => {
    scan({
      enabled: process.env.NODE_ENV === 'development',
      trackUnnecessaryRenders: true, // Destaca renders innecesarios
      animationSpeed: 'fast',
    });
  }, []);

  return null;
}
