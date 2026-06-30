"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="hero">
        {/* Background Video */}
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="hero-overlay" />

        {/* Content */}
        <div className="hero-content">
          <img
            src="/logo-text-Photoroom.png"
            alt="ONE GYM"
            className="hero-logo"
          />
          <h2 className="hero-subtitle">Premium Fitness Experience</h2>
          <p className="hero-description">
            Build stronger bodies and minds through discipline. Expert guidance,
            modern facilities, and unmatched support await you.
          </p>
          <div className="hero-buttons">
            <Link href="/contact">
              <button className="primary-btn">Start Your Journey</button>
            </Link>

            <Link href="/membership">
              <button className="secondary-btn">View Plans</button>
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        /* Desktop & Tablet Base Styles */
        .hero {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: clamp(20px, 5vw, 40px);
        }

        .hero-logo {
          width: clamp(300px, 80vw, 600px);
          height: auto;
          display: block;
          margin-bottom: clamp(16px, 3vw, 30px);
          object-fit: contain;
        }

        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.92) 0%,
            rgba(0, 0, 0, 0.75) 25%,
            rgba(0, 0, 0, 0.45) 50%,
            rgba(0, 0, 0, 0.15) 75%,
            rgba(0, 0, 0, 0.05) 100%
          );
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 700px;
          width: 100%;
          padding: 0 clamp(20px, 5vw, 80px);
        }

        .accent-line {
          width: 60px;
          height: 4px;
          background: #d4af37;
          margin-bottom: 30px;
        }

        .hero-title {
          font-family: "Anton", sans-serif;
          font-size: clamp(2rem, 8vw, 8rem);
          text-transform: uppercase;
          font-style: italic;
          color: #d4af37;
          margin: 0;
        }

        .hero-title span {
          color: white;
        }

        .hero-subtitle {
          font-size: clamp(20px, 3.5vw, 32px);
          font-weight: 500;
          color: white;
          margin: clamp(12px, 2vw, 20px) 0;
          line-height: 1.3;
          word-break: break-word;
        }

        .hero-description {
          font-size: clamp(14px, 1.8vw, 16px);
          color: #f5f5f5;
          line-height: 1.7;
          margin-bottom: clamp(24px, 4vw, 40px);
          max-width: 500px;
        }

        .hero-buttons {
          display: flex;
          gap: clamp(12px, 3vw, 20px);
          flex-wrap: wrap;
        }

        .primary-btn,
        .secondary-btn {
          padding: clamp(12px, 1.5vw, 14px) clamp(24px, 4vw, 40px);
          font-size: clamp(13px, 1.5vw, 14px);
          font-weight: 500;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .primary-btn {
          background: #d4af37;
          color: #000;
          border: 2px solid #d4af37;
        }

        .primary-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(212, 175, 55, 0.3);
        }

        .primary-btn:active {
          transform: translateY(-1px);
        }

        .secondary-btn {
          background: transparent;
          color: #d4af37;
          border: 2px solid #d4af37;
        }

        .secondary-btn:hover {
          background: #d4af37;
          color: #000;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(212, 175, 55, 0.3);
        }

        .secondary-btn:active {
          transform: translateY(-1px);
        }

        /* Tablet Styles (768px - 1023px) */
        @media (max-width: 1024px) {
          .hero {
            min-height: 100vh;
            padding: clamp(16px, 3vw, 30px);
          }

          .hero-content {
            padding: 0 clamp(24px, 4vw, 50px);
          }

          .hero-logo {
            width: clamp(260px, 75vw, 500px);
            margin-bottom: clamp(14px, 2.5vw, 24px);
          }

          .hero-subtitle {
            font-size: clamp(20px, 3.2vw, 28px);
          }

          .hero-description {
            font-size: clamp(14px, 1.6vw, 15px);
          }

          .primary-btn,
          .secondary-btn {
            padding: clamp(11px, 1.4vw, 13px) clamp(20px, 3.5vw, 36px);
            font-size: clamp(12px, 1.4vw, 13px);
          }
        }

        /* Mobile Tablet Styles (481px - 767px) */
        @media (max-width: 768px) {
          .hero {
            min-height: 100svh;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 16px;
          }

          .hero-content {
            max-width: 100%;
            width: 100%;
            padding: 0 16px;
            text-align: center;
          }

          .hero-logo {
            width: clamp(220px, 70vw, 400px);
            margin: 0 auto clamp(12px, 2vw, 20px);
            display: block;
          }

          .hero-subtitle {
            font-size: clamp(18px, 4vw, 24px);
            margin: clamp(10px, 1.5vw, 16px) 0;
          }

          .hero-description {
            font-size: clamp(13px, 1.8vw, 15px);
            margin-bottom: clamp(20px, 3vw, 32px);
            line-height: 1.6;
          }

          .hero-buttons {
            flex-direction: column;
            width: 100%;
            gap: clamp(10px, 2vw, 14px);
            align-items: stretch;
          }

          .primary-btn,
          .secondary-btn {
            width: 100%;
            padding: clamp(12px, 2vw, 13px) clamp(20px, 3vw, 30px);
            font-size: clamp(12px, 1.6vw, 13px);
            border-radius: 8px;
            min-height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }
        }

        /* Mobile Styles (320px - 480px) */
        @media (max-width: 480px) {
          .hero {
            min-height: 100svh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 12px;
          }

          .hero-content {
            max-width: 100%;
            width: 100%;
            padding: 0 12px;
            text-align: center;
          }

          .hero-logo {
            width: clamp(180px, 65vw, 350px);
            margin: 0 auto clamp(12px, 2vw, 18px);
            display: block;
          }

          .hero-subtitle {
            font-size: clamp(16px, 4.5vw, 20px);
            margin: clamp(8px, 1.5vw, 12px) 0;
            font-weight: 500;
          }

          .hero-description {
            font-size: clamp(12px, 1.8vw, 14px);
            margin-bottom: clamp(18px, 3vw, 28px);
            line-height: 1.5;
            color: #e0e0e0;
          }

          .hero-buttons {
            flex-direction: column;
            width: 100%;
            gap: clamp(8px, 1.5vw, 12px);
            align-items: stretch;
          }

          .primary-btn,
          .secondary-btn {
            width: 100%;
            padding: clamp(11px, 1.8vw, 12px) clamp(16px, 2.5vw, 24px);
            font-size: clamp(11px, 1.5vw, 12px);
            border-radius: 8px;
            min-height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            letter-spacing: 0.3px;
            flex-shrink: 0;
          }

          .primary-btn:hover {
            transform: scale(0.98);
            box-shadow: 0 4px 12px rgba(212, 175, 55, 0.25);
          }

          .secondary-btn:hover {
            transform: scale(0.98);
          }
        }

        /* Extra Small Mobile (< 320px) */
        @media (max-width: 320px) {
          .hero {
            padding: 10px;
          }

          .hero-content {
            padding: 0 10px;
          }

          .hero-logo {
            width: clamp(160px, 60vw, 300px);
            margin: 0 auto 10px;
          }

          .hero-subtitle {
            font-size: clamp(15px, 4.2vw, 18px);
            margin: 8px 0;
          }

          .hero-description {
            font-size: 11px;
            margin-bottom: 16px;
          }

          .primary-btn,
          .secondary-btn {
            padding: 10px 12px;
            font-size: 11px;
            min-height: 40px;
          }

          .hero-buttons {
            gap: 8px;
          }
        }

        /* Large Desktop (1500px+) */
        @media (min-width: 1500px) {
          .hero-content {
            padding: 0 100px;
          }

          .hero-logo {
            width: 600px;
          }

          .hero-subtitle {
            font-size: 36px;
          }

          .hero-description {
            font-size: 18px;
          }

          .primary-btn,
          .secondary-btn {
            padding: 16px 48px;
            font-size: 15px;
          }
        }

        /* Landscape Mobile Adjustments */
        @media (max-height: 600px) and (max-width: 768px) {
          .hero {
            min-height: auto;
            padding: 12px;
          }

          .hero-logo {
            width: clamp(160px, 50vw, 300px);
            margin-bottom: 8px;
          }

          .hero-subtitle {
            font-size: clamp(16px, 2.5vw, 20px);
            margin: 6px 0;
          }

          .hero-description {
            font-size: clamp(12px, 1.5vw, 13px);
            margin-bottom: 12px;
          }

          .hero-buttons {
            gap: 8px;
          }

          .primary-btn,
          .secondary-btn {
            padding: 8px 16px;
            font-size: 12px;
            min-height: 36px;
          }
        }

        /* Print Styles */
        @media print {
          .hero-video {
            display: none;
          }

          .hero-overlay {
            display: none;
          }
        }
      `}</style>
    </>
  );
}