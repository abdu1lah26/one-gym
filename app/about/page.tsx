"use client";

import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Building2,
  Users,
  Target,
  Dumbbell,
  ShieldCheck,
  Medal,
  Sparkles,
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
      icon: Award,
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
      icon: Target,
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

  // Responsive styles helper
  const getResponsiveStyles = () => `
    @media (max-width: 1024px) {
      .hero-title {
        font-size: 40px !important;
      }
      .section-title {
        font-size: 32px !important;
      }
      .section-padding {
        padding: 60px 24px !important;
      }
      .story-grid {
        grid-template-columns: 1fr !important;
      }
      .story-image {
        height: 300px !important;
      }
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: 32px !important;
      }
      .section-title {
        font-size: 26px !important;
      }
      .section-padding {
        padding: 40px 16px !important;
      }
      .story-text p {
        font-size: 15px !important;
      }
      .values-grid {
        grid-template-columns: 1fr !important;
      }
      .why-choose-grid {
        grid-template-columns: 1fr !important;
      }
      .facilities-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 20px !important;
      }
      .facility-card {
        height: 220px !important;
      }
      .cta-buttons {
        flex-direction: column !important;
      }
      .cta-button {
        width: 100% !important;
      }
    }

    @media (max-width: 480px) {
      .hero-section {
        padding: 50px 16px !important;
      }
      .hero-title {
        font-size: 26px !important;
        margin-bottom: 15px !important;
      }
      .hero-description {
        font-size: 15px !important;
      }
      .section-title {
        font-size: 22px !important;
        margin-bottom: 40px !important;
      }
      .section-padding {
        padding: 30px 16px !important;
      }
      .story-text p {
        font-size: 14px !important;
        margin-bottom: 15px !important;
      }
      .value-card {
        padding: 20px !important;
      }
      .value-card h3 {
        font-size: 18px !important;
      }
      .value-card p {
        font-size: 13px !important;
      }
      .why-choose-card {
        padding: 20px !important;
      }
      .why-choose-card h3 {
        font-size: 18px !important;
      }
      .why-choose-card p {
        font-size: 13px !important;
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
        grid-template-columns: 1fr !important;
        gap: 16px !important;
      }
      .facility-card {
        height: 250px !important;
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
        font-size: 13px !important;
      }
    }
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
  font-size: 18px;
  color: #f5f5f5;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
}

@media (max-width: 480px) {
  .hero-title {
    gap: 6px;
  }

  .hero-logo {
    height: 32px;
  }

  .hero-description {
    font-size: 15px;
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
            maxWidth: "1000px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h2
            className="section-title"
            style={{
              fontSize: "40px",
              fontWeight: 500,
              color: "#D4AF37",
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
                fontWeight: 500,
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

        {/* Core Values Section */}
        <section
          className="section-padding"
          style={{
            padding: "80px 40px",
            background: "#1A1A1A",
          }}
        >
          <div
            style={{
              maxWidth: "1000px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <h2
              className="section-title"
              style={{
                fontSize: "40px",
                fontWeight: 500,
                color: "#D4AF37",
                margin: "0 0 60px 0",
                textAlign: "center",
              }}
            >
              Our Core Values
            </h2>

            <div
              className="values-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "40px",
              }}
            >
              {values.map((value, index) => (
                <div
                  key={index}
                  className="value-card"
                  style={{
                    padding: "30px",
                    background: "#000000",
                    border: "1px solid rgba(212, 175, 55, 0.2)",
                    borderRadius: "12px",
                    transition: "all 0.3s ease",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#D4AF37",
                      margin: "0 0 12px 0",
                    }}
                  >
                    {value.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#F5F5F5",
                      lineHeight: "1.7",
                      margin: "0",
                    }}
                  >
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section
          className="section-padding"
          style={{
            padding: "80px 40px",
            maxWidth: "1000px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h2
            className="section-title"
            style={{
              fontSize: "40px",
              fontWeight: 500,
              color: "#D4AF37",
              margin: "0 0 60px 0",
              textAlign: "center",
            }}
          >
            Why Choose One Gym
          </h2>

          <div
            className="why-choose-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "40px",
            }}
          >
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="why-choose-card"
                  style={{
                    textAlign: "center",
                    padding: "28px",
                    borderRadius: "12px",
                    border: "1px solid rgba(212, 175, 55, 0.15)",
                    background: "rgba(255, 255, 255, 0.02)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    className="icon-circle"
                    style={{
                      width: "68px",
                      height: "68px",
                      margin: "0 auto 16px auto",
                      borderRadius: "999px",
                      border: "1px solid rgba(212, 175, 55, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(212, 175, 55, 0.06)",
                    }}
                  >
                    <Icon size={30} strokeWidth={1.8} color="#D4AF37" />
                  </div>

                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#D4AF37",
                      margin: "0 0 12px 0",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#F5F5F5",
                      lineHeight: "1.7",
                      margin: "0",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
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
                fontSize: "40px",
                fontWeight: 500,
                color: "#D4AF37",
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
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(135deg, #D4AF37 0%, #1A1A1A 100%)",
                      display: "none",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      color: "#000000",
                      fontWeight: 500,
                    }}
                  >
                    {facility.name}
                  </div>

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
            maxWidth: "800px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h2
            className="section-title"
            style={{
              fontSize: "40px",
              fontWeight: 500,
              color: "#D4AF37",
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
              >
                Get In Touch
              </button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
