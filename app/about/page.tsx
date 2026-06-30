"use client";

import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import {
  Dumbbell,
  HeartPulse,
  Swords,
  Coffee,
  Building2,
  Users,
  Star,
  Trophy,
  UserCheck,
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      title: "Discipline",
      description:
        "We believe in building habits through consistent effort and unwavering commitment to your goals.",
    },
    {
      title: "Excellence",
      description:
        "Every workout, every session, every moment dedicated to delivering the highest standards of training.",
    },
    {
      title: "Community",
      description:
        "Strength is found in unity. We foster a supportive environment where everyone grows together.",
    },
    {
      title: "Empowerment",
      description:
        "We empower individuals to transform their bodies, minds, and achieve their fullest potential.",
    },
  ];

  const whyChooseUs = [
    {
      icon: Trophy,
      title: "Expert Trainers",
      description:
        "30+ years of combined experience with certified trainers specialized in all fitness disciplines.",
    },
    {
      icon: Building2,
      title: "Modern Facilities",
      description:
        "State-of-the-art equipment and spacious training areas designed for optimal performance.",
    },
    {
      icon: Users,
      title: "Community Focus",
      description:
        "Supportive gym environment with specialized café and unmatched member camaraderie.",
    },
    {
      icon: Coffee,
      title: "Personalized Approach",
      description:
        "Custom training programs tailored to your specific goals, fitness level, and preferences.",
    },
  ];

  const facilities = [
    { id: 1, name: "Strength Training Zone", image: "/gym1.jpg" },
    { id: 2, name: "Cardio Area", image: "/gym2.jpg" },
    { id: 3, name: "Functional Training", image: "/gym3.jpg" },
    { id: 4, name: "Olympic Lifting", image: "/gym4.jpg" },
    { id: 5, name: "Flexibility & Recovery", image: "/gym5.jpg" },
    { id: 6, name: "Member Lounge", image: "/gym6.jpg" },
  ];

  const whyChooseOneGym = [
    {
      icon: Trophy,
      title: "CrossFit Training",
      description:
        "High-intensity functional workouts that build strength, endurance, and athletic performance.",
    },
    {
      icon: Swords,
      title: "MMA Training",
      description:
        "Professional MMA coaching focused on technique, self-defense, and total body conditioning.",
    },
    {
      icon: HeartPulse,
      title: "Cardio & Fat Loss",
      description:
        "Customized cardio and fat-loss programs designed to help you achieve sustainable results.",
    },
    {
      icon: Dumbbell,
      title: "Modern Equipment",
      description:
        "Train with premium machines and free weights for every fitness goal.",
    },
    {
      icon: Dumbbell,
      title: "Strength Training",
      description:
        "Dedicated strength zone for muscle building, powerlifting, and progressive overload.",
    },
    {
      icon: UserCheck,
      title: "Expert Trainers",
      description:
        "Experienced male and female trainers providing personalized guidance and motivation.",
    },
    {
      icon: Coffee,
      title: "ONE Café",
      description:
        "Recharge with protein shakes, healthy meals, coffee, and nutritious refreshments.",
    },
    {
      icon: Building2,
      title: "Spacious Gym",
      description:
        "A large, well-ventilated training space that never feels overcrowded.",
    },
    {
      icon: Users,
      title: "Unisex Gym",
      description:
        "A comfortable, safe, and welcoming environment for both men and women.",
    },
    {
      icon: Star,
      title: "Celebrity Trusted",
      description:
        "Trusted by celebrities and professional personalities for elite fitness training.",
    },
  ];

  const getResponsiveStyles = () => `
    * {
      box-sizing: border-box;
    }

    /* Desktop Styles (1024px and above) */
    .hero-title {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      font-size: clamp(2rem, 5vw, 3.5rem);
      font-weight: 500;
      color: #d4af37;
      margin: 0 0 20px;
    }

    .hero-logo {
      height: clamp(40px, 6vw, 70px);
      width: auto;
      display: block;
    }

    .hero-description {
      font-size: clamp(16px, 2vw, 18px);
      color: #f5f5f5;
      max-width: 700px;
      margin: 0 auto;
      line-height: 1.7;
    }

    .section-title {
      font-size: clamp(28px, 5vw, 40px);
      font-weight: 500;
      color: #D4AF37;
    }

    .why-choose-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }

    .facilities-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
    }

    .story-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      align-items: center;
    }

    .cta-buttons {
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .cta-button {
      width: auto;
    }

    /* Tablet Styles (768px - 1023px) */
    @media (max-width: 1024px) {
      .hero-section {
        padding: 60px 24px !important;
      }

      .section-padding {
        padding: 60px 24px !important;
      }

      .hero-title {
        gap: 8px;
        font-size: 36px !important;
      }

      .section-title {
        font-size: 32px !important;
        margin-bottom: 40px !important;
      }

      .hero-description {
        font-size: 16px !important;
      }

      .story-grid {
        grid-template-columns: 1fr !important;
        gap: 30px !important;
      }

      .story-image {
        height: 300px !important;
      }

      .why-choose-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 20px !important;
      }

      .why-choose-card {
        padding: 24px !important;
      }

      .why-choose-card h3 {
        font-size: 20px !important;
      }

      .why-choose-card p {
        font-size: 14px !important;
      }

      .facilities-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 24px !important;
      }

      .facility-card {
        height: 280px !important;
      }

      .ready-section {
        padding: 60px 24px !important;
      }
    }

    /* Mobile Tablet Styles (481px - 767px) */
    @media (max-width: 768px) {
      .hero-section {
        padding: 40px 16px !important;
      }

      .section-padding {
        padding: 40px 16px !important;
      }

      .hero-title {
        gap: 6px;
        font-size: 28px !important;
        margin-bottom: 12px !important;
      }

      .hero-logo {
        height: 36px !important;
      }

      .hero-description {
        font-size: 15px !important;
      }

      .section-title {
        font-size: 28px !important;
        margin-bottom: 30px !important;
      }

      .story-grid {
        grid-template-columns: 1fr !important;
        gap: 24px !important;
      }

      .story-image {
        height: 250px !important;
        margin-top: 20px !important;
      }

      .story-text p {
        font-size: 15px !important;
        margin-bottom: 15px !important;
      }

      .why-choose-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 16px !important;
      }

      .why-choose-card {
        padding: 20px !important;
      }

      .why-choose-card h3 {
        font-size: 18px !important;
      }

      .why-choose-card p {
        font-size: 13px !important;
        line-height: 1.6 !important;
      }

      .icon-circle {
        width: 56px !important;
        height: 56px !important;
        margin-bottom: 12px !important;
      }

      .icon-circle svg {
        width: 24px !important;
        height: 24px !important;
      }

      .facilities-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 16px !important;
      }

      .facility-card {
        height: 240px !important;
      }

      .facility-name {
        font-size: 14px !important;
      }

      .ready-section {
        padding: 40px 16px !important;
      }

      .cta-buttons {
        flex-direction: column !important;
        gap: 12px !important;
      }

      .cta-button {
        width: 100% !important;
        padding: 12px 24px !important;
        font-size: 14px !important;
      }

      .section-padding {
        max-width: 100% !important;
        margin: 0 !important;
        padding-left: 16px !important;
        padding-right: 16px !important;
      }
    }

    /* Mobile Styles (320px - 480px) */
    @media (max-width: 480px) {
      .hero-section {
        padding: 40px 12px !important;
      }

      .section-padding {
        padding: 30px 12px !important;
        max-width: 100% !important;
        margin: 0 !important;
      }

      .hero-title {
        gap: 4px;
        font-size: 22px !important;
        margin-bottom: 12px !important;
      }

      .hero-logo {
        height: 28px !important;
      }

      .hero-description {
        font-size: 14px !important;
        line-height: 1.6 !important;
      }

      .section-title {
        font-size: 24px !important;
        margin-bottom: 24px !important;
      }

      .story-grid {
        grid-template-columns: 1fr !important;
        gap: 20px !important;
      }

      .story-text p {
        font-size: 14px !important;
        margin-bottom: 12px !important;
        line-height: 1.6 !important;
      }

      .story-image {
        height: 200px !important;
      }

      .value-card {
        padding: 16px !important;
      }

      .value-card h3 {
        font-size: 16px !important;
      }

      .value-card p {
        font-size: 12px !important;
      }

      .why-choose-grid {
        grid-template-columns: 1fr !important;
        gap: 12px !important;
      }

      .why-choose-card {
        padding: 16px !important;
      }

      .why-choose-card h3 {
        font-size: 16px !important;
        margin-bottom: 8px !important;
      }

      .why-choose-card p {
        font-size: 12px !important;
        line-height: 1.5 !important;
      }

      .icon-circle {
        width: 48px !important;
        height: 48px !important;
        margin-bottom: 10px !important;
      }

      .icon-circle svg {
        width: 20px !important;
        height: 20px !important;
      }

      .facilities-grid {
        grid-template-columns: 1fr !important;
        gap: 12px !important;
      }

      .facility-card {
        height: 200px !important;
      }

      .facility-name {
        font-size: 13px !important;
        padding: 16px !important;
      }

      .ready-section {
        padding: 30px 12px !important;
      }

      .cta-buttons {
        flex-direction: column !important;
        gap: 10px !important;
      }

      .cta-button {
        width: 100% !important;
        padding: 12px 20px !important;
        font-size: 13px !important;
      }

      .story-text button {
        width: 100% !important;
        padding: 12px 20px !important;
        font-size: 13px !important;
      }
    }

    /* Extra Small Mobile (< 320px) */
    @media (max-width: 320px) {
      .hero-title {
        font-size: 20px !important;
      }

      .section-title {
        font-size: 20px !important;
      }

      .hero-description {
        font-size: 13px !important;
      }

      .story-text p {
        font-size: 13px !important;
      }

      .why-choose-card h3 {
        font-size: 14px !important;
      }

      .why-choose-card p {
        font-size: 11px !important;
      }
    }
  `;

  return (
    <main style={{ background: "#000000", minHeight: "100vh" }}>
      <style>{getResponsiveStyles()}</style>
      <Header />

      <div style={{ paddingTop: "80px" }}>
        {/* Hero Section */}
        <section
          className="hero-section"
          style={{
            padding: "80px 40px",
            textAlign: "center",
            background: "linear-gradient(135deg, #1A1A1A 0%, #000000 100%)",
          }}
        >
          <h1 className="hero-title">
            <span>About</span>
            <img
              src="/logo-text-Photoroom.png"
              alt="ONE GYM"
              className="hero-logo"
            />
          </h1>

          <p className="hero-description">
            Where fitness meets discipline. Building stronger bodies, stronger
            minds, and an unbreakable community.
          </p>
        </section>

        {/* Our Story Section */}
        <section
          className="section-padding"
          style={{
            padding: "80px 40px",
            maxWidth: "100%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h2
            className="section-title"
            style={{
              margin: "0 0 30px 0",
              textAlign: "center",
            }}
          >
            Our Story
          </h2>

          <div
            className="story-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px",
              alignItems: "center",
              maxWidth: "1000px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div className="story-text">
              <p
                style={{
                  fontSize: "16px",
                  color: "#F5F5F5",
                  lineHeight: "1.8",
                  margin: "0 0 20px 0",
                }}
              >
                One Gym was founded with a singular vision: to create a space
                where fitness enthusiasts and beginners alike could transform
                themselves—not just physically, but mentally and spiritually.
              </p>

              <p
                style={{
                  fontSize: "16px",
                  color: "#F5F5F5",
                  lineHeight: "1.8",
                  margin: "0 0 20px 0",
                }}
              >
                We believe that true transformation happens when discipline
                meets passion, when expert guidance meets individual
                determination, and when a supportive community lifts each other
                up.
              </p>

              <p
                style={{
                  fontSize: "16px",
                  color: "#F5F5F5",
                  lineHeight: "1.8",
                  margin: "0 0 30px 0",
                }}
              >
                At One Gym, we don't just build bodies—we build character,
                resilience, and a lifestyle that lasts forever.
              </p>

              <Link href="/membership">
                <button
                  style={{
                    background: "#D4AF37",
                    color: "#000000",
                    padding: "14px 40px",
                    fontSize: "14px",
                    fontWeight: 500,
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    width: "auto",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0 5px 15px rgba(212,175,55,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Start Your Journey
                </button>
              </Link>
            </div>

            <div
              className="story-image"
              style={{
                height: "400px",
                background: "linear-gradient(135deg, #D4AF37 0%, #1A1A1A 100%)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                color: "#000000",
                fontWeight: 500
              }}
            >
              <Image
                src="/logo.jpg"
                alt="Gym Logo"
                width={300}
                height={300}
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "300px",
                }}
              />
            </div>
          </div>
        </section>

        {/* Why Choose ONE GYM */}
        <section
          className="section-padding"
          style={{
            padding: "80px 40px",
            background: "#111111",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            <h2
              className="section-title"
              style={{
                textAlign: "center",
                marginBottom: "16px",
              }}
            >
              Why Choose ONE GYM
            </h2>

            <p
              style={{
                textAlign: "center",
                color: "#BFBFBF",
                maxWidth: "700px",
                margin: "0 auto 60px",
                lineHeight: "1.8",
                fontSize: "16px",
              }}
            >
              More than just a gym—we provide world-class facilities, expert
              coaching, and an environment designed to help you achieve your
              fitness goals.
            </p>

            <div
              className="why-choose-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
              }}
            >
              {whyChooseOneGym.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="why-choose-card"
                    style={{
                      background: "#1A1A1A",
                      border: "1px solid rgba(212,175,55,0.2)",
                      borderRadius: "16px",
                      padding: "30px",
                      transition: "0.3s ease",
                      cursor: "pointer",
                      ...(index === whyChooseOneGym.length - 1 && {
                        gridColumn: "2 / 3",
                      }),
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.border =
                        "1px solid rgba(212,175,55,0.8)";
                      e.currentTarget.style.transform = "translateY(-8px)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 30px rgba(212,175,55,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.border =
                        "1px solid rgba(212,175,55,0.2)";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div
                      className="icon-circle"
                      style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "50%",
                        background: "rgba(212,175,55,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <Icon size={32} color="#D4AF37" />
                    </div>

                    <h3
                      style={{
                        color: "#D4AF37",
                        fontSize: "22px",
                        marginBottom: "12px",
                        fontWeight: 600,
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        color: "#D9D9D9",
                        lineHeight: "1.7",
                        fontSize: "15px",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section
          className="section-padding"
          style={{
            padding: "80px 40px",
            background: "#1A1A1A",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <h2
              className="section-title"
              style={{
                margin: "0 0 60px 0",
                textAlign: "center",
              }}
            >
              Our Facilities
            </h2>

            <div
              className="facilities-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "30px",
              }}
            >
              {facilities.map((facility) => (
                <div
                  key={facility.id}
                  className="facility-card"
                  style={{
                    position: "relative",
                    height: "300px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    border: "1px solid rgba(212, 175, 55, 0.2)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.border =
                      "1px solid rgba(212,175,55,0.8)";
                    e.currentTarget.style.transform = "scale(1.02)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 30px rgba(212,175,55,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.border =
                      "1px solid rgba(212, 175, 55, 0.2)";
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <img
                    src={facility.image}
                    alt={facility.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                      padding: "20px",
                      display: "flex",
                      alignItems: "flex-end",
                      height: "100%",
                    }}
                  >
                    <h3
                      className="facility-name"
                      style={{
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "#D4AF37",
                        margin: "0",
                      }}
                    >
                      {facility.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="ready-section"
          style={{
            padding: "80px 40px",
            textAlign: "center",
            maxWidth: "100%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div style={{ maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
            <h2
              className="section-title"
              style={{
                margin: "0 0 20px 0",
              }}
            >
              Ready to Transform?
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#F5F5F5",
                margin: "0 0 40px 0",
                lineHeight: "1.7",
              }}
            >
              Join our community and start your fitness journey today. Choose the
              plan that works for you and get started with expert guidance.
            </p>

            <div
              className="cta-buttons"
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
              }}
            >
              <Link href="/membership">
                <button
                  className="cta-button"
                  style={{
                    background: "#D4AF37",
                    color: "#000000",
                    padding: "14px 40px",
                    fontSize: "14px",
                    fontWeight: 500,
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0 5px 15px rgba(212,175,55,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  View Plans
                </button>
              </Link>

              <Link href="/contact">
                <button
                  className="cta-button"
                  style={{
                    background: "transparent",
                    color: "#D4AF37",
                    padding: "14px 40px",
                    fontSize: "14px",
                    fontWeight: 500,
                    border: "2px solid #D4AF37",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#D4AF37";
                    e.currentTarget.style.color = "#000000";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#D4AF37";
                  }}
                >
                  Get In Touch
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}