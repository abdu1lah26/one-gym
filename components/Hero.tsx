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
        .hero {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .hero-logo {
          width: min(600px, 90vw);
          height: auto;
          display: block;
          margin-bottom: 20px;
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
          padding: 0 80px;
        }

        .accent-line {
          width: 60px;
          height: 4px;
          background: #d4af37;
          margin-bottom: 30px;
        }

        .hero-title {
          font-family: "Anton", sans-serif;
          font-size: clamp(4rem, 10vw, 8rem);
          text-transform: uppercase;
          font-style: italic;
        }

        .hero-title {
          color: #d4af37;
        }

        .hero-title span {
          color: white;
        }

        .hero-subtitle {
          font-size: 32px;
          font-weight: 500;
          color: white;
          margin: 0 0 20px;
          line-height: 1.3;
        }

        .hero-description {
          font-size: 16px;
          color: #f5f5f5;
          line-height: 1.7;
          margin-bottom: 40px;
          max-width: 500px;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .primary-btn,
        .secondary-btn {
          padding: 14px 40px;
          font-size: 14px;
          font-weight: 500;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .primary-btn {
          background: #d4af37;
          color: #000;
          border: none;
        }

        .primary-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(212, 175, 55, 0.3);
        }

        .secondary-btn {
          background: transparent;
          color: #d4af37;
          border: 2px solid #d4af37;
        }

        .secondary-btn:hover {
          background: #d4af37;
          color: #000;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .hero-content {
            padding: 0 50px;
          }

          .hero-title {
            font-size: 48px;
          }

          .hero-subtitle {
            font-size: 28px;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .hero {
            min-height: 100svh;
          }

          .hero-content {
            padding: 0 24px;
            max-width: 100%;
          }

          .hero-title {
            font-size: 38px;
          }

          .hero-subtitle {
            font-size: 24px;
          }

          .hero-description {
            font-size: 15px;
          }

          .hero-buttons {
            flex-direction: column;
            width: 100%;
          }

          .primary-btn,
          .secondary-btn {
            width: 100%;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .hero-title {
            font-size: 32px;
          }

          .hero-subtitle {
            font-size: 20px;
          }

          .hero-description {
            font-size: 14px;
          }

          .primary-btn,
          .secondary-btn {
            padding: 12px 24px;
          }
        }
      `}</style>
    </>
  );
}
