import React from 'react'
import Header from './components/header'
import Hero from './components/hero'
import Partners from './components/partners'
import { CryptoBentoGrid } from './components/crypto-bento-grid'
import TradingFeatures from './components/trading-features'
import { TestimonialsMarquee } from './components/testimonials-marquee'
import AboutUs from './components/about-us'
import ContactMap from './components/contact-map'

const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Partners />
      <CryptoBentoGrid />
      <TradingFeatures />
      <TestimonialsMarquee />
      <AboutUs />
      <ContactMap />
    </div>
  )
}

export default page