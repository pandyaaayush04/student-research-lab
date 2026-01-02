import { useEffect, useRef } from "react";

export function Particles({
  quantity = 70,
  color = "#D1D5DB",
  size = 0.5, // 🔹 smaller particles
  className = "",
}) {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const velocity = useRef({ vx: 0, vy: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    // Static particle field
    particles.current = Array.from({ length: quantity }).map(() => ({
      x: Math.random() * canvas.clientWidth,
      y: Math.random() * canvas.clientHeight,
    }));

    const handleMouseMove = (e) => {
      // 🔹 extremely small directional bias
      velocity.current.vx += (e.clientX - mouse.current.x) * 0.02;
      velocity.current.vy += (e.clientY - mouse.current.y) * 0.02;

      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      particles.current.forEach((p) => {
        // Apply subtle global drift
        p.x += velocity.current.vx;
        p.y += velocity.current.vy;

        // Seamless wrapping
        if (p.x < 0) p.x = canvas.clientWidth;
        if (p.x > canvas.clientWidth) p.x = 0;
        if (p.y < 0) p.y = canvas.clientHeight;
        if (p.y > canvas.clientHeight) p.y = 0;

        // Core star point
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();

        // Soft halo (star glow)
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          size * 4
        );

        gradient.addColorStop(0, "rgba(209, 213, 219, 0.35)");
        gradient.addColorStop(1, "rgba(209, 213, 219, 0)");

        ctx.fillStyle = color;

        // draw a crisp square pixel-like star
        ctx.fillRect(Math.round(p.x), Math.round(p.y), size, size);
      });

      // 🔹 very strong damping (settles fast)
      velocity.current.vx *= 0.9;
      velocity.current.vy *= 0.9;

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [quantity, color, size]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
