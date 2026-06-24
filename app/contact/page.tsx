"use client";

import Header from "@/components/Header";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { MapPin, Phone, UserRound, AtSign} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "female",
    membership: "starter-ignite",
    message: "",
  });

  const trainerNumbers = {
    female: "919366248087",
    male: "918477835594",
  };

  const whatsappMessage = (gender: keyof typeof trainerNumbers) => {
    const number = trainerNumbers[gender];
    const message = `Hi, I'm ${formData.name} (${formData.email}, ${formData.phone}). I'm interested in the ${formData.membership} plan. ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${number}?text=${encodedMessage}`;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.open(
      whatsappMessage(formData.gender as keyof typeof trainerNumbers),
      "_blank",
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      gender: "female",
      membership: "starter-ignite",
      message: "",
    });
  };

  return (
    <main
      style={{ background: "#000000", minHeight: "100vh", overflowX: "hidden" }}
    >
      <Header />

      <div style={{ paddingTop: "80px" }}>
        <section
          style={{
            padding: "60px clamp(16px, 4vw, 40px)",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(32px, 6vw, 48px)",
              fontWeight: 500,
              color: "#D4AF37",
              margin: "0 0 20px 0",
            }}
          >
            Get In Touch
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "#F5F5F5",
              margin: "0",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: "1.7",
            }}
          >
            Have questions? Want to start your fitness journey? Reach out to us
            via WhatsApp and our expert trainers will get back to you.
          </p>
        </section>

        <section
          style={{
            padding: "60px clamp(16px, 4vw, 40px)",
            maxWidth: "1000px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
                marginBottom: "20px",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#D4AF37",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "12px 16px",
                    fontSize: "14px",
                    background: "#1A1A1A",
                    border: "1px solid rgba(212, 175, 55, 0.3)",
                    borderRadius: "8px",
                    color: "#F5F5F5",
                    transition: "all 0.3s ease",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#D4AF37";
                    e.currentTarget.style.boxShadow =
                      "0 0 0 3px rgba(212, 175, 55, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(212, 175, 55, 0.3)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#D4AF37",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "12px 16px",
                    fontSize: "14px",
                    background: "#1A1A1A",
                    border: "1px solid rgba(212, 175, 55, 0.3)",
                    borderRadius: "8px",
                    color: "#F5F5F5",
                    transition: "all 0.3s ease",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#D4AF37";
                    e.currentTarget.style.boxShadow =
                      "0 0 0 3px rgba(212, 175, 55, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(212, 175, 55, 0.3)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
                marginBottom: "20px",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#D4AF37",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "12px 16px",
                    fontSize: "14px",
                    background: "#1A1A1A",
                    border: "1px solid rgba(212, 175, 55, 0.3)",
                    borderRadius: "8px",
                    color: "#F5F5F5",
                    transition: "all 0.3s ease",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#D4AF37";
                    e.currentTarget.style.boxShadow =
                      "0 0 0 3px rgba(212, 175, 55, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(212, 175, 55, 0.3)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#D4AF37",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Preferred Trainer
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "12px 16px",
                    fontSize: "14px",
                    background: "#1A1A1A",
                    border: "1px solid rgba(212, 175, 55, 0.3)",
                    borderRadius: "8px",
                    color: "#F5F5F5",
                    transition: "all 0.3s ease",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#D4AF37";
                    e.currentTarget.style.boxShadow =
                      "0 0 0 3px rgba(212, 175, 55, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(212, 175, 55, 0.3)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <option value="female" style={{ background: "#000000" }}>
                    Female Trainer
                  </option>
                  <option value="male" style={{ background: "#000000" }}>
                    Male Trainer
                  </option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#D4AF37",
                  marginBottom: "8px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Interested Plan
              </label>
              <select
                name="membership"
                value={formData.membership}
                onChange={handleChange}
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "12px 16px",
                  fontSize: "14px",
                  background: "#1A1A1A",
                  border: "1px solid rgba(212, 175, 55, 0.3)",
                  borderRadius: "8px",
                  color: "#F5F5F5",
                  transition: "all 0.3s ease",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#D4AF37";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(212, 175, 55, 0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.3)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <option
                  value="starter-ignite"
                  style={{ background: "#000000" }}
                >
                  Starter Ignite - ₹999/month
                </option>
                <option value="power-ascent" style={{ background: "#000000" }}>
                  Power Ascent - ₹833/month
                </option>
                <option
                  value="elite-transformation"
                  style={{ background: "#000000" }}
                >
                  Elite Transformation - ₹750/month
                </option>
                <option value="legend" style={{ background: "#000000" }}>
                  Legend Membership - ₹667/month
                </option>
              </select>
            </div>

            <div style={{ marginBottom: "30px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#D4AF37",
                  marginBottom: "8px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Message / Inquiry
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your fitness goals..."
                rows={5}
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "12px 16px",
                  fontSize: "14px",
                  background: "#1A1A1A",
                  border: "1px solid rgba(212, 175, 55, 0.3)",
                  borderRadius: "8px",
                  color: "#F5F5F5",
                  transition: "all 0.3s ease",
                  fontFamily: "inherit",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#D4AF37";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(212, 175, 55, 0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.3)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                background: "#D4AF37",
                color: "#000000",
                padding: "16px 24px",
                fontSize: "16px",
                fontWeight: 500,
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 24px rgba(212, 175, 55, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Send via WhatsApp
            </button>
          </form>
        </section>

        <section
          style={{
            padding: "60px clamp(16px, 4vw, 40px)",
            maxWidth: "1200px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "40px",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: 600,
                  color: "#D4AF37",
                  margin: "0 0 40px 0",
                  letterSpacing: "-0.5px",
                }}
              >
                Contact Information
              </h2>

              <div style={{ marginBottom: "32px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <MapPin size={18} color="#D4AF37" />
                  <h3
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#D4AF37",
                      margin: 0,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Address
                  </h3>
                </div>

                <p
                  style={{
                    fontSize: "16px",
                    color: "#E5E5E5",
                    margin: 0,
                    lineHeight: "1.8",
                  }}
                >
                  Chanda Market, Bulaki Adda
                  <br />
                  Lucknow, Uttar Pradesh 226004
                </p>
              </div>

              <div style={{ marginBottom: "32px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <UserRound size={18} color="#D4AF37" />
                  <h3
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#D4AF37",
                      margin: 0,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Female Trainer
                  </h3>
                </div>

                <a
                  href="https://wa.me/919366248087"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "16px",
                    color: "#F5F5F5",
                    textDecoration: "none",
                  }}
                >
                  <Phone size={16} color="#D4AF37" />
                  +91 9366248087
                </a>
              </div>

              <div style={{ marginBottom: "32px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <UserRound size={18} color="#D4AF37" />
                  <h3
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#D4AF37",
                      margin: 0,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Male Trainer
                  </h3>
                </div>

                <a
                  href="https://wa.me/918477835594"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "16px",
                    color: "#F5F5F5",
                    textDecoration: "none",
                  }}
                >
                  <Phone size={16} color="#D4AF37" />
                  +91 8477835594
                </a>
              </div>

              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <AtSign size={18} color="#D4AF37" />
                  <h3
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#D4AF37",
                      margin: 0,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Instagram
                  </h3>
                </div>

                <a
                  href="https://www.instagram.com/onegym.lucknow/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "16px",
                    color: "#F5F5F5",
                    textDecoration: "none",
                  }}
                >
                  @onegym.lucknow
                </a>
              </div>
            </div>  

            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid rgba(212, 175, 55, 0.3)",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3559.849586327188!2d80.89777699999999!3d26.844736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDUwJzQxLjEiTiA4MMKwNTMnNTIuMCJF!5e0!3m2!1sen!2sin!4v1782292357208!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: "none", display: "block" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
