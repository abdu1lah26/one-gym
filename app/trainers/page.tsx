"use client";

import Header from "@/components/Header";
import {
  BadgeCheck,
  Star,
  Award,
  Users,
} from "lucide-react";

export default function TrainersPage() {
  const trainers = [
    {
      id: 1,
      name: "Ananya Singh",
      type: "Female Trainer",
      image: "/female-trainer.jpg",
      experience: "5+ Years",
      clients: "200+",
      rating: "4.9",
      whatsapp: "919876543210",
      specialties: ["Strength Training", "Fat Loss", "CrossFit"],
    },
    {
      id: 2,
      name: "Jawed Nawab",
      type: "Male Trainer",
      image: "/male-trainer.jpg",
      experience: "7+ Years",
      clients: "350+",
      rating: "4.8",
      whatsapp: "919123456789",
      specialties: ["Body Building", "MMA", "Personal Training"],
    },
  ];

  return (
    <>
      <main
        style={{
          background: "#000",
          minHeight: "100vh",
          color: "#fff",
        }}
      >
        <Header />

        <div style={{ paddingTop: "60px" }}>
          {/* Hero Section */}
          <section
            style={{
              position: "relative",
              textAlign: "center",
              padding: "clamp(40px, 8vw, 100px) 16px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "clamp(200px, 50vw, 350px)",
                height: "clamp(200px, 50vw, 350px)",
                background: "rgba(212,175,55,0.12)",
                filter: "blur(120px)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
              }}
            />

            <h1
              style={{
                position: "relative",
                fontSize: "clamp(28px, 7vw, 64px)",
                fontWeight: 700,
                color: "#D4AF37",
                letterSpacing: "-1px",
                marginBottom: "16px",
                margin: "0 0 16px",
              }}
            >
              Expert Trainers
            </h1>

            <p
              style={{
                position: "relative",
                maxWidth: "700px",
                margin: "0 auto",
                color: "#BFBFBF",
                lineHeight: 1.7,
                fontSize: "clamp(13px, 2vw, 16px)",
              }}
            >
              Train with elite fitness professionals dedicated to helping you
              build strength, improve performance, and achieve long-term
              results.
            </p>
          </section>

          {/* Trainers */}
          <section
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "clamp(30px, 5vw, 60px) 16px clamp(60px, 8vw, 100px)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "clamp(20px, 3vw, 40px)",
              }}
            >
              {trainers.map((trainer) => {
                const whatsappMessage = `Hello ${trainer.name},

I found your profile on the gym website and would like to book a free consultation.

My fitness goals are:
- Weight Loss / Fat Loss
- Muscle Building
- General Fitness

Please let me know your availability.

Thank you.`;

                const whatsappUrl = `https://wa.me/${trainer.whatsapp}?text=${encodeURIComponent(
                  whatsappMessage
                )}`;

                return (
                  <div
                    key={trainer.id}
                    style={{
                      background: "linear-gradient(180deg, #1a1a1a 0%, #111111 100%)",
                      border: "1px solid rgba(212, 175, 55, 0.35)",
                      borderRadius: "clamp(16px, 3vw, 28px)",
                      overflow: "hidden",
                      transition: "all 0.35s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-8px)";
                      e.currentTarget.style.borderColor = "#d4af37";
                      e.currentTarget.style.boxShadow =
                        "0 18px 40px rgba(212, 175, 55, 0.18)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.borderColor =
                        "rgba(212, 175, 55, 0.35)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {/* Image */}
                    <div
                      style={{
                        position: "relative",
                        height: "clamp(200px, 60vw, 380px)",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={trainer.image}
                        alt={trainer.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.6s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.08)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      />

                      {/* Badge */}
                      <div
                        style={{
                          position: "absolute",
                          top: "clamp(12px, 2vw, 18px)",
                          right: "clamp(12px, 2vw, 18px)",
                          background: "linear-gradient(135deg, #f6d365, #d4af37)",
                          color: "black",
                          fontSize: "clamp(10px, 1.2vw, 12px)",
                          fontWeight: 700,
                          padding: "clamp(6px, 1vw, 8px) clamp(10px, 2vw, 14px)",
                          borderRadius: "999px",
                          boxShadow: "0 6px 20px rgba(212, 175, 55, 0.35)",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <BadgeCheck size={14} />
                        <span>Elite Coach</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div style={{ padding: "clamp(20px, 4vw, 30px)" }}>
                      <h3
                        style={{
                          color: "#D4AF37",
                          fontSize: "clamp(20px, 3vw, 28px)",
                          marginBottom: "6px",
                          fontWeight: 700,
                          margin: "0 0 6px",
                        }}
                      >
                        {trainer.name}
                      </h3>

                      <p
                        style={{
                          color: "#CFCFCF",
                          marginBottom: "12px",
                          fontSize: "clamp(12px, 1.5vw, 14px)",
                          margin: "0 0 12px",
                        }}
                      >
                        {trainer.type}
                      </p>

                      <p
                        style={{
                          color: "#D4AF37",
                          marginBottom: "16px",
                          fontWeight: 600,
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          fontSize: "clamp(12px, 1.5vw, 14px)",
                          margin: "0 0 16px",
                        }}
                      >
                        <Star
                          size={16}
                          fill="#D4AF37"
                          strokeWidth={1.5}
                          style={{ minWidth: "16px" }}
                        />
                        {trainer.rating} Rating
                      </p>

                      <div
                        style={{
                          height: "1px",
                          background:
                            "linear-gradient(90deg,#D4AF37,transparent)",
                          marginBottom: "clamp(16px, 3vw, 24px)",
                        }}
                      />

                      {/* Stats */}
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "clamp(12px, 2vw, 16px)",
                          marginBottom: "clamp(20px, 3vw, 24px)",
                        }}
                      >
                        <div
                          style={{
                            background: "rgba(255, 255, 255, 0.03)",
                            border: "1px solid rgba(255, 255, 255, 0.05)",
                            borderRadius: "12px",
                            padding: "clamp(14px, 2vw, 18px)",
                            textAlign: "center",
                          }}
                        >
                          <Award
                            size={24}
                            color="#D4AF37"
                            style={{ marginBottom: "6px" }}
                          />

                          <div
                            style={{
                              fontWeight: 700,
                              fontSize: "clamp(12px, 1.5vw, 14px)",
                            }}
                          >
                            {trainer.experience}
                          </div>

                          <small
                            style={{
                              color: "#999",
                              fontSize: "clamp(11px, 1.2vw, 12px)",
                              display: "block",
                              marginTop: "4px",
                            }}
                          >
                            Experience
                          </small>
                        </div>

                        <div
                          style={{
                            background: "rgba(255, 255, 255, 0.03)",
                            border: "1px solid rgba(255, 255, 255, 0.05)",
                            borderRadius: "12px",
                            padding: "clamp(14px, 2vw, 18px)",
                            textAlign: "center",
                          }}
                        >
                          <Users
                            size={24}
                            color="#D4AF37"
                            style={{ marginBottom: "6px" }}
                          />

                          <div
                            style={{
                              fontWeight: 700,
                              fontSize: "clamp(12px, 1.5vw, 14px)",
                            }}
                          >
                            {trainer.clients}
                          </div>

                          <small
                            style={{
                              color: "#999",
                              fontSize: "clamp(11px, 1.2vw, 12px)",
                              display: "block",
                              marginTop: "4px",
                            }}
                          >
                            Clients
                          </small>
                        </div>
                      </div>

                      {/* Skills */}
                      <div
                        style={{
                          marginBottom: "clamp(20px, 3vw, 28px)",
                        }}
                      >
                        <p
                          style={{
                            color: "#D4AF37",
                            fontSize: "clamp(10px, 1.2vw, 12px)",
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                            marginBottom: "10px",
                            margin: "0 0 10px",
                            fontWeight: 600,
                          }}
                        >
                          Specialties
                        </p>

                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "8px",
                          }}
                        >
                          {trainer.specialties.map((item, index) => (
                            <span
                              key={index}
                              style={{
                                background: "rgba(212, 175, 55, 0.12)",
                                border: "1px solid rgba(212, 175, 55, 0.25)",
                                color: "#d4af37",
                                padding:
                                  "clamp(6px, 1vw, 8px) clamp(10px, 2vw, 14px)",
                                borderRadius: "999px",
                                fontSize: "clamp(10px, 1.2vw, 12px)",
                                fontWeight: 500,
                                whiteSpace: "nowrap",
                              }}
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: "block", textDecoration: "none" }}
                      >
                        <button
                          style={{
                            width: "100%",
                            background:
                              "linear-gradient(135deg, #f6d365, #d4af37)",
                            color: "black",
                            border: "none",
                            borderRadius: "clamp(12px, 2vw, 14px)",
                            padding: "clamp(13px, 2vw, 16px)",
                            fontSize: "clamp(12px, 1.5vw, 15px)",
                            fontWeight: 700,
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            boxShadow: "0 8px 24px rgba(212, 175, 55, 0.25)",
                            minHeight: "44px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform =
                              "translateY(-2px)";
                            e.currentTarget.style.boxShadow =
                              "0 12px 32px rgba(212, 175, 55, 0.35)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow =
                              "0 8px 24px rgba(212, 175, 55, 0.25)";
                          }}
                          onTouchStart={(e) => {
                            e.currentTarget.style.transform = "scale(0.98)";
                          }}
                          onTouchEnd={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                        >
                          Book Free Consultation
                        </button>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </main>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        /* Mobile Tablet Styles (481px - 768px) */
        @media (min-width: 481px) and (max-width: 768px) {
          section {
            padding: clamp(40px, 6vw, 60px) 20px !important;
          }
        }

        /* Tablet Styles (769px - 1023px) */
        @media (min-width: 769px) and (max-width: 1023px) {
          section:first-of-type {
            padding: 60px 32px !important;
          }

          section:last-of-type {
            padding: 50px 32px 80px !important;
          }

          h1 {
            font-size: 48px !important;
          }

          .trainer-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 32px !important;
          }
        }

        /* Desktop Styles (1024px+) */
        @media (min-width: 1024px) {
          section:first-of-type {
            padding: clamp(60px, 8vw, 100px) 32px !important;
          }

          section:last-of-type {
            padding: clamp(40px, 5vw, 60px) 32px clamp(60px, 8vw, 100px) !important;
          }

          h1 {
            font-size: 56px !important;
          }

          .trainer-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(380px, 1fr)) !important;
            gap: 40px !important;
          }

          .trainer-card {
            transform: scale(1);
          }

          .trainer-card:hover {
            transform: translateY(-10px);
          }
        }

        /* Small Mobile (< 320px) */
        @media (max-width: 320px) {
          h1 {
            font-size: 24px !important;
            letter-spacing: -0.5px;
          }

          p {
            font-size: 12px !important;
          }

          section {
            padding: 32px 12px !important;
          }
        }
      `}</style>
    </>
  );
}