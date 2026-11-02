import { useEffect, useState } from "react";

const CursorSpotlight = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed z-30 transition-opacity duration-300 hidden md:block"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: "translate(-50%, -50%)",
        width: "600px",
        height: "600px",
        background: "radial-gradient(circle, var(--spotlight-c1, rgba(37, 99, 235, 0.08)) 0%, var(--spotlight-c2, rgba(124, 58, 237, 0.05)) 35%, transparent 70%)",
        borderRadius: "50%",
      }}
    />
  );
};

export default CursorSpotlight;
