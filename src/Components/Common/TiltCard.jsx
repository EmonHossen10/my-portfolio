import { useRef, useState } from "react";

const TiltCard = ({
  children,
  className = "",
  maxTilt = 10,
  glare = true,
  scale = 1.02,
}) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTilt({ x: rotateX, y: rotateY });
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.18,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-transform duration-200 ease-out preserve-3d ${className}`}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${scale}, ${scale}, ${scale})`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      }}
    >
      {children}

      {glare && (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(0, 245, 255, 0.4) 0%, rgba(168, 85, 247, 0.2) 40%, transparent 80%)`,
          }}
        />
      )}
    </div>
  );
};

export default TiltCard;
