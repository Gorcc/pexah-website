"use client"

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import CryptoPrices from './crypto-prices'
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

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-content">
            <h1 className="hero-title" ref={titleRef}>
              <span className="title-line">Power your <span className="gradient-text">growth</span></span>
              <span className="title-line">with <span className="gradient-text">seamless</span></span>
              <span className="title-line">digital <span className="gradient-text">asset </span> <span className="gradient-text">liquidity</span></span>
            </h1>
            <p className="hero-description" ref={descriptionRef}>
              One gateway - endless possibilities: maximise treasury efficiency 
              with competitive rates, rapid settlements, and instant issue 
              resolution
            </p>
            <button className="hero-cta" ref={ctaRef}>
              Get started
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