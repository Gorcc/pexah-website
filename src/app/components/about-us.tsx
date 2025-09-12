"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Users, Target, Award, Shield, Clock, Eye } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about-us.scss";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  // Removed stats panel; using media on the right side instead
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  // Stats removed per design update

  const values = [
    {
      icon: Shield,
      title: "Reliability",
      description: "All transactions are transparent, clear, and recorded."
    },
    {
      icon: Clock,
      title: "Speed",
      description: "Users can finalize their transactions within minutes."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Fees and rates are clearly shared before the transaction."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "We provide solutions tailored to each individual's needs."
    },
    {
      icon: Award,
      title: "Professionalism",
      description: "Our experienced team aims to deliver the best service."
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

      // Stats animation removed

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
          <h2 ref={titleRef} className="about-title">About Us</h2>
          <p ref={subtitleRef} className="about-subtitle">
            PEXAH is a Ras Al Khaimah–based crypto P2P transaction provider.
          </p>
        </div>

        <div className="about-content">
          <div ref={storyRef} className="about-story">
            <div className="story-text story-content">
              <h3 className="story-title">About Us</h3>
              <p className="story-description">
                PEXAH is a crypto P2P transaction provider based in Ras Al Khaimah. Our primary goal is to enable individuals to buy and sell cryptocurrency through global exchanges in a secure, fast, and transparent way.
              </p>
              <p className="story-description">
                As the crypto world grows, the greatest need has been trust. At PEXAH, we meet this need — offering our clients not only a trading platform but also a business partner they can rely on.
              </p>
            </div>
            <div className="story-media">
              <div style={{ width: '100%', height: 0, paddingBottom: '100%', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
                <Image 
                  src="https://videos.cults3d.com/e5n2i_-nni3JBm9LQJ3pLmrboGw=/516x516/filters:no_upscale()/https://fbi.cults3d.com/uploaders/34450180/illustration-file/77cdcc74-8662-48c5-b1dd-7e48b372b4a8/bitcoin-video720px0001-0250-ezgif.com-optimize.gif" 
                  alt="Bitcoin P2P trading animation" 
                  fill 
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>
          </div>

          <div className="mission-vision">
            <div className="mission">
              <div className="mission-icon">
                <Target className="icon" />
              </div>
              <h3 className="mission-title">Our Mission</h3>
              <p className="mission-text">
                To be a bridge where individuals can trade with confidence in P2P trading — one of the strongest areas of digital finance.
              </p>
            </div>

            <div className="vision">
              <div className="vision-icon">
                <Award className="icon" />
              </div>
              <h3 className="vision-title">Our Vision</h3>
              <p className="vision-text">
                To become the regional leader and a trusted global brand in crypto P2P transactions.
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

  
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
