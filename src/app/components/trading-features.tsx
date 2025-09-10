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
            Low Commission Rates & B2B Trading
          </h2>
          <p ref={subtitleRef} className="features-subtitle">
            Maximize your profits with industry-leading rates and institutional-grade trading solutions
          </p>
        </div>

        <div ref={gridRef} className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Percent className="feature-icon-svg" />
            </div>
            <h3 className="feature-title">Ultra-Low Fees</h3>
            <p className="feature-description">
              Starting from just 0.1% commission rates for high-volume traders. 
              The more you trade, the less you pay.
            </p>
            <div className="feature-stats">
              <div className="stat">
                <span className="stat-number">0.1%</span>
                <span className="stat-label">Starting Rate</span>
              </div>
              <div className="stat">
                <span className="stat-number">50%</span>
                <span className="stat-label">Savings vs Competitors</span>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Building2 className="feature-icon-svg" />
            </div>
            <h3 className="feature-title">B2B Trading Solutions</h3>
            <p className="feature-description">
              Tailored trading infrastructure for businesses, institutions, 
              and professional traders with dedicated support.
            </p>
            <div className="feature-benefits">
              <div className="benefit">✓ Dedicated Account Manager</div>
              <div className="benefit">✓ Custom API Integration</div>
              <div className="benefit">✓ White-label Solutions</div>
              <div className="benefit">✓ 24/7 Priority Support</div>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Zap className="feature-icon-svg" />
            </div>
            <h3 className="feature-title">Lightning Fast Execution</h3>
            <p className="feature-description">
              Execute trades in milliseconds with our advanced matching engine 
              and global liquidity network.
            </p>
            <div className="feature-stats">
              <div className="stat">
                <span className="stat-number">&lt;10ms</span>
                <span className="stat-label">Execution Time</span>
              </div>
              <div className="stat">
                <span className="stat-number">99.9%</span>
                <span className="stat-label">Uptime</span>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Shield className="feature-icon-svg" />
            </div>
            <h3 className="feature-title">Enterprise Security</h3>
            <p className="feature-description">
              Bank-grade security with multi-signature wallets, cold storage, 
              and comprehensive insurance coverage.
            </p>
            <div className="feature-benefits">
              <div className="benefit">✓ Multi-Signature Wallets</div>
              <div className="benefit">✓ Cold Storage Protection</div>
              <div className="benefit">✓ Insurance Coverage</div>
              <div className="benefit">✓ Regular Security Audits</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingFeatures;
