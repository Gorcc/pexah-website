"use client";

import React, { useEffect, useRef } from "react";
import { Users, Target, Award, Globe, Shield, TrendingUp } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about-us.scss";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  const stats = [
    { number: "2019", label: "Founded" },
    { number: "50+", label: "Team Members" },
    { number: "100+", label: "Countries Served" },
    { number: "$5B+", label: "Volume Traded" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "Bank-grade security with multi-signature wallets and comprehensive insurance coverage for all trades."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Dedicated account managers and 24/7 support ensure every client receives personalized attention."
    },
    {
      icon: TrendingUp,
      title: "Market Leading",
      description: "Competitive rates, deep liquidity, and innovative trading solutions that set industry standards."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Operating across 100+ countries with local expertise and regulatory compliance worldwide."
    },
  ];

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

      // Animate story section
      gsap.fromTo(".story-content", 
        { 
          opacity: 0, 
          y: 40 
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate stats with stagger
      gsap.fromTo(".stat-item", 
        { 
          opacity: 0, 
          y: 30,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate values with stagger
      gsap.fromTo(".value-card", 
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
            trigger: valuesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate team with stagger
      gsap.fromTo(".team-member", 
        { 
          opacity: 0, 
          y: 30,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="about-us">
      <div className="about-us-container">
        <div className="about-header">
          <h2 ref={titleRef} className="about-title">About Pexah</h2>
          <p ref={subtitleRef} className="about-subtitle">
            Leading the future of institutional cryptocurrency trading
          </p>
        </div>

        <div className="about-content">
          <div ref={storyRef} className="about-story">
            <div className="story-text story-content">
              <h3 className="story-title">Our Story</h3>
              <p className="story-description">
                Founded in 2019 by a team of traditional finance and cryptocurrency experts, 
                Pexah was born from the need for professional-grade OTC trading solutions. 
                We recognized that institutional investors and high-volume traders needed a 
                more sophisticated approach to cryptocurrency trading.
              </p>
              <p className="story-description">
                Today, we&apos;re proud to be one of the leading P2P OTC trading platforms, 
                facilitating billions in cryptocurrency transactions while maintaining the 
                highest standards of security, compliance, and customer service.
              </p>
            </div>
            <div ref={statsRef} className="story-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mission-vision">
            <div className="mission">
              <div className="mission-icon">
                <Target className="icon" />
              </div>
              <h3 className="mission-title">Our Mission</h3>
              <p className="mission-text">
                To democratize access to institutional-grade cryptocurrency trading by 
                providing secure, efficient, and transparent OTC trading solutions that 
                bridge traditional finance with the digital asset ecosystem.
              </p>
            </div>

            <div className="vision">
              <div className="vision-icon">
                <Award className="icon" />
              </div>
              <h3 className="vision-title">Our Vision</h3>
              <p className="vision-text">
                To become the global standard for P2P cryptocurrency trading, empowering 
                institutions and professional traders with the tools and services they 
                need to succeed in the digital asset economy.
              </p>
            </div>
          </div>

        <div className="values-section">
          <h3 className="values-title">Our Core Values</h3>
          <div ref={valuesRef} className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                  <div className="value-icon">
                    <value.icon className="icon" />
                  </div>
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div ref={teamRef} className="team-section">
            <h3 className="team-title">Leadership Team</h3>
            <p className="team-description">
              Our leadership team brings together decades of experience from traditional 
              finance, cryptocurrency, and technology sectors. With backgrounds from 
              Goldman Sachs, JP Morgan, Coinbase, and leading fintech companies, we 
              combine institutional expertise with innovative blockchain technology.
            </p>
            <div className="team-highlights">
              <div className="highlight">
                <span className="highlight-number">25+</span>
                <span className="highlight-text">Years Average Experience</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">5</span>
                <span className="highlight-text">Former Wall Street Executives</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">10+</span>
                <span className="highlight-text">Blockchain Specialists</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
