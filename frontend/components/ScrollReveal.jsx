'use client';

import { useEffect, useRef } from 'react';

export default function ScrollReveal({ children }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !('IntersectionObserver' in window)) return;

    const sections = root.querySelectorAll('.home-container > section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    root.classList.add('reveal-active');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return <div className="reveal-root" ref={rootRef}>{children}</div>;
}