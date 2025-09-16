"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Users, Target, Award, Shield, Clock, Eye } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about-us.scss";
import { useI18n } from "@/app/i18n";

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

  // Values content now provided by i18n; icons are selected by index below

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

  const { t } = useI18n();
  const valueIcons = [Shield, Clock, Eye, Users, Award];

  return (
    <section ref={sectionRef} className="about-us">
      <div className="about-us-container">
        <div className="about-header">
          <h2 ref={titleRef} className="about-title">{t.about.title}</h2>
          <p ref={subtitleRef} className="about-subtitle">
            {t.about.subtitle}
          </p>
        </div>

        <div className="about-content">
          <div ref={storyRef} className="about-story">
            <div className="story-text story-content">
              <h3 className="story-title">{t.about.storyTitle}</h3>
              <p className="story-description">{t.about.storyP1}</p>
              <p className="story-description">{t.about.storyP2}</p>
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
              <h3 className="mission-title">{t.about.missionTitle}</h3>
              <p className="mission-text">{t.about.missionText}</p>
            </div>

            <div className="vision">
              <div className="vision-icon">
                <Award className="icon" />
              </div>
              <h3 className="vision-title">{t.about.visionTitle}</h3>
              <p className="vision-text">{t.about.visionText}</p>
            </div>
          </div>

        <div className="values-section">
          <h3 className="values-title">{t.about.valuesTitle}</h3>
          <div ref={valuesRef} className="values-grid">
            {t.about.values.map((value, index) => (
              <div key={index} className="value-card">
                  <div className="value-icon">
                    {(() => { const Icon = valueIcons[index] || Shield; return <Icon className="icon" />; })()}
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
