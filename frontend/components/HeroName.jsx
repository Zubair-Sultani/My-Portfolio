'use client';

import { useEffect, useState } from 'react';

const NAME = 'Zubair Sultani';
const TYPE_DELAY = 105;
const ERASE_DELAY = 65;
const COMPLETE_PAUSE = 1400;
const EMPTY_PAUSE = 350;

export default function HeroName() {
  const [characterCount, setCharacterCount] = useState(1);
  const [isDeleting, setIsDeleting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setReducedMotion(motionPreference.matches);

    updateMotionPreference();
    motionPreference.addEventListener('change', updateMotionPreference);

    return () => motionPreference.removeEventListener('change', updateMotionPreference);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setCharacterCount(NAME.length);
      setIsDeleting(false);
      return undefined;
    }

    let delay = TYPE_DELAY;

    if (isDeleting && characterCount > 0) {
      delay = ERASE_DELAY;
    } else if (isDeleting) {
      delay = EMPTY_PAUSE;
    } else if (characterCount === NAME.length) {
      delay = COMPLETE_PAUSE;
    }

    const timeout = window.setTimeout(() => {
      if (isDeleting && characterCount > 0) {
        setCharacterCount((count) => count - 1);
      } else if (isDeleting) {
        setIsDeleting(false);
      } else if (characterCount === NAME.length) {
        setIsDeleting(true);
      } else {
        setCharacterCount((count) => count + 1);
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [characterCount, isDeleting, reducedMotion]);

  return (
    <h1 className="hero-title" aria-label={NAME}>
      <span className="hero-title-reserve" aria-hidden="true">{NAME}</span>
      <span className="hero-title-text" aria-hidden="true">
        {NAME.slice(0, characterCount)}
        <span className="hero-title-cursor" />
      </span>
    </h1>
  );
}
