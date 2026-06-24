"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const containerRef = useRef(null);
  const [done, setDone] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1024,
  });

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let signaled = false;
      const signalDone = () => {
        if (signaled) return;
        signaled = true;
        document.body.classList.add("preload-done");
        window.dispatchEvent(new Event("preloader:done"));
      };

      // — Set initial states
      gsap.set(".pl-brand-icon", { opacity: 0, scale: 0.7 });
      gsap.set(".pl-brand-name", { opacity: 0, y: 18 });
      gsap.set(".pl-brand-divider", { width: 0 });
      gsap.set(".pl-brand-tagline", { opacity: 0, y: 8 });

      const tl = gsap.timeline({
        onComplete: () => {
          signalDone();
          setDone(true);
        },
      });

      // — Phase 1: Brand reveals (text and logo animation)
      tl.to(
        ".pl-brand-icon",
        { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.4)" },
        0.6
      )
        .to(
          ".pl-brand-name",
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          0.6
        )
        .to(
          ".pl-brand-divider",
          { width: 44, duration: 0.5, ease: "power2.out" },
          1.2
        )
        .to(
          ".pl-brand-tagline",
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          1.3
        )

        // — Phase 2: Panels (and brand halves) split apart
        .add("split", 1.8)
        .to(
          ".pl-left",
          { xPercent: -100, duration: 1.2, ease: "power4.inOut" },
          "split"
        )
        .to(
          ".pl-right",
          { xPercent: 100, duration: 1.2, ease: "power4.inOut" },
          "split"
        )
        .to(
          ".pl-brand-left",
          { x: -windowSize.width, duration: 1.2, ease: "power4.inOut" },
          "split"
        )
        .to(
          ".pl-brand-right",
          { x: windowSize.width, duration: 1.2, ease: "power4.inOut" },
          "split"
        )
        .call(signalDone, [], 3.0);
    }, containerRef);

    return () => ctx.revert();
  }, [windowSize]);

  if (done) return null;

  // Responsive logo size
  const logoSize = windowSize.width < 640 ? "100px" : windowSize.width < 1024 ? "120px" : "150px";
  const logoSizeNum = parseInt(logoSize);

  // Responsive gap
  const gap = windowSize.width < 640 ? "12px" : "16px";

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* Left panel */}
      <div
        className="pl-left"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "50%",
          height: "100%",
          background: "#000000",
        }}
      />

      {/* Right panel */}
      <div
        className="pl-right"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          background: "#000000",
        }}
      />

      {/* Brand LEFT half (splits left) */}
      <div
        className="pl-brand pl-brand-left"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: gap,
          whiteSpace: "nowrap",
          clipPath: "inset(0 50% 0 0)",
          WebkitClipPath: "inset(0 50% 0 0)",
          padding: "0 20px",
        }}
      >
        <img
          className="pl-brand-icon"
          src="/logo.jpg"
          alt="One Gym logo"
          style={{
            width: logoSize,
            height: logoSize,
            borderRadius: "8px",
            objectFit: "cover",
          }}
        />

        <div
          className="pl-brand-name"
          style={{
            fontSize: "clamp(24px, 5vw, 44px)",
            fontWeight: 500,
            color: "#D4AF37",
            letterSpacing: "0.05em",
          }}
        >
          ONE GYM
        </div>

        <div
          className="pl-brand-divider"
          style={{
            height: "2px",
            background: "#D4AF37",
          }}
        />

        <div
          className="pl-brand-tagline"
          style={{
            fontSize: "clamp(10px, 2.5vw, 13px)",
            fontWeight: 400,
            color: "#F5F5F5",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Where fitness meets discipline
        </div>
      </div>

      {/* Brand RIGHT half (splits right) */}
      <div
        className="pl-brand pl-brand-right"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: gap,
          whiteSpace: "nowrap",
          clipPath: "inset(0 0 0 50%)",
          WebkitClipPath: "inset(0 0 0 50%)",
          padding: "0 20px",
        }}
      >
        <img
          className="pl-brand-icon"
          src="/logo.jpg"
          alt="One Gym logo"
          style={{
            width: logoSize,
            height: logoSize,
            borderRadius: "8px",
            objectFit: "cover",
          }}
        />

        <div
          className="pl-brand-name"
          style={{
            fontSize: "clamp(24px, 5vw, 44px)",
            fontWeight: 500,
            color: "#D4AF37",
            letterSpacing: "0.05em",
          }}
        >
          ONE GYM
        </div>

        <div
          className="pl-brand-divider"
          style={{
            height: "2px",
            background: "#D4AF37",
          }}
        />

        <div
          className="pl-brand-tagline"
          style={{
            fontSize: "clamp(10px, 2.5vw, 13px)",
            fontWeight: 400,
            color: "#F5F5F5",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Where fitness meets discipline
        </div>
      </div>
    </div>
  );
}