import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed w-8 h-8 bg-yellow-500/30 border border-yellow-500 rounded-full pointer-events-none z-99999"
      style={{
        transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
      }}
    />
    // <div
    //   className="fixed w-10 h-10 bg-yellow-500/20 border-2 border-yellow-500 rounded-full backdrop-blur-sm pointer-events-none z-[99999]"
    //   style={{
    //     transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
    //   }}
    // />
  );
}
