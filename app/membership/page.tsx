"use client";

import Header from "@/components/Header";
import Link from "next/link";

export default function MembershipPage() {
  const plans = [
    {
      id: 1,
      name: "Starter Ignite",
      price: 999,
      duration: 1,
      durationLabel: "Month",
    },
    {
      id: 2,
      name: "Power Ascent",
      price: 2500,
      duration: 3,
      durationLabel: "Months",
    },
    {
      id: 3,
      name: "Elite Transformation",
      price: 4500,
      duration: 6,
      durationLabel: "Months",
      popular: true,
    },
    {
      id: 4,
      name: "Legend Membership",
      price: 8000,
      duration: 12,
      durationLabel: "Months",
    },
  ];

  const features = [
    "Unlimited Gym Access",
    "Professional Trainer Guidance",
    "Premium Equipment Access",
    "Personal Fitness Support",
  ];

  const calculateMonthlyPrice = (price: number, months: number) => {
    return Math.round((price / months) * 100) / 100;
  };

  return (
    <main className="membership-page">
      <Header />

      <div className="page-content">
        <section className="hero">
          <p className="eyebrow">Premium Fitness Membership</p>

          <h1 className="hero-title">Membership Plans</h1>

          <p className="hero-text">
            Choose a membership that matches your fitness journey and unlock
            access to premium equipment, expert trainers, and a motivating
            environment.
          </p>
        </section>

        <section className="offer-banner">
          <span className="offer-tag">LIMITED OFFER</span>

          <h3>
            Extra <span>10% OFF</span> for Students & Couples
          </h3>

          <p>
            Valid on all membership plans. Contact us for eligibility and enrollment.
          </p>
        </section>

        <section className="pricing-section">
          <div className="plans-grid">
            {plans.map((plan) => (
              <article
                key={plan.id}
                className={`plan-card ${plan.popular ? "popular" : ""}`}
              >
                {plan.popular && (
                  <div className="popular-badge">MOST POPULAR</div>
                )}

                <div className="plan-top">
                  <h3 className="plan-name">{plan.name}</h3>

                  <div className="price-block">
                    <div className="plan-price">₹{plan.price}</div>
                    <div className="plan-duration">
                      {plan.duration} {plan.durationLabel}
                    </div>
                    <div className="monthly-price">
                      ₹{calculateMonthlyPrice(plan.price, plan.duration)}/month
                    </div>
                  </div>

                  <div className="features">
                    {features.map((feature) => (
                      <div key={feature} className="feature-item">
                        <span className="check">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link href="/contact" className="join-link">
                  Join Now
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        /* Desktop & Tablet Base Styles */
        .membership-page {
          background: #000;
          min-height: 100vh;
          color: #fff;
        }

        .page-content {
          padding-top: 90px;
        }

        .hero {
          text-align: center;
          padding: clamp(48px, 8vw, 90px) clamp(16px, 3vw, 40px);
          max-width: 920px;
          margin: 0 auto;
        }

        .eyebrow {
          display: block;
          color: #d4af37;
          letter-spacing: 3px;
          text-transform: uppercase;
          font-size: clamp(11px, 1.4vw, 14px);
          margin-bottom: 14px;
          line-height: 1.4;
          font-weight: 600;
        }

        .hero-title {
          color: #fff;
          font-size: clamp(32px, 6vw, 72px);
          font-weight: 700;
          line-height: 1.05;
          margin: 0 0 18px;
          word-break: break-word;
        }

        .hero-text {
          color: #bdbdbd;
          font-size: clamp(14px, 2vw, 18px);
          line-height: 1.8;
          max-width: 720px;
          margin: 0 auto;
        }

        /* Offer Banner */
        .offer-banner {
          max-width: 900px;
          margin: 0 auto clamp(40px, 6vw, 60px);
          padding: clamp(20px, 4vw, 28px);
          text-align: center;
          background: #111;
          border: 1px solid rgba(212, 175, 55, 0.4);
          border-radius: 18px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);
          margin-left: clamp(16px, 3vw, auto);
          margin-right: clamp(16px, 3vw, auto);
        }

        .offer-tag {
          display: inline-block;
          margin-bottom: 12px;
          padding: 6px 14px;
          background: #d4af37;
          color: #000;
          font-size: clamp(10px, 1.2vw, 12px);
          font-weight: 700;
          letter-spacing: 1.5px;
          border-radius: 999px;
        }

        .offer-banner h3 {
          margin: 0 0 8px;
          color: #fff;
          font-size: clamp(24px, 4vw, 38px);
          font-weight: 700;
          line-height: 1.2;
          word-break: break-word;
        }

        .offer-banner h3 span {
          color: #d4af37;
        }

        .offer-banner p {
          margin-top: 12px;
          color: #bdbdbd;
          font-size: clamp(13px, 1.5vw, 16px);
          line-height: 1.6;
        }

        /* Pricing Section */
        .pricing-section {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 clamp(16px, 3vw, 30px) clamp(60px, 8vw, 100px);
        }

        .plans-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: clamp(20px, 2.5vw, 30px);
          align-items: stretch;
        }

        .plan-card {
          background: #111;
          border: 1px solid rgba(212, 175, 55, 0.35);
          border-radius: 24px;
          padding: clamp(24px, 4vw, 35px);
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 100%;
          align-items: center;
          transition: all 0.25s ease;
          overflow: visible;
        }

        .plan-card:hover {
          transform: translateY(-4px);
          border-color: rgba(212, 175, 55, 0.6);
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.35);
        }

        .plan-card.popular {
          border: 2px solid #d4af37;
          background: rgba(212, 175, 55, 0.05);
        }

        .popular-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: #d4af37;
          color: #000;
          padding: 6px 16px;
          border-radius: 999px;
          font-size: clamp(10px, 1.2vw, 12px);
          font-weight: 700;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }

        .plan-top {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
        }

        .plan-name {
          color: #d4af37;
          font-size: clamp(20px, 2.3vw, 26px);
          margin: 0 0 16px;
          text-align: center;
          line-height: 1.2;
          word-break: break-word;
        }

        .price-block {
          text-align: center;
          margin-bottom: 20px;
        }

        .plan-price {
          color: #fff;
          font-size: clamp(36px, 5vw, 48px);
          font-weight: 700;
          line-height: 1;
          word-break: break-word;
        }

        .plan-duration {
          color: #999;
          margin-top: 6px;
          font-size: clamp(13px, 1.5vw, 15px);
        }

        .monthly-price {
          color: #d4af37;
          margin-top: 8px;
          font-weight: 600;
          font-size: clamp(13px, 1.5vw, 15px);
        }

        .features {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 20px;
          display: grid;
          gap: 12px;
          width: 100%;
        }

        .feature-item {
          color: #e0e0e0;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: clamp(13px, 1.5vw, 15px);
          line-height: 1.5;
        }

        .check {
          color: #d4af37;
          font-weight: 700;
          flex: 0 0 auto;
          margin-top: 0px;
          font-size: clamp(13px, 1.5vw, 16px);
        }

        .join-link {
          margin: clamp(20px, 4vw, 28px) auto 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: clamp(160px, 35vw, 200px);
          height: clamp(44px, 8vw, 52px);
          background: #111;
          color: #d4af37;
          border: 2px solid #f4d76b;
          border-radius: 12px;
          font-size: clamp(13px, 1.8vw, 15px);
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          text-decoration: none;
          box-shadow:
            inset 0 0 0 1px rgba(212, 175, 55, 0.5),
            0 0 0 1px rgba(244, 215, 107, 0.6),
            0 0 18px rgba(212, 175, 55, 0.25);
          transition: all 0.3s ease;
          cursor: pointer;
          white-space: nowrap;
        }

        .join-link:hover {
          background: #d4af37;
          color: #000;
          border-color: #f4d76b;
          box-shadow:
            0 0 0 2px rgba(212, 175, 55, 0.4),
            0 10px 30px rgba(212, 175, 55, 0.35);
          transform: translateY(-3px);
        }

        /* Tablet Styles (768px - 1023px) */
        @media (max-width: 1024px) {
          .page-content {
            padding-top: 80px;
          }

          .hero {
            padding: clamp(40px, 6vw, 70px) clamp(16px, 3vw, 30px);
          }

          .pricing-section {
            padding: 0 clamp(16px, 3vw, 25px) clamp(50px, 6vw, 80px);
          }

          .plans-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: clamp(18px, 2.5vw, 24px);
          }

          .plan-card {
            padding: clamp(20px, 3vw, 30px);
          }

          .offer-banner {
            margin-left: 16px;
            margin-right: 16px;
          }
        }

        /* Mobile Tablet Styles (481px - 767px) */
        @media (max-width: 768px) {
          .page-content {
            padding-top: 70px;
          }

          .hero {
            padding: clamp(36px, 6vw, 50px) 16px;
          }

          .pricing-section {
            padding: 0 16px clamp(40px, 6vw, 60px);
          }

          .plans-grid {
            grid-template-columns: 1fr;
            gap: clamp(16px, 2vw, 20px);
          }

          .plan-card {
            padding: clamp(20px, 3vw, 28px);
            border-radius: 20px;
          }

          .plan-card:hover {
            transform: translateY(-2px);
          }

          .offer-banner {
            margin-left: 16px;
            margin-right: 16px;
            padding: clamp(18px, 3vw, 24px);
            border-radius: 16px;
            margin-bottom: clamp(30px, 5vw, 50px);
          }

          .offer-tag {
            font-size: 11px;
            padding: 5px 12px;
            margin-bottom: 10px;
          }

          .offer-banner h3 {
            font-size: clamp(22px, 4vw, 32px);
            margin-bottom: 6px;
          }

          .offer-banner p {
            font-size: clamp(13px, 1.5vw, 15px);
            margin-top: 10px;
          }

          .feature-item {
            font-size: 14px;
            gap: 8px;
          }

          .join-link {
            margin-top: clamp(18px, 3vw, 24px);
            font-size: clamp(12px, 1.6vw, 14px);
            width: clamp(140px, 32vw, 180px);
            height: clamp(40px, 7vw, 48px);
          }
        }

        /* Mobile Styles (320px - 480px) */
        @media (max-width: 480px) {
          .page-content {
            padding-top: 60px;
          }

          .hero {
            padding: 30px 14px;
            margin: 0 auto;
          }

          .eyebrow {
            font-size: 11px;
            letter-spacing: 1.5px;
            margin-bottom: 10px;
          }

          .hero-title {
            font-size: 28px;
            margin-bottom: 14px;
          }

          .hero-text {
            font-size: 13px;
            line-height: 1.6;
          }

          .pricing-section {
            padding: 0 12px clamp(30px, 4vw, 50px);
          }

          .plans-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .plan-card {
            padding: 18px;
            border-radius: 16px;
            margin-top: 0;
          }

          .plan-card.popular {
            background: rgba(212, 175, 55, 0.08);
          }

          .popular-badge {
            top: -10px;
            font-size: 10px;
            padding: 5px 12px;
          }

          .plan-name {
            font-size: 18px;
            margin-bottom: 14px;
          }

          .plan-price {
            font-size: 32px;
          }

          .plan-duration {
            font-size: 12px;
            margin-top: 4px;
          }

          .monthly-price {
            font-size: 12px;
            margin-top: 6px;
          }

          .price-block {
            margin-bottom: 16px;
          }

          .features {
            padding-top: 16px;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            gap: 10px;
          }

          .feature-item {
            font-size: 13px;
            gap: 8px;
            line-height: 1.4;
          }

          .check {
            font-size: 13px;
            margin-top: 1px;
          }

          .offer-banner {
            margin: 0 12px clamp(24px, 4vw, 40px);
            padding: 16px;
            border-radius: 14px;
          }

          .offer-tag {
            font-size: 10px;
            padding: 4px 10px;
            letter-spacing: 1px;
            margin-bottom: 8px;
          }

          .offer-banner h3 {
            font-size: 20px;
            margin-bottom: 6px;
            font-weight: 600;
          }

          .offer-banner p {
            font-size: 12px;
            margin-top: 8px;
            line-height: 1.5;
          }

          .join-link {
            margin-top: 16px;
            width: clamp(120px, 30vw, 160px);
            height: 40px;
            font-size: 12px;
            letter-spacing: 0px;
            border-radius: 10px;
            border-width: 1.5px;
          }

          .join-link:active {
            transform: translateY(-1px);
          }
        }

        /* Extra Small Mobile (< 320px) */
        @media (max-width: 320px) {
          .hero-title {
            font-size: 24px;
          }

          .plan-name {
            font-size: 16px;
          }

          .plan-price {
            font-size: 28px;
          }

          .feature-item {
            font-size: 12px;
          }

          .join-link {
            width: 100%;
            max-width: 140px;
            font-size: 11px;
          }
        }
      `}</style>
    </main>
  );
}