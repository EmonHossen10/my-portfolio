import { useEffect, useRef } from "react";

const CursorSpotlight = () => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const el = spotlightRef.current;
    if (!el) return;

    let rafId;
    let targetX = -200;
    let targetY = -200;
    let currentX = -200;
    let currentY = -200;
    let isVisible = false;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        el.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      isVisible = false;
      el.style.opacity = "0";
    };

    const updatePosition = () => {
      if (isVisible) {
        currentX += (targetX - currentX) * 0.15;
        currentY += (targetY - currentY) * 0.15;
        el.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    rafId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed z-30 transition-opacity duration-300 hidden md:block opacity-0"
      style={{
        left: 0,
        top: 0,
        width: "550px",
        height: "550px",
        background:
          "radial-gradient(circle, var(--spotlight-c1, rgba(37, 99, 235, 0.08)) 0%, var(--spotlight-c2, rgba(124, 58, 237, 0.05)) 35%, transparent 70%)",
        borderRadius: "50%",
        willChange: "transform",
      }}
      aria-hidden="true"
    />
  );
};

export default CursorSpotlight;
