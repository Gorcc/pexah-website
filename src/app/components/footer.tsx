import React from 'react'
import { Twitter, Linkedin, Github, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-800/60 bg-[#131316]">
      <div className="mx-auto w-full max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <div className="text-sm tracking-[0.2em] text-gray-200">PEXAH</div>
            <p className="text-sm text-gray-400">
              Institutional-grade crypto trading infrastructure. Secure, fast, and reliable.
            </p>
            <div className="flex items-center gap-3 text-gray-400">
              <a href="#" aria-label="Twitter" className="hover:text-gray-200 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-200 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="GitHub" className="hover:text-gray-200 transition-colors">
                <Github size={18} />
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

          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-200">Products</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-gray-200 transition-colors">OTC Trading</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors">P2P Platform</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors">API</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors">Fees</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-200">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-gray-200 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors">Status</a></li>
              <li className="flex items-center gap-3">
                <a href="#" className="hover:text-gray-200 transition-colors">Terms</a>
                <span className="text-gray-600">•</span>
                <a href="#" className="hover:text-gray-200 transition-colors">Privacy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800/60">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-6">
          <div className="text-xs tracking-[0.2em] text-gray-300">PEXAH</div>
          <div className="text-xs text-gray-400">
            Design & Developed by <span className="text-gray-200">Almego Studio</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


