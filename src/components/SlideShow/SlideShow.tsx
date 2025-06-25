"use client";

import { useRef, useState, useEffect } from "react";
import classNames from "classnames";
import { Dots } from "./Dots";
import { ArrowButton } from "./ArrowButton";
import { SlideshowProps } from "./SlideShow.type";

export function Slideshow({
  children,
  className,
  duration = 500,
}: SlideshowProps) {
  const [current, setCurrent] = useState(0);
  const [size, setSize] = useState({ width: 0, height: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const touchStartX = useRef<number | null>(null);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % children.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + children.length) % children.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 50) prevSlide();
    else if (deltaX < -50) nextSlide();
    touchStartX.current = null;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    touchStartX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.clientX - touchStartX.current;
    if (deltaX > 50) prevSlide();
    else if (deltaX < -50) nextSlide();
    touchStartX.current = null;
  };

  useEffect(() => {
    const currentSlide = slideRefs.current[current];
    if (currentSlide) {
      const { width, height } = currentSlide.getBoundingClientRect();
      setSize({ width, height });
    }
  }, [current, children]);

  return (
    <div className={classNames("flex flex-col items-center", className)}>
      <div
        className="relative flex items-center"
        style={{
          width: `${size.width}px`,
          height: `${size.height}px`,
          transition: "width 300ms, height 300ms",
        }}
      >
        <ArrowButton direction="left" onClick={prevSlide} />
        <div
          className="overflow-hidden"
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <div
            className="flex transition-transform ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
              transitionDuration: `${duration}ms`,
            }}
          >
            {children.map((child, index) => (
              <div
                key={index}
                ref={(el) => {
                  slideRefs.current[index] = el;
                }}
                className="flex-shrink-0"
                style={{ width: "fit-content", height: "fit-content" }}
              >
                {child}
              </div>
            ))}
          </div>
        </div>
        <ArrowButton direction="right" onClick={nextSlide} />
      </div>

      <Dots
        count={children.length}
        activeIndex={current}
        onDotClick={goToSlide}
      />
    </div>
  );
}
