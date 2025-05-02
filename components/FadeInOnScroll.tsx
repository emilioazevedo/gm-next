"use client";

import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface FadeInOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  offset?: number; // How many pixels to move up (larger = more dramatic motion)
  threshold?: number;
  once?: boolean;
}

export default function FadeInOnScroll({ 
  children, 
  className = "", 
  delay = 0,
  duration = 500,
  offset = 30, // Default to 30px of movement
  threshold = 0.1,
  once = true,
}: FadeInOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { 
        threshold: threshold,
        // Use rootMargin to trigger slightly before the element enters viewport
        rootMargin: '0px 0px -50px 0px'
      }
    );
    
    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);
  
  // Inline styles for the initial and animated states
  const style = {
    transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
    transitionDelay: delay ? `${delay}ms` : '0ms',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : `translateY(${offset}px)`,
    ...(!isVisible && { willChange: 'opacity, transform' }) // Performance optimization
  };
  
  return (
    <div 
      ref={ref} 
      className={className}
      style={style}
    >
      {children}
    </div>
  );
}