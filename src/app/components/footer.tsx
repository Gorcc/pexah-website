"use client"
import React from 'react'
import Image from 'next/image'
import { useI18n } from '@/app/i18n'
import { Twitter, Linkedin, Github, Mail, Instagram, Facebook } from 'lucide-react'

const Footer = () => {
  const { t } = useI18n()
  return (
    <footer className="w-full border-t border-gray-800/60 bg-[#131316]">
      <div className="mx-auto w-full max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center">
              <Image src="/images/hazır-02.png" alt="PEXAH footer logo" width={120} height={34} />
            </div>
            <p className="text-sm text-gray-400">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-3 text-gray-400">
              <a href="#" aria-label="Twitter" className="hover:text-gray-200 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-200 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-gray-200 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-gray-200 transition-colors">
                <Facebook size={18} />
              </a>
          
              <a href="mailto:hello@example.com" aria-label="Email" className="hover:text-gray-200 transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-200">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-gray-200 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Products column removed per request */}

          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-200">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-gray-200 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors">Status</a></li>
              <li><a href="/kyc-policy" className="hover:text-gray-200 transition-colors">KYC & AML Policy</a></li>
              <li className="flex items-center gap-3">
                <a href="#" className="hover:text-gray-200 transition-colors">Terms</a>
                <span className="text-gray-600">•</span>
                <a href="#" className="hover:text-gray-200 transition-colors">Privacy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="border-t border-gray-800/60">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-6">
          
          <div className="text-xs text-gray-400">
            {t.footer.developedBy} <span className="text-gray-200">Almego Studio</span>
          </div>
        </div>
      </div> */}
    </footer>
  )
}

export default Footer


