"use client";
import React, { useState, useEffect, useRef } from "react";
import { CoffeeSolid, PeopleSolid } from "../svg/StatsCardsIcons";

export const StatsCard = () => {
  const stats = [
    {
      label: "Baristas",
      number: 345,
      icon: PeopleSolid,
    },
    {
      label: "Coffee shops",
      number: 124,
      icon: CoffeeSolid,
    },
  ];

  return (
    <div className="space-y-7">
      {stats.map((item, index) => (
        <StatItem key={index} {...item} />
      ))}
    </div>
  );
};

const StatItem = ({ label, number, icon: Icon }: any) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const animateCount = (start: number, end: number, duration: number) => {
      const startTime = performance.now();
      
      const updateCount = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        if (elapsed >= duration) {
          setCount(end);
          return;
        }
        
        const progress = Math.min(elapsed / duration, 1);
        setCount(Math.floor(start + (end - start) * progress));

        requestAnimationFrame(updateCount);
      };

      requestAnimationFrame(updateCount);
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      if (entries[0].isIntersecting) {
        animateCount(0, number, 2000); // 2 seconds animation
        observerRef.current?.disconnect();
      }
    };

    observerRef.current = new IntersectionObserver(observerCallback, {
      threshold: 0.5, // Trigger when 50% is visible
    });

    if (ref.current) {
      observerRef.current.observe(ref.current);
    }

    return () => observerRef.current?.disconnect();
  }, [number]);

  return (
    <div ref={ref} className="flex gap-5 items-center">
      <Icon />
      <div className="space-y-2">
        <h3 className="font-playfair text-5xl text-main">{count}</h3>
        <p className="text-lightsecondary tracking-widest">{label}</p>
      </div>
    </div>
  );
};
