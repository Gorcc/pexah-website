"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import "./header.scss"
import { useI18n } from "@/app/i18n"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const { locale, setLocale, t } = useI18n()
  const [selectedLanguage, setSelectedLanguage] = useState(locale)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    // Close mobile menu if open
    setIsMobileMenuOpen(false)
  }

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇦🇪' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' }
  ] as const

  const currentLanguage = languages.find(lang => lang.code === selectedLanguage) || languages[0]

  return (
    <div className='header-container'>
        <div className="header-left">
          {/* Desktop logo */}
          <Image
            src="/images/pexah-logo.png"
            alt="PEXAH logo"
            width={200}
            height={60}
            priority
            className="desktop-logo"
          />
          {/* Mobile logo */}
          <Image
            src="/images/hazır-02.png"
            alt="PEXAH logo"
            width={70}
            height={70}
            priority
            className="mobile-logo"
          />
        </div>
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className={`header-right ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <button onClick={() => scrollToSection('home')} className='header-right-item'>{t.header.home}</button>
            <button onClick={() => scrollToSection('about')} className='header-right-item'>{t.header.about}</button>
            <button onClick={() => scrollToSection('service')} className='header-right-item'>{t.header.service}</button>
            <button onClick={() => scrollToSection('why-us')} className='header-right-item'>{t.header.whyUs}</button>
            <button onClick={() => scrollToSection('faq')} className='header-right-item'>{t.header.faq}</button>
            <button onClick={() => scrollToSection('contact')} className='header-right-item'>{t.header.contact}</button>
            
            <div className="language-selector">
              <button className="language-button" onClick={toggleLanguageMenu}>
                <span className="flag">{currentLanguage.flag}</span>
                <span className="language-name">{currentLanguage.name}</span>
                <ChevronDown size={16} className={`chevron ${isLanguageMenuOpen ? 'open' : ''}`} />
              </button>
              
              {isLanguageMenuOpen && (
                <div className="language-dropdown">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      className={`language-option ${selectedLanguage === language.code ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedLanguage(language.code)
                        setLocale(language.code)
                        setIsLanguageMenuOpen(false)
                      }}
                    >
                      <span className="flag">{language.flag}</span>
                      <span className="language-name">{language.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
        </div>
    </div>
  )
}

export default Header