import { useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import { MdRocketLaunch } from "react-icons/md";

export default function ButtonToTop() {
  const [blast, setBlast] = useState(false);
  const [anim, setAnim] = useState({ name: "", css: "" });

  const handleBlast = () => {
    // randomize path points
    const rand = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;
    const p1 = { x: rand(-80, 80), y: rand(-80, -150) };
    const p2 = { x: rand(-140, 140), y: rand(-200, -320) };
    const p3 = { x: rand(-200, 200), y: rand(-320, -450) };
    const name = `rocket-path-${Math.random().toString(36).slice(2, 7)}`;

    const css = `
      @keyframes ${name} {
        0% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 1; }
        25% { transform: translate(${p1.x}px, ${p1.y}px) rotate(-10deg) scale(1.05); }
        55% { transform: translate(${p2.x}px, ${p2.y}px) rotate(15deg) scale(1.12); }
        85% { transform: translate(${p3.x}px, ${p3.y}px) rotate(-8deg) scale(1.2); opacity: 0.9; }
        100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 1; }
      }
    `;

    setAnim({ name, css });
    setBlast(true);
    setTimeout(() => setBlast(false), 1000);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {anim.css && <style>{anim.css}</style>}
      <ScrollToTop
        smooth
        showUnder={0} // luôn hiển thị từ đầu trang
        onClick={handleBlast}
        component={
          <MdRocketLaunch
            style={{
              animation:
                blast && anim.name
                  ? `${anim.name} 4s ease-in-out forwards`
                  : "none",
              filter: blast
                ? "drop-shadow(0 12px 24px rgba(6,182,212,0.55))"
                : "none",
            }}
          />
        }
        style={{
          background: "transparent",
          bottom: 70,
          right: 40,
              color: "#06B6D4",
          fontSize: "2.6rem",
          padding: 0,
          borderRadius: "50%",
          boxShadow: "none",
          border: "none",
          opacity: 1,
          visibility: "visible",
          pointerEvents: "auto",
        }}
      />
    </>
  );
}
