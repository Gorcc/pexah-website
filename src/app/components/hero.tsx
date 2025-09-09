"use client"

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './hero.scss'

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLButtonElement>(null)
  const tradingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, descriptionRef.current, ctaRef.current], {
        opacity: 0,
        y: 50
      })
      
      gsap.set(tradingRef.current, {
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

      // Animate trading interface
      .to(tradingRef.current, {
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
              Power your <span className="highlight">growth</span><br />
              with seamless<br />
              digital asset <span className="highlight">liquidity</span>
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
          <div className="trading-interface" ref={tradingRef}>
            <div className="interface-header">
              <div className="interface-logo">
                <span className="logo-icon">⟨⟩</span>
                <span className="interface-title">Spot trading</span>
              </div>
            </div>
            
            <div className="trading-form">
              <div className="form-section">
                <label>You give</label>
                <div className="input-group">
                  <span className="amount">1</span>
                  <div className="currency">
                    <span className="currency-icon">₿</span>
                    <span>BTC</span>
                  </div>
                </div>
                <div className="amount-usd">≈ $111,647</div>
              </div>
              
              <div className="form-section">
                <label>You get</label>
                <div className="input-group">
                  <span className="amount">110,977.19</span>
                  <div className="currency">
                    <span className="currency-icon">$</span>
                    <span>USD</span>
                  </div>
                </div>
                <div className="amount-usd">≈ $110,977.19</div>
              </div>
              
              <div className="price-info">
                <span>Price</span>
                <span>1 BTC ≈ 110,977.19 USD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero