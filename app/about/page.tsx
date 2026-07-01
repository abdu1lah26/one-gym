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

  const facilities = [
    { id: 1, name: "Strength Training Zone", image: "/gym1.jpg" },
    { id: 2, name: "Cardio Area", image: "/gym2.jpg" },
    { id: 3, name: "Functional Training", image: "/gym3.jpg" },
    { id: 4, name: "Olympic Lifting", image: "/gym4.jpg" },
    { id: 5, name: "Flexibility & Recovery", image: "/gym5.jpg" },
    { id: 6, name: "Member Lounge", image: "/gym6.jpg" },
  ];

  return (
    <main style={{ background: "#000000", minHeight: "100vh" }}>
      <Header />

      <div style={{ paddingTop: "60px" }}>
        {/* Hero Section */}
        <section
          style={{
            padding: "40px 16px 50px",
            textAlign: "center",
            background: "linear-gradient(135deg, #1A1A1A 0%, #000000 100%)",
          }}
        >
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              fontSize: "clamp(24px, 5vw, 48px)",
              fontWeight: 600,
              color: "#d4af37",
              margin: "0 0 16px",
              flexWrap: "wrap",
            }}
          >
            <span>About</span>
            <img
              src="/logo-text-Photoroom.png"
              alt="ONE GYM"
              style={{
                height: "clamp(30px, 5vw, 60px)",
                width: "auto",
                display: "block",
              }}
            />
          </h1>

          <p
            style={{
              fontSize: "clamp(13px, 2vw, 16px)",
              color: "#f5f5f5",
              maxWidth: "100%",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Where fitness meets discipline. Building stronger bodies, stronger
            minds, and an unbreakable community.
          </p>
        </section>

        {/* Our Story Section */}
        <section
          style={{
            padding: "40px 16px 50px",
            maxWidth: "100%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(22px, 4vw, 36px)",
              fontWeight: 600,
              color: "#D4AF37",
              margin: "0 0 32px",
              textAlign: "center",
            }}
          >
            Our Story
          </h2>

          <div
            className="story-grid"
            style={{
              display: "grid",
              gap: "24px",
              alignItems: "center",
              maxWidth: "1000px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "clamp(13px, 1.8vw, 15px)",
                  color: "#F5F5F5",
                  lineHeight: 1.7,
                  margin: "0 0 16px",
                }}
              >
                One Gym was founded with a singular vision: to create a space
                where fitness enthusiasts and beginners alike could transform
                themselves—not just physically, but mentally and spiritually.
              </p>

              <p
                style={{
                  fontSize: "clamp(13px, 1.8vw, 15px)",
                  color: "#F5F5F5",
                  lineHeight: 1.7,
                  margin: "0 0 16px",
                }}
              >
                We believe that true transformation happens when discipline
                meets passion, when expert guidance meets individual
                determination, and when a supportive community lifts each other
                up.
              </p>

              <p
                style={{
                  fontSize: "clamp(13px, 1.8vw, 15px)",
                  color: "#F5F5F5",
                  lineHeight: 1.7,
                  margin: "0 0 24px",
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
                    padding: "clamp(11px, 2vw, 14px) clamp(24px, 4vw, 40px)",
                    fontSize: "clamp(12px, 1.6vw, 14px)",
                    fontWeight: 600,
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    width: "auto",
                    minHeight: "44px",
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
              style={{
                minHeight: "220px",
                padding: "24px",
                background: "linear-gradient(135deg, #D4AF37 0%, #1A1A1A 100%)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                className="story-logo"
                src="/logo.jpg"
                alt="Gym Logo"
                width={300}
                height={300}
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </section>

        {/* Why Choose ONE GYM */}
        <section
          style={{
            padding: "40px 16px 50px",
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
              style={{
                fontSize: "clamp(22px, 4vw, 36px)",
                fontWeight: 600,
                color: "#D4AF37",
                textAlign: "center",
                marginBottom: "12px",
              }}
            >
              Why Choose ONE GYM
            </h2>

            <p
              style={{
                textAlign: "center",
                color: "#BFBFBF",
                maxWidth: "100%",
                margin: "0 auto 32px",
                lineHeight: 1.7,
                fontSize: "clamp(12px, 1.6vw, 15px)",
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
                gap: "16px",
              }}
            >
              {whyChooseOneGym.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className={`why-choose-card ${
                      index === whyChooseOneGym.length - 1 ? "last-card" : ""
                    }`}
                    style={{
                      background: "#1A1A1A",
                      border: "1px solid rgba(212,175,55,0.2)",
                      borderRadius: "14px",
                      padding: "18px",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(212,175,55,0.8)";
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 20px rgba(212,175,55,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(212,175,55,0.2)";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "14px",
                      }}
                    >
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          minWidth: "48px",
                          borderRadius: "50%",
                          background: "rgba(212,175,55,0.12)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Icon size={24} color="#D4AF37" />
                      </div>

                      <div style={{ flex: 1 }}>
                        <h3
                          style={{
                            color: "#D4AF37",
                            fontSize: "clamp(15px, 1.8vw, 18px)",
                            margin: "0 0 6px",
                            fontWeight: 600,
                          }}
                        >
                          {item.title}
                        </h3>

                        <p
                          style={{
                            color: "#D9D9D9",
                            lineHeight: 1.5,
                            fontSize: "clamp(12px, 1.5vw, 13px)",
                            margin: 0,
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section
          style={{
            padding: "40px 16px 50px",
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
              style={{
                fontSize: "clamp(22px, 4vw, 36px)",
                fontWeight: 600,
                color: "#D4AF37",
                margin: "0 0 32px",
                textAlign: "center",
              }}
            >
              Our Facilities
            </h2>

            <div
            className="facilities-grid"
              style={{
                display: "grid",
                gap: "16px",
              }}
            >
              {facilities.map((facility) => (
                <div
                  key={facility.id}
                  style={{
                    position: "relative",
                    height: "220px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    border: "1px solid rgba(212, 175, 55, 0.2)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(212,175,55,0.8)";
                    e.currentTarget.style.transform = "scale(1.02)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 20px rgba(212,175,55,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(212, 175, 55, 0.2)";
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
                        "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
                      padding: "16px",
                      display: "flex",
                      alignItems: "flex-end",
                      height: "100%",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "clamp(12px, 1.5vw, 15px)",
                        fontWeight: 500,
                        color: "#D4AF37",
                        margin: 0,
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
          style={{
            padding: "40px 16px 50px",
            textAlign: "center",
            maxWidth: "100%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div
            style={{
              maxWidth: "800px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(22px, 4vw, 36px)",
                fontWeight: 600,
                color: "#D4AF37",
                margin: "0 0 16px",
              }}
            >
              Ready to Transform?
            </h2>
            <p
              style={{
                fontSize: "clamp(12px, 1.6vw, 15px)",
                color: "#F5F5F5",
                margin: "0 0 28px",
                lineHeight: 1.6,
              }}
            >
              Join our community and start your fitness journey today. Choose
              the plan that works for you and get started with expert guidance.
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link href="/membership">
                <button
                  style={{
                    background: "#D4AF37",
                    color: "#000000",
                    padding: "clamp(11px, 2vw, 14px) clamp(20px, 3vw, 40px)",
                    fontSize: "clamp(12px, 1.6vw, 14px)",
                    fontWeight: 600,
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    minHeight: "44px",
                    display: "inline-flex",
                    alignItems: "center",
                    whiteSpace: "nowrap",
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
                  style={{
                    background: "transparent",
                    color: "#D4AF37",
                    padding: "clamp(11px, 2vw, 14px) clamp(20px, 3vw, 40px)",
                    fontSize: "clamp(12px, 1.6vw, 14px)",
                    fontWeight: 600,
                    border: "2px solid #D4AF37",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    minHeight: "44px",
                    display: "inline-flex",
                    alignItems: "center",
                    whiteSpace: "nowrap",
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

      <style jsx>{`
      .why-choose-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 1024px) {
  .why-choose-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .last-card {
    grid-column: 2;
  }
}
        .story-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 20px;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
}
        @media (min-width: 481px) and (max-width: 768px) {
          /* Mobile Tablet Styles */
        }

        @media (min-width: 769px) and (max-width: 1023px) {
          /* Tablet Styles */
          section {
            padding: 50px 32px 60px !important;
          }

          h2 {
            font-size: 36px !important;
          }

          p {
            font-size: 14px !important;
          }

          /* Why Choose Grid */
          .why-choose-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }

          /* Facilities Grid */
          .facilities-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }

          .facility-card {
            height: 280px !important;
          }
        }

        @media (max-width: 480px) {
          .story-logo {
            max-width: 180px !important;
          }
        }

        @media (min-width: 1024px) {
          /* Desktop Styles */
          section {
            padding: 80px 40px !important;
          }

          h2 {
            font-size: 40px !important;
          }

          /* Why Choose Grid */
          .why-choose-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
          }

          .why-choose-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          /* Facilities Grid */
          .facilities-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
          }

          .facility-card {
            height: 300px !important;
          }
        }
      `}</style>
    </main>
  );
}
