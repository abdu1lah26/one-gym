"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Membership", href: "/membership" },
    { name: "Trainers", href: "/trainers" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "80px",
        background: "#000",
        zIndex: 9998,
        borderBottom: "1px solid rgba(212,175,55,0.2)",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
        }}
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="One Gym Logo"
            width={140}
            height={70}
            priority
            style={{
              height: "70px",
              width: "auto",
              cursor: "pointer",
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
        >
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <span
                style={{
                  color: "#F5F5F5",
                  fontSize: "14px",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#D4AF37")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#F5F5F5")
                }
              >
                {link.name}
              </span>
            </Link>
          ))}

          <Link href="/membership">
            <button
              style={{
                background: "#D4AF37",
                color: "#000",
                padding: "10px 24px",
                fontSize: "12px",
                fontWeight: 600,
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Join Now
            </button>
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: "transparent",
            border: "none",
            color: "#fff",
            fontSize: "28px",
            cursor: "pointer",
            display: "none",
          }}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            background: "#000",
            borderTop: "1px solid rgba(212,175,55,0.2)",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span
                style={{
                  color: "#F5F5F5",
                  fontSize: "16px",
                  display: "block",
                }}
              >
                {link.name}
              </span>
            </Link>
          ))}

          <Link
            href="/membership"
            onClick={() => setMobileMenuOpen(false)}
          >
            <button
              style={{
                background: "#D4AF37",
                color: "#000",
                border: "none",
                borderRadius: "8px",
                padding: "12px 20px",
                width: "100%",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Join Now
            </button>
          </Link>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }

          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}