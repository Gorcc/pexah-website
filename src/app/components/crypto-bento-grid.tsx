"use client"

import { useEffect, useRef } from "react";
import { TrendingUpIcon, InfinityIcon } from "lucide-react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { useI18n } from "@/app/i18n";

gsap.registerPlugin(ScrollTrigger);


const features = [
  {
    nameKey: "trusted",
    descriptionKey: "trustedDesc",
    href: "#",
    ctaKey: "learn",
    className: "col-span-3 lg:col-span-2 row-span-3",
    background: (
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <Image 
          src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=600&fit=crop&crop=center&q=80&auto=format&fm=jpg"
          alt="Cryptocurrency trading"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent" />
        <div className="absolute top-4 left-4 z-10">
          <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
            <TrendingUpIcon className="w-7 h-7 text-white" />
          </div>
        </div>
      </div>
    ),
  },
  {
    nameKey: "fast",
    descriptionKey: "fastDesc",
    href: "#",
    ctaKey: "learn",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <Image 
          src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1000&h=600&fit=crop&crop=center&q=80&auto=format&fm=jpg"
          alt="24/7 Trading"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent" />
        <div className="absolute top-4 right-4 z-10">
          <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
            <div className="w-7 h-7 border-2 border-white rounded-sm"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    nameKey: "transparent",
    descriptionKey: "transparentDesc",
    href: "#",
    ctaKey: "learn",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <Image 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&h=600&fit=crop&crop=center&q=80&auto=format&fm=jpg"
          alt="Capital Efficiency"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent" />
        <div className="absolute top-4 right-4 z-10">
          <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
            <InfinityIcon className="w-7 h-7 text-white" />
          </div>
        </div>
      </div>
    ),
  },
  {
    nameKey: "merchant",
    descriptionKey: "merchantDesc",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    ctaKey: "learn",
    background: (
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <Image 
          src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1000&h=600&fit=crop&crop=center&q=80&auto=format&fm=jpg"
          alt="Compliance and Security"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent" />
        <div className="absolute top-4 right-4 z-10">
          <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
            <div className="text-white font-bold text-sm">VQF</div>
          </div>
        </div>
      </div>
    ),
  },
];

export function CryptoBentoGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const { t } = useI18n();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(titleRef.current, 
        { 
          opacity: 0, 
          y: 50 
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate grid cards with stagger
      gsap.fromTo(".bento-card", 
        { 
          opacity: 0, 
          y: 60,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full py-14" style={{ backgroundColor: 'var(--site-bg)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 text-center">
          <h2 
            ref={titleRef}
            className="text-4xl font-bold mb-4 text-gradient-blue"
          >
            {t.bento.title}
          </h2>
        </div>
        <div ref={gridRef}>
          <BentoGrid>
            {features.map((feature, idx) => (
              <BentoCard 
                key={idx}
                name={t.bentoCards ? (t.bentoCards[feature.nameKey] as string) : feature.nameKey}
                description={t.bentoCards ? (t.bentoCards[feature.descriptionKey] as string) : ""}
                href={feature.href}
                background={feature.background}
                className={cn(
                  "bento-card bg-gray-800 border-gray-700",
                  "dark:bg-gray-800 dark:border-gray-700",
                  feature.className
                )}
                cta={t.bentoCards ? (t.bentoCards[feature.ctaKey] as string) : ""}
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </div>
  );
}
