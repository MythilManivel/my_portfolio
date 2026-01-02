import React, { useState, useEffect, useRef, useCallback } from "react";

const images = [
  { src: "/carousel/PIC1.jpeg", caption: "Event Ambassador – Mechnotron 2K25" },
  { src: "/carousel/PIC2.jpg", caption: "Award Recognition Ceremony" },
  { src: "/carousel/pic11.jpeg", caption: "Hackathon – 3rd Place | CIT" },
  { src: "/carousel/BATCH1.jpeg", caption: "Earned 200-Day LeetCode Badge" },
  { src: "/carousel/PIC4.jpg", caption: "Academic Excellence Award (2025)" },
  {
    src: "/carousel/BOOK.jpeg",
    caption:
      "Smart Hospitals in the Modern Era – Surgical Robots in Smart Hospitals | Book Chapter (Chapter 7) – Wiley",
  },
  { src: "/carousel/batch3.jpeg", caption: "AWS Certified Cloud Practitioner" },
  { src: "/carousel/PIC7.jpeg", caption: "2nd Prize – Project Presentation | SKCET" },
  { src: "/carousel/PIC5.jpeg", caption: "Project Expo Event – Technical Showcase" },
  { src: "/carousel/pic9.jpeg", caption: "Best Student Award (2023 - 2024)" },
  { src: "/carousel/pic14.jpeg", caption: "Academic Achievement Moment" },
  { src: "/carousel/PIC6.jpeg", caption: "Workshop Coordinator – National Level Workshop (KEC)" },
  { src: "/carousel/CAR.jpeg", caption: "Explored new skills in Robotics Lab" },
  { src: "/carousel/PIC8.jpeg", caption: "Newsletter released to KEC Principal" },
  { src: "/carousel/news.jpeg", caption: "Publishing 5+ Newsletters" },
  { src: "/carousel/BATCH2.jpg", caption: "Earned 50 problem completions in CodeChef batch" },
];


const imagesToShowDefault = 4;

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(imagesToShowDefault);
  const [imagesToShow, setImagesToShow] = useState(imagesToShowDefault);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Clone slides for infinite loop
  // Prepend last n slides, append first n slides
  const prependSlides = images.slice(-imagesToShow);
  const appendSlides = images.slice(0, imagesToShow);
  const extendedImages = [...prependSlides, ...images, ...appendSlides];

  const totalSlides = images.length;

  // Adjust number of images shown based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setImagesToShow(1);
      else if (window.innerWidth < 1024) setImagesToShow(2);
      else setImagesToShow(imagesToShowDefault);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // When imagesToShow changes, reset current index accordingly
  useEffect(() => {
    setCurrentIndex(imagesToShow);
  }, [imagesToShow]);

  // Move to the next slide
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, [isTransitioning]);

  // Move to the previous slide
  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, [isTransitioning]);

  // After transition ends, check for loop resets
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex >= totalSlides + imagesToShow) {
      // Reset without animation to start of real slides
      setCurrentIndex(imagesToShow);
      containerRef.current.style.transition = "none";
      containerRef.current.style.transform = `translateX(-${(100 / extendedImages.length) * imagesToShow}%)`;
      // Force reflow to re-enable transition
      void containerRef.current.offsetHeight;
      containerRef.current.style.transition = "";
    } else if (currentIndex < imagesToShow) {
      // Reset to end of real slides
      const resetIndex = totalSlides + imagesToShow - 1;
      setCurrentIndex(resetIndex);
      containerRef.current.style.transition = "none";
      containerRef.current.style.transform = `translateX(-${(100 / extendedImages.length) * resetIndex}%)`;
      void containerRef.current.offsetHeight;
      containerRef.current.style.transition = "";
    }
  };

  // Auto-play functionality
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 4000); // 4 seconds

    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex, nextSlide]);

  // Handle touch start
  const onTouchStart = (e) => {
    clearTimeout(timeoutRef.current);
    touchStartX.current = e.touches[0].clientX;
  };

  // Handle touch move (optional, can be used for swiping effect)
  const onTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  // Handle touch end, detect swipe
  const onTouchEnd = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) nextSlide();
      else prevSlide();
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      else if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <section
      className="w-full max-w-7xl mx-auto my-20 px-4"
      aria-label="Honors and Awards Carousel"
    >
      <h2 className="text-4xl md:text-5xl font-bold font-display text-center text-foreground mb-14 tracking-tight">
        Honors & Awards
      </h2>

      <div
        className="relative"
        onMouseEnter={() => clearTimeout(timeoutRef.current)}
        onMouseLeave={() => {
          timeoutRef.current = setTimeout(() => nextSlide(), 4000);
        }}
      >
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card/95 text-foreground/80 border border-border shadow-md hover:shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          type="button"
        >
          ❮
        </button>

        {/* Carousel Container */}
        <div
          className="overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <ul
            ref={containerRef}
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{
              width: `${(100 / imagesToShow) * extendedImages.length}%`,
              transform: `translateX(-${(100 / extendedImages.length) * currentIndex}%)`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedImages.map((item, i) => (
              <li
                key={i}
                className="px-4 flex-shrink-0"
                style={{ width: `${100 / extendedImages.length}%` }}
              >
                <article className="h-full bg-card rounded-2xl border border-border card-hover overflow-hidden">
                  <div className="h-52 overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.caption}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="w-10 h-1 bg-primary rounded-full mb-3" />
                    <p className="text-sm font-medium text-foreground leading-snug">{item.caption}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card/95 text-foreground/80 border border-border shadow-md hover:shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          type="button"
        >
          ❯
        </button>
      </div>

      {/* Dots */}
      <div
        className="flex justify-center mt-10 space-x-2"
        role="tablist"
        aria-label="Slide navigation dots"
      >
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx + imagesToShow)}
            aria-selected={currentIndex === idx + imagesToShow}
            role="tab"
            type="button"
            className={`h-2 rounded-full transition-all ${
              currentIndex === idx + imagesToShow
                ? "w-6 bg-primary"
                : "w-2 bg-muted hover:bg-muted-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
