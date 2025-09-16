"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { useI18n } from "@/app/i18n";
import { Marquee } from "@/components/magicui/marquee";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    body: "Fast and reliable P2P trade. Exactly what I needed.",
    img: "https://avatar.vercel.sh/ahmed",
  },
  {
    name: "Fatima Al-Zahra",
    body: "The fastest team in P2P. Smooth from start to finish.",
    img: "https://avatar.vercel.sh/fatima",
  },
  {
    name: "Dmitri Volkov",
    body: "PEXAH is a truly high‑quality organization. Professional and helpful.",
    img: "https://avatar.vercel.sh/dmitri",
  },
  {
    name: "Omar Hassan",
    body: "Very trustworthy since they operate through global exchanges.",
    img: "https://avatar.vercel.sh/omar",
  },
  {
    name: "Aisha Al-Mansouri",
    body: "Clear communication and quick settlement on P2P.",
    img: "https://avatar.vercel.sh/aisha",
  },
  {
    name: "Ivan Petrov",
    body: "Escrow-backed process gave me full peace of mind.",
    img: "https://avatar.vercel.sh/ivan",
  },
  {
    name: "Khalid Al-Najjar",
    body: "Responsive support and seamless P2P experience.",
    img: "https://avatar.vercel.sh/khalid",
  },
  {
    name: "Layla Al-Sabah",
    body: "Reliable P2P trades with transparent steps.",
    img: "https://avatar.vercel.sh/layla",
  },
];

const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);

const TestimonialCard = ({
  img,
  name,
  body,
}: {
  img: string;
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-80 cursor-pointer overflow-hidden rounded-xl border p-6",
        "border-gray-700 bg-gray-800/50 hover:bg-gray-800/80 backdrop-blur-sm",
        "transition-all duration-300 hover:border-sky-400/30 hover:shadow-lg",
        "hover:shadow-sky-400/10"
      )}
    >
      <div className="flex flex-row items-center gap-3 mb-4">
        <Image 
          className="rounded-full border-2 border-sky-400/20" 
          width={40} 
          height={40} 
          alt="" 
          src={img} 
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="text-sm text-gray-300 leading-relaxed">
        &ldquo;{body}&rdquo;
      </blockquote>
    </figure>
  );
};

export function TestimonialsMarquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const { t } = useI18n();

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

      // Animate description
      gsap.fromTo(descriptionRef.current, 
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
            trigger: descriptionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate marquee container
      gsap.fromTo(marqueeRef.current, 
        { 
          opacity: 0, 
          y: 40 
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.4,
          scrollTrigger: {
            trigger: marqueeRef.current,
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="testimonials-marquee-section" style={{ backgroundColor: 'var(--site-bg)' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 
            ref={titleRef}
            className="text-4xl font-bold mb-4 text-gradient-blue"
          >
            {t.testimonials.title}
          </h2>
          <p ref={descriptionRef} className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.testimonials.description}
          </p>
        </div>
        
        <div ref={marqueeRef} className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
          <Marquee pauseOnHover className="[--duration:25s] py-4">
            {firstRow.map((testimonial, index) => (
              <TestimonialCard key={`first-${index}`} {...testimonial} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:25s] py-4">
            {secondRow.map((testimonial, index) => (
              <TestimonialCard key={`second-${index}`} {...testimonial} />
            ))}
          </Marquee>
          <div 
            className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"
            style={{ background: 'linear-gradient(to right, var(--site-bg), transparent)' }}
          ></div>
          <div 
            className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"
            style={{ background: 'linear-gradient(to left, var(--site-bg), transparent)' }}
          ></div>
        </div>

        {/* <div ref={statsRef} className="text-center mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="stat-item text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">$2.5B+</div>
              <div className="text-gray-400 text-sm">Total Volume Traded</div>
            </div>
            <div className="stat-item text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">15,000+</div>
              <div className="text-gray-400 text-sm">Successful Trades</div>
            </div>
            <div className="stat-item text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">99.8%</div>
              <div className="text-gray-400 text-sm">Client Satisfaction</div>
            </div>
            <div className="stat-item text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Support Available</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
