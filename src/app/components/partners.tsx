"use client"

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './partners.scss'

gsap.registerPlugin(ScrollTrigger)

const Partners = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

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
      )

      // Animate partner logos with stagger
      gsap.fromTo(".partner-item", 
        { 
          opacity: 0, 
          y: 40,
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
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="partners">
      <div className="partners-container">
        <h2 ref={titleRef} className="partners-title">PARTNERS</h2>
        
        <div ref={gridRef} className="partners-grid">
          <div className="partner-item">
            <Image src="/images/bcb-group.png" alt="BCB Group" width={120} height={60} className="partner-logo" />
          </div>
          <div className="partner-item">
            <Image src="/images/bcb-group.png" alt="BCB Group" width={120} height={60} className="partner-logo" />
          </div>
          <div className="partner-item">
            <Image src="/images/bcb-group.png" alt="BCB Group" width={120} height={60} className="partner-logo" />
          </div>
          <div className="partner-item">
            <Image src="/images/bcb-group.png" alt="BCB Group" width={120} height={60} className="partner-logo" />
          </div>
          <div className="partner-item">
            <Image src="/images/bcb-group.png" alt="BCB Group" width={120} height={60} className="partner-logo" />
          </div>
          <div className="partner-item">
            <Image src="/images/bcb-group.png" alt="BCB Group" width={120} height={60} className="partner-logo" />
          </div>
          <div className="partner-item">
            <Image src="/images/bcb-group.png" alt="BCB Group" width={120} height={60} className="partner-logo" />
          </div>
          <div className="partner-item">
            <Image src="/images/bcb-group.png" alt="BCB Group" width={120} height={60} className="partner-logo" />
          </div>
          <div className="partner-item">
            <Image src="/images/bcb-group.png" alt="BCB Group" width={120} height={60} className="partner-logo" />
          </div>
          <div className="partner-item">
            <Image src="/images/bcb-group.png" alt="BCB Group" width={120} height={60} className="partner-logo" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
