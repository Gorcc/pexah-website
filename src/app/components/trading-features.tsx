"use client";

import React, { useEffect, useRef } from "react";
import { Percent, Building2, Zap, Shield } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./trading-features.scss";
import { useI18n } from "@/app/i18n";

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

  const { t, locale } = useI18n();

  return (
    <section ref={sectionRef} className="trading-features" key={locale}>
      <div className="trading-features-container">
        <div className="features-header">
          <h2 ref={titleRef} className="features-title">
            {t.trading.title}
          </h2>
          <p ref={subtitleRef} className="features-subtitle">
            {t.trading.subtitle}
          </p>
        </div>

        <div ref={gridRef} className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Shield className="feature-icon-svg" />
            </div>
            <h3 className="feature-title">{t.trading.features.security.title}</h3>
            <p className="feature-description">
              {t.trading.features.security.description}
            </p>
            <div className="feature-benefits">
              {t.trading.features.security.bullets.map((b, i) => (
                <div className="benefit" key={i}>✓ {b}</div>
              ))}
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Zap className="feature-icon-svg" />
            </div>
            <h3 className="feature-title">{t.trading.features.speed.title}</h3>
            <p className="feature-description">
              {t.trading.features.speed.description}
            </p>
            <div className="feature-benefits">
              {t.trading.features.speed.bullets.map((b, i) => (
                <div className="benefit" key={i}>✓ {b}</div>
              ))}
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Percent className="feature-icon-svg" />
            </div>
            <h3 className="feature-title">{t.trading.features.pricing.title}</h3>
            <p className="feature-description">
              {t.trading.features.pricing.description}
            </p>
            <div className="feature-benefits">
              {t.trading.features.pricing.bullets.map((b, i) => (
                <div className="benefit" key={i}>✓ {b}</div>
              ))}
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Building2 className="feature-icon-svg" />
            </div>
            <h3 className="feature-title">{t.trading.features.general.title}</h3>
            <p className="feature-description">
              {t.trading.features.general.description}
            </p>
            <div className="feature-benefits">
              {t.trading.features.general.bullets.map((b, i) => (
                <div className="benefit" key={i}>✓ {b}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingFeatures;
