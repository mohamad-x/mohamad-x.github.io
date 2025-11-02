import React, { useEffect, useRef } from "react";

/**
 * BackgroundFX
 * Props:
 *  - theme: "aurora" | "constellation" | "circuit"
 *  - mouseGlow: boolean (default true)
 */
export default function BackgroundFX({ theme = "aurora", mouseGlow = true }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  // mouse coords for glow
  useEffect(() => {
    if (!mouseGlow) return;
    const root = document.documentElement;
    const onMove = (e) => {
      root.style.setProperty("--mx", e.clientX + "px");
      root.style.setProperty("--my", e.clientY + "px");
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseGlow]);

  // constellation canvas
  useEffect(() => {
    if (theme !== "constellation") return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: true });
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let running = true;

    const DPR = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = w * DPR;
    canvas.height = h * DPR;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.scale(DPR, DPR);

    const N = Math.floor(Math.min(120, (w * h) / 18000)); // particle count scales with screen
    const pts = Array.from({ length: N }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
    }));

    function step() {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);

      // draw connections
      for (let i = 0; i < N; i++) {
        const a = pts[i];
        for (let j = i + 1; j < N; j++) {
          const b = pts[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          const maxD2 = 150 * 150;
          if (d2 < maxD2) {
            const alpha = 1 - d2 / maxD2;
            ctx.strokeStyle = `rgba(118,228,247,${alpha * 0.18})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // draw points + move
      ctx.fillStyle = "rgba(118,228,247,0.7)";
      for (let i = 0; i < N; i++) {
        const p = pts[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.1, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(step);
    }

    function onResize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * DPR;
      canvas.height = h * DPR;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.scale(DPR, DPR);
    }

    window.addEventListener("resize", onResize);
    step();

    return () => {
      running = false;
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [theme]);

  return (
    <div className={`fx-root fx-${theme}`} aria-hidden>
      {/* theme layers */}
      {theme === "aurora" && <div className="fx-aurora" />}
      {theme === "circuit" && (
        <>
          <div className="fx-circuit-grid" />
          <div className="fx-circuit-sweep" />
        </>
      )}
      {theme === "constellation" && <canvas ref={canvasRef} className="fx-canvas" />}
      {/* mouse glow (applies to all themes when enabled) */}
      {mouseGlow && <div className="fx-mouse" />}
    </div>
  );
}
