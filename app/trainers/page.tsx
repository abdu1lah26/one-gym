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
      whatsapp: "919876543210", // replace with actual WhatsApp number
      specialties: ["Strength Training", "Fat Loss", "CrossFit"],
    },
    {
      id: 2,
      name: "Arjun Kumar",
      type: "Male Trainer",
      image: "/male-trainer.jpg",
      experience: "7+ Years",
      clients: "350+",
      rating: "4.8",
      whatsapp: "919123456789", // replace with actual WhatsApp number
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

        <div style={{ paddingTop: "80px" }}>
          {/* Hero Section */}
          <section
            style={{
              position: "relative",
              textAlign: "center",
              padding: "100px 24px 80px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "350px",
                height: "350px",
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
                fontSize: "clamp(36px, 8vw, 64px)",
                fontWeight: 700,
                color: "#D4AF37",
                letterSpacing: "-2px",
                marginBottom: "24px",
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
                lineHeight: "1.8",
                fontSize: "18px",
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
              padding: "40px 24px 100px",
            }}
          >
            <div className="trainer-grid">
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
                  <div className="trainer-card" key={trainer.id}>
                    <div className="image-wrapper">
                      <img
                        src={trainer.image}
                        alt={trainer.name}
                        className="trainer-image"
                      />

                      <div className="elite-badge">
                        <BadgeCheck size={14} />
                        <span>Elite Coach</span>
                      </div>
                    </div>

                    <div style={{ padding: "30px" }}>
                      <h3
                        style={{
                          color: "#D4AF37",
                          fontSize: "28px",
                          marginBottom: "8px",
                          fontWeight: 700,
                        }}
                      >
                        {trainer.name}
                      </h3>

                      <p
                        style={{
                          color: "#CFCFCF",
                          marginBottom: "12px",
                        }}
                      >
                        {trainer.type}
                      </p>

                      <p
                        style={{
                          color: "#D4AF37",
                          marginBottom: "20px",
                          fontWeight: 600,
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <Star size={18} fill="#D4AF37" strokeWidth={1.5} />
                        {trainer.rating} Rating
                      </p>

                      <div
                        style={{
                          height: "1px",
                          background:
                            "linear-gradient(90deg,#D4AF37,transparent)",
                          marginBottom: "24px",
                        }}
                      />

                      {/* Stats */}
                      <div className="stats-grid">
                        <div className="stat-card">
                          <Award
                            size={28}
                            color="#D4AF37"
                            style={{ marginBottom: "8px" }}
                          />

                          <div
                            style={{
                              fontWeight: 700,
                            }}
                          >
                            {trainer.experience}
                          </div>

                          <small
                            style={{
                              color: "#999",
                            }}
                          >
                            Experience
                          </small>
                        </div>

                        <div className="stat-card">
                          <Users
                            size={28}
                            color="#D4AF37"
                            style={{ marginBottom: "8px" }}
                          />

                          <div
                            style={{
                              fontWeight: 700,
                            }}
                          >
                            {trainer.clients}
                          </div>

                          <small
                            style={{
                              color: "#999",
                            }}
                          >
                            Clients
                          </small>
                        </div>
                      </div>

                      {/* Skills */}
                      <div
                        style={{
                          marginBottom: "28px",
                        }}
                      >
                        <p
                          style={{
                            color: "#D4AF37",
                            fontSize: "12px",
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                            marginBottom: "14px",
                          }}
                        >
                          Specialties
                        </p>

                        <div className="specialties">
                          {trainer.specialties.map((item, index) => (
                            <span key={index} className="specialty-tag">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="cta-button">
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
        .trainer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
        }

        .trainer-card {
          background: linear-gradient(180deg, #1a1a1a 0%, #111111 100%);
          border: 1px solid rgba(212, 175, 55, 0.35);
          border-radius: 28px;
          overflow: hidden;
          transition: all 0.35s ease;
        }

        .trainer-card:hover {
          transform: translateY(-10px);
          border-color: #d4af37;
          box-shadow: 0 18px 40px rgba(212, 175, 55, 0.18);
        }

        .image-wrapper {
          position: relative;
          height: 380px;
          overflow: hidden;
        }

        .trainer-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .trainer-card:hover .trainer-image {
          transform: scale(1.08);
        }

        .elite-badge {
          position: absolute;
          top: 18px;
          right: 18px;
          background: linear-gradient(135deg, #f6d365, #d4af37);
          color: black;
          font-size: 12px;
          font-weight: 700;
          padding: 8px 14px;
          border-radius: 999px;
          box-shadow: 0 6px 20px rgba(212, 175, 55, 0.35);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 24px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 18px;
          text-align: center;
        }

        .specialties {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .specialty-tag {
          background: rgba(212, 175, 55, 0.12);
          border: 1px solid rgba(212, 175, 55, 0.25);
          color: #d4af37;
          padding: 8px 14px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 500;
        }

        .cta-button {
          width: 100%;
          background: linear-gradient(135deg, #f6d365, #d4af37);
          color: black;
          border: none;
          border-radius: 14px;
          padding: 16px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 24px rgba(212, 175, 55, 0.25);
        }

        .cta-button:hover {
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 42px !important;
          }

          .image-wrapper {
            height: 300px;
          }

          .trainer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}