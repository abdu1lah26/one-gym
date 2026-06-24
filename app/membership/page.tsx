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
          padding: clamp(48px, 8vw, 90px) 16px;
          max-width: 920px;
          margin: 0 auto;
        }

        .eyebrow {
          color: #d4af37;
          letter-spacing: 3px;
          text-transform: uppercase;
          font-size: clamp(12px, 1.4vw, 14px);
          margin-bottom: 14px;
          line-height: 1.4;
        }

        .hero-title {
          color: #fff;
          font-size: clamp(34px, 6vw, 72px);
          font-weight: 700;
          line-height: 1.05;
          margin: 0 0 18px;
          word-break: break-word;
        }

        .hero-text {
          color: #bdbdbd;
          font-size: clamp(15px, 2vw, 18px);
          line-height: 1.8;
          max-width: 720px;
          margin: 0 auto;
        }

        .pricing-section {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 clamp(16px, 3vw, 30px) clamp(60px, 8vw, 100px);
        }

        .plans-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: clamp(18px, 2.5vw, 30px);
          align-items: stretch;
        }

        .plan-card {
          background: #111;
          border: 1px solid rgba(212, 175, 55, 0.35);
          border-radius: 24px;
          padding: clamp(22px, 3vw, 35px);
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 100%;
          align-items: center;
          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease;
          overflow: visible;
        }

        .plan-card:hover {
          transform: translateY(-4px);
          border-color: rgba(212, 175, 55, 0.6);
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.35);
        }

        .plan-card.popular {
          border: 2px solid #d4af37;
        }

        .popular-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: #d4af37;
          color: #000;
          padding: 6px 18px;
          border-radius: 999px;
          font-size: 12px;
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
          font-size: clamp(22px, 2.3vw, 26px);
          margin: 0 0 18px;
          text-align: center;
          line-height: 1.2;
          word-break: break-word;
        }

        .price-block {
          text-align: center;
          margin-bottom: 22px;
        }

        .plan-price {
          color: #fff;
          font-size: clamp(38px, 5vw, 48px);
          font-weight: 700;
          line-height: 1;
          word-break: break-word;
        }

        .plan-duration {
          color: #999;
          margin-top: 8px;
          font-size: 15px;
        }

        .monthly-price {
          color: #d4af37;
          margin-top: 10px;
          font-weight: 600;
          font-size: 15px;
        }

        .features {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 22px;
          display: grid;
          gap: 14px;
        }

        .feature-item {
          color: #e0e0e0;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 15px;
          line-height: 1.5;
        }

        .check {
          color: #d4af37;
          font-weight: 700;
          flex: 0 0 auto;
          margin-top: 1px;
        }

        .join-link {
  margin: 28px auto 0;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 180px;
  height: 52px;

  background: #111;
  color: #d4af37;

  border: 2px solid #d4af37;
  border-radius: 12px;

  font-size: 15px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;

  box-shadow:
    0 0 0 1px rgba(212, 175, 55, 0.3),
    0 0 20px rgba(212, 175, 55, 0.15);

  transition: all 0.3s ease;
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

        @media (max-width: 768px) {
          .page-content {
            padding-top: 78px;
          }

          .hero {
            padding-left: 14px;
            padding-right: 14px;
          }

          .pricing-section {
            padding-left: 14px;
            padding-right: 14px;
          }

          .plans-grid {
            grid-template-columns: 1fr;
          }

          .plan-card {
            border-radius: 20px;
          }
        }

        @media (max-width: 480px) {
          .eyebrow {
            letter-spacing: 2px;
          }

          .hero-text {
            line-height: 1.7;
          }

          .plan-card {
            padding: 20px;
          }

          .feature-item {
            font-size: 14px;
          }
        }
      `}</style>
    </main>
  );
}
