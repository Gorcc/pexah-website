"use client";

import React, { useEffect, useRef } from "react";
import { Percent, Building2, Zap, Shield } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./trading-features.scss";

gsap.registerPlugin(ScrollTrigger);

const TradingFeatures = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(titleRef.current, 
        { 
          opacity: 0, 
          y: 30 
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate subtitle
      gsap.fromTo(subtitleRef.current, 
        { 
          opacity: 0, 
          y: 20 
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate feature cards with stagger
      gsap.fromTo(".feature-card", 
        { 
          opacity: 0, 
          y: 40,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="trading-features">
      <div className="trading-features-container">
        <div className="features-header">
          <h2 ref={titleRef} className="features-title">
            Our P2P Trading Features
          </h2>
          <p ref={subtitleRef} className="features-subtitle">
            Discover the key features that make PEXAH the trusted choice for secure P2P cryptocurrency trading
          </p>
        </div>

        <div ref={gridRef} className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Shield className="feature-icon-svg" />
            </div>
            <h3 className="feature-title">Escrow‑Protected Security</h3>
            <p className="feature-description">
              Trades are protected by the exchanges&apos; official escrow and verified with KYC for maximum safety.
            </p>
            <div className="feature-benefits">
              <div className="benefit">✓ Exchange escrow protection</div>
              <div className="benefit">✓ KYC compliance</div>
              <div className="benefit">✓ Fraud prevention</div>
              <div className="benefit">✓ Clear dispute resolution</div>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Zap className="feature-icon-svg" />
            </div>
            <h3 className="feature-title">Fast Settlement</h3>
            <p className="feature-description">
              After you complete payment, P2P trades are typically finalized within minutes.
            </p>
            <div className="feature-benefits">
              <div className="benefit">✓ Settlement in minutes</div>
              <div className="benefit">✓ 24/7 availability</div>
              <div className="benefit">✓ Clear step‑by‑step flow</div>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Percent className="feature-icon-svg" />
            </div>
            <h3 className="feature-title">Transparent Pricing</h3>
            <p className="feature-description">
              Fees and rates are shared upfront before every trade — no surprises, no hidden costs.
            </p>
            <div className="feature-benefits">
              <div className="benefit">✓ Fixed quote before trade</div>
              <div className="benefit">✓ No hidden fees</div>
              <div className="benefit">✓ Market‑aligned pricing</div>
              <div className="benefit">✓ Clear proof of payment</div>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Building2 className="feature-icon-svg" />
            </div>
            <h3 className="feature-title">For All Users</h3>
            <p className="feature-description">
              Official merchant on global exchanges with dedicated support for all P2P trading needs.
            </p>
            <div className="feature-benefits">
              <div className="benefit">✓ Official merchant status</div>
              <div className="benefit">✓ Dedicated support</div>
              <div className="benefit">✓ Multi‑exchange coverage</div>
              <div className="benefit">✓ Clear, step‑by‑step process</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingFeatures;
