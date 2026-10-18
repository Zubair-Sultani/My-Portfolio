'use client';

import dynamic from 'next/dynamic';
import { Component, useEffect, useRef, useState } from 'react';

const HeroScene = dynamic(() => import('./HeroScene'), {
  ssr: false,
  loading: () => null,
});

class SceneErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

export default function HeroVisual() {
  const visualRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [dark, setDark] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setEnabled(!mediaQuery.matches);
    const updateTheme = () => {
      setDark(document.documentElement.dataset.theme === 'dark');
    };
    const themeObserver = new MutationObserver(updateTheme);

    updateMotionPreference();
    updateTheme();
    mediaQuery.addEventListener('change', updateMotionPreference);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => {
      mediaQuery.removeEventListener('change', updateMotionPreference);
      themeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const element = visualRef.current;
    if (!element || !('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry) setVisible(entry.isIntersecting);
    });
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={visualRef} className="hero-visual-layer" aria-hidden="true">
      <div className="hero-visual-fallback">
        <span className="hero-fallback-orbit hero-fallback-orbit-one" />
        <span className="hero-fallback-orbit hero-fallback-orbit-two" />
        <span className="hero-fallback-shape hero-fallback-shape-one" />
        <span className="hero-fallback-shape hero-fallback-shape-two" />
      </div>
      {enabled && (
        <div className="hero-scene-host">
          <SceneErrorBoundary>
            <HeroScene dark={dark} visible={visible} />
          </SceneErrorBoundary>
        </div>
      )}
    </div>
  );
}
