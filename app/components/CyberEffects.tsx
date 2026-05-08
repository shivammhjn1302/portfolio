'use client';

import { useEffect, useRef } from 'react';

export default function CyberEffects() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    const trailWrap = trailWrapRef.current;
    if (!cursor || !ring || !trailWrap) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;
    let lastTrail = 0;

    const move = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      document.documentElement.style.setProperty('--mx', `${mouseX}px`);
      document.documentElement.style.setProperty('--my', `${mouseY}px`);

      const target = event.target as HTMLElement | null;
      const interactive = target?.closest('a, button, .project-card, .stat, .skill-cloud span, .terminal-card');
      document.body.classList.toggle('is-targeting', Boolean(interactive));

      const now = performance.now();
      if (now - lastTrail > 42) {
        lastTrail = now;
        const spark = document.createElement('i');
        spark.className = 'cursor-spark';
        spark.style.left = `${mouseX}px`;
        spark.style.top = `${mouseY}px`;
        spark.style.setProperty('--spark-x', `${(Math.random() - 0.5) * 70}px`);
        spark.style.setProperty('--spark-y', `${(Math.random() - 0.5) * 70}px`);
        trailWrap.appendChild(spark);
        window.setTimeout(() => spark.remove(), 620);
      }
    };

    const leave = () => document.body.classList.remove('is-targeting');

    const tick = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseleave', leave);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseleave', leave);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cyber-cursor" />
      <div ref={ringRef} className="cyber-cursor-ring" />
      <div ref={trailWrapRef} className="cursor-trail-wrap" aria-hidden="true" />
      <div className="mouse-spotlight" aria-hidden="true" />
    </>
  );
}
