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

        /* Mobile First - Base Styles (320px+) */
        .membership-page {
          background: #000;
          min-height: 100vh;
          color: #fff;
          overflow-x: hidden;
        }

        .page-content {
          padding-top: 60px;
        }

        .hero {
          text-align: center;
          padding: 30px 16px 40px;
          max-width: 100%;
          margin: 0 auto;
        }

        .eyebrow {
          display: block;
          color: #d4af37;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-size: 10px;
          margin-bottom: 12px;
          line-height: 1.4;
          font-weight: 700;
        }

        .hero-title {
          color: #fff;
          font-size: 28px;
          font-weight: 700;
          line-height: 1.2;
          margin: 0 0 16px;
          word-break: break-word;
        }

        .hero-text {
          color: #bdbdbd;
          font-size: 13px;
          line-height: 1.6;
          max-width: 100%;
          margin: 0 auto;
        }

        /* Offer Banner */
        .offer-banner {
          max-width: 100%;
          margin: 0 auto 32px;
          padding: 18px 14px;
          text-align: center;
          background: #111;
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 14px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          margin-left: 16px;
          margin-right: 16px;
        }

        .offer-tag {
          display: inline-block;
          margin-bottom: 10px;
          padding: 5px 12px;
          background: #d4af37;
          color: #000;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.2px;
          border-radius: 999px;
        }

        .offer-banner h3 {
          margin: 0 0 8px;
          color: #fff;
          font-size: 18px;
          font-weight: 700;
          line-height: 1.3;
          word-break: break-word;
        }

        .offer-banner h3 span {
          color: #d4af37;
          display: block;
          font-size: 20px;
        }

        .offer-banner p {
          margin-top: 8px;
          color: #bdbdbd;
          font-size: 12px;
          line-height: 1.5;
        }

        /* Pricing Section */
        .pricing-section {
          max-width: 100%;
          margin: 0 auto;
          padding: 0 16px 50px;
        }

        .plans-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          align-items: stretch;
        }

        .plan-card {
          background: #111;
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 16px;
          padding: 20px 16px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: auto;
          align-items: center;
          transition: all 0.25s ease;
          overflow: visible;
        }

        .plan-card:active {
          transform: translateY(-2px);
          border-color: rgba(212, 175, 55, 0.5);
        }

        .plan-card.popular {
          border: 2px solid #d4af37;
          background: rgba(212, 175, 55, 0.08);
        }

        .popular-badge {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          background: #d4af37;
          color: #000;
          padding: 5px 14px;
          border-radius: 999px;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.5px;
          white-space: nowrap;
          z-index: 1;
        }

        .plan-top {
          display: flex;
          flex-direction: column;
          width: 100%;
          margin-bottom: 18px;
        }

        .plan-name {
          color: #d4af37;
          font-size: 18px;
          margin: 0 0 14px;
          text-align: center;
          line-height: 1.3;
          word-break: break-word;
          font-weight: 600;
        }

        .price-block {
          text-align: center;
          margin-bottom: 18px;
        }

        .plan-price {
          color: #fff;
          font-size: 32px;
          font-weight: 700;
          line-height: 1;
          word-break: break-word;
          margin-bottom: 4px;
        }

        .plan-duration {
          color: #999;
          margin-bottom: 6px;
          font-size: 12px;
          font-weight: 500;
        }

        .monthly-price {
          color: #d4af37;
          font-weight: 600;
          font-size: 12px;
        }

        .features {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 16px;
          display: grid;
          gap: 10px;
          width: 100%;
        }

        .feature-item {
          color: #e0e0e0;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 12px;
          line-height: 1.4;
        }

        .check {
          color: #d4af37;
          font-weight: 700;
          flex: 0 0 auto;
          font-size: 12px;
          margin-top: 0px;
        }

        .join-link {
          margin: 0 auto;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 200px;
          height: 45px;
          background: #d4af37;
          color: #000;
          border: 2px solid #d4af37;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(212, 175, 55, 0.2);
          transition: all 0.3s ease;
          cursor: pointer;
          white-space: nowrap;
        }

        .join-link:active {
          transform: scale(0.97);
          box-shadow: 0 2px 6px rgba(212, 175, 55, 0.15);
        }

        /* Tablet Styles (481px - 768px) */
        @media (min-width: 481px) and (max-width: 768px) {
          .page-content {
            padding-top: 70px;
          }

          .hero {
            padding: 40px 24px 50px;
          }

          .eyebrow {
            font-size: 11px;
            letter-spacing: 2.5px;
            margin-bottom: 14px;
          }

          .hero-title {
            font-size: 32px;
            margin-bottom: 18px;
          }

          .hero-text {
            font-size: 14px;
            line-height: 1.7;
          }

          .pricing-section {
            padding: 0 24px 60px;
          }

          .plans-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 18px;
          }

          .plan-card {
            padding: 24px 18px;
          }

          .offer-banner {
            margin-left: 24px;
            margin-right: 24px;
            padding: 20px 20px;
            margin-bottom: 40px;
          }

          .offer-tag {
            font-size: 10px;
            padding: 6px 14px;
            margin-bottom: 12px;
          }

          .offer-banner h3 {
            font-size: 22px;
          }

          .offer-banner h3 span {
            display: inline;
            font-size: 22px;
          }

          .offer-banner p {
            font-size: 13px;
            margin-top: 10px;
          }

          .plan-name {
            font-size: 20px;
            margin-bottom: 16px;
          }

          .plan-price {
            font-size: 36px;
          }

          .join-link {
            height: 46px;
            font-size: 12px;
          }

          .feature-item {
            font-size: 13px;
          }
        }

        /* Desktop Styles (769px - 1023px) */
        @media (min-width: 769px) and (max-width: 1023px) {
          .page-content {
            padding-top: 80px;
          }

          .hero {
            padding: 50px 32px 60px;
            max-width: 900px;
          }

          .eyebrow {
            font-size: 12px;
            letter-spacing: 3px;
            margin-bottom: 16px;
          }

          .hero-title {
            font-size: 40px;
            margin-bottom: 20px;
          }

          .hero-text {
            font-size: 15px;
            line-height: 1.8;
          }

          .pricing-section {
            padding: 0 30px 80px;
            max-width: 1200px;
            margin: 0 auto;
          }

          .plans-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }

          .plan-card {
            padding: 28px 24px;
            border-radius: 20px;
          }

          .plan-card:hover {
            transform: translateY(-4px);
            border-color: rgba(212, 175, 55, 0.6);
            box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
          }

          .offer-banner {
            max-width: 900px;
            margin: 0 auto 50px;
            padding: 24px 28px;
            margin-left: auto;
            margin-right: auto;
            border-radius: 18px;
          }

          .offer-tag {
            font-size: 11px;
            padding: 6px 16px;
            margin-bottom: 14px;
          }

          .offer-banner h3 {
            font-size: 28px;
          }

          .offer-banner h3 span {
            display: inline;
            font-size: 28px;
          }

          .offer-banner p {
            font-size: 14px;
            margin-top: 12px;
          }

          .plan-name {
            font-size: 22px;
            margin-bottom: 18px;
          }

          .plan-price {
            font-size: 40px;
          }

          .plan-duration {
            font-size: 13px;
          }

          .monthly-price {
            font-size: 13px;
          }

          .join-link {
            height: 48px;
            font-size: 13px;
            max-width: none;
            width: auto;
            padding: 0 40px;
          }

          .feature-item {
            font-size: 14px;
          }
        }

        /* Large Desktop (1024px+) */
        @media (min-width: 1024px) {
          .page-content {
            padding-top: 90px;
          }

          .hero {
            padding: 60px 40px 80px;
            max-width: 920px;
          }

          .eyebrow {
            font-size: 13px;
            letter-spacing: 3px;
            margin-bottom: 18px;
          }

          .hero-title {
            font-size: 48px;
            margin-bottom: 22px;
          }

          .hero-text {
            font-size: 16px;
            line-height: 1.8;
          }

          .pricing-section {
            padding: 0 40px 100px;
            max-width: 1320px;
            margin: 0 auto;
          }

          .plans-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 28px;
            align-items: stretch;
          }

          .plan-card {
            padding: 32px 28px;
            border-radius: 24px;
            min-height: 100%;
          }

          .plan-card:hover {
            transform: translateY(-6px);
            border-color: rgba(212, 175, 55, 0.6);
            box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
          }

          .offer-banner {
            max-width: 900px;
            margin: 0 auto 60px;
            padding: 28px 32px;
            margin-left: auto;
            margin-right: auto;
            border-radius: 18px;
          }

          .offer-tag {
            font-size: 12px;
            padding: 6px 18px;
            margin-bottom: 16px;
          }

          .offer-banner h3 {
            font-size: 36px;
          }

          .offer-banner h3 span {
            display: inline;
            font-size: 36px;
          }

          .offer-banner p {
            font-size: 15px;
            margin-top: 14px;
          }

          .plan-name {
            font-size: 24px;
            margin-bottom: 20px;
          }

          .plan-price {
            font-size: 46px;
          }

          .plan-duration {
            font-size: 14px;
          }

          .monthly-price {
            font-size: 14px;
          }

          .join-link {
            height: 50px;
            font-size: 14px;
            max-width: none;
            width: auto;
            padding: 0 44px;
            margin-top: 28px;
          }

          .join-link:hover {
            background: #fff;
            color: #000;
            box-shadow: 0 12px 30px rgba(212, 175, 55, 0.3);
            transform: translateY(-3px);
          }

          .feature-item {
            font-size: 14px;
          }
        }

        /* Extra Small Mobile (< 320px) */
        @media (max-width: 320px) {
          .hero {
            padding: 24px 12px 32px;
          }

          .hero-title {
            font-size: 24px;
            margin-bottom: 12px;
          }

          .hero-text {
            font-size: 12px;
          }

          .offer-banner {
            margin-left: 12px;
            margin-right: 12px;
            padding: 14px 12px;
          }

          .offer-banner h3 {
            font-size: 16px;
          }

          .pricing-section {
            padding: 0 12px 40px;
          }

          .plan-card {
            padding: 16px 14px;
          }

          .plan-name {
            font-size: 16px;
          }

          .plan-price {
            font-size: 28px;
          }

          .feature-item {
            font-size: 11px;
          }

          .join-link {
            height: 42px;
            font-size: 11px;
          }
        }
      `}</style>
    </main>
  );
}