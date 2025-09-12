import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import { CryptoBentoGrid } from "./components/crypto-bento-grid";
import TradingFeatures from "./components/trading-features";
import { TestimonialsMarquee } from "./components/testimonials-marquee";
import AboutUs from "./components/about-us";
import ContactMap from "./components/contact-map";
import Footer from "./components/footer";
import FAQ from "./components/faq";

const page = () => {
  return (
    <div>
      <Header />
      <section id="home">
        <Hero />
      </section>

      <section id="service">
        <CryptoBentoGrid />
      </section>
      <section id="why-us">
        <TradingFeatures />
      </section>
      <TestimonialsMarquee />
      <section id="about">
        <AboutUs />
      </section>
      <FAQ />
      <section id="contact">
        <ContactMap />
      </section>
      <Footer />
    </div>
  );
};

export default page;
