"use client"

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import CryptoPrices from './crypto-prices'
import { useI18n } from '@/app/i18n'
import './hero.scss'

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLButtonElement>(null)
  const cryptoPricesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, descriptionRef.current, ctaRef.current], {
        opacity: 0,
        y: 50
      })
      
      gsap.set(cryptoPricesRef.current, {
        opacity: 0,
        x: 100,
        scale: 0.9
      })

      // Create timeline
      const tl = gsap.timeline({ delay: 0.2 })

      // Animate title
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      })

      // Animate description
      .to(descriptionRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")

      // Animate CTA button
      .to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.4")

      // Animate crypto prices
      .to(cryptoPricesRef.current, {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out"
      }, "-=0.8")

    }, heroRef)

    return () => ctx.revert()
  }, [])

  const { t } = useI18n()

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-content">
            <h1 className="hero-title" ref={titleRef}>
              <span className="title-line">{t.hero.title1} <span className="gradient-text">{t.hero.title2}</span> {t.hero.partner} {t.hero.inWord} <span className="gradient-text">{t.hero.title3}</span> {t.hero.p2p} <span className="gradient-text">{t.hero.title4}</span></span>
            </h1>
            <p className="hero-description" ref={descriptionRef}>
              {t.hero.description}
            </p>
            <button className="hero-cta" ref={ctaRef}>
              {t.hero.cta}
              <span className="arrow">→</span>
            </button>
          </div>
        </div>
        
        <div className="hero-right">
          <div ref={cryptoPricesRef}>
            <CryptoPrices />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero