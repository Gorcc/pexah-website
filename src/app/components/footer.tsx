"use client"
import React from 'react'
import Image from 'next/image'
import { useI18n } from '@/app/i18n'
import { Linkedin, Instagram, Facebook } from 'lucide-react'

const Footer = () => {
  const { t } = useI18n()
  return (
    <footer className="w-full border-t border-gray-800/60 bg-[#131316]">
      <div className="mx-auto w-full max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center">
              <Image src="/images/hazır-02.png" alt="PEXAH footer logo" width={120} height={34} />
            </div>
            <p className="text-sm leading-6 text-gray-300 max-w-md">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-5 text-gray-300">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                title="X"
                className="transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 rounded"
              >
                {/* X logo (inline SVG for crisp rendering) */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3h4.6l5.1 6.9L16.9 3H21l-7.2 9.6L21 21h-4.6l-5.3-7.2L7.1 21H3l7.5-9.8L3 3z" fill="currentColor"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 rounded"
              >
                <Linkedin size={22} strokeWidth={1.75} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 rounded"
              >
                <Instagram size={22} strokeWidth={1.75} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 rounded"
              >
                <Facebook size={22} strokeWidth={1.75} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-200">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#home" onClick={(e)=>{e.preventDefault();document.getElementById('home')?.scrollIntoView({behavior:'smooth'});}} className="hover:text-gray-200 transition-colors">Home</a></li>
              <li><a href="#about" onClick={(e)=>{e.preventDefault();document.getElementById('about')?.scrollIntoView({behavior:'smooth'});}} className="hover:text-gray-200 transition-colors">About</a></li>
              <li><a href="#service" onClick={(e)=>{e.preventDefault();document.getElementById('service')?.scrollIntoView({behavior:'smooth'});}} className="hover:text-gray-200 transition-colors">Services</a></li>
              <li><a href="#why-us" onClick={(e)=>{e.preventDefault();document.getElementById('why-us')?.scrollIntoView({behavior:'smooth'});}} className="hover:text-gray-200 transition-colors">Why us?</a></li>
              <li><a href="#faq" onClick={(e)=>{e.preventDefault();document.getElementById('faq')?.scrollIntoView({behavior:'smooth'});}} className="hover:text-gray-200 transition-colors">FAQ</a></li>
              <li><a href="#contact" onClick={(e)=>{e.preventDefault();document.getElementById('contact')?.scrollIntoView({behavior:'smooth'});}} className="hover:text-gray-200 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-200">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/kyc-policy" className="hover:text-gray-200 transition-colors">KYC & AML Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      <hr />
    </footer>
  )
}

export default Footer


