"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-context"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const navLinks = [
  { name: "Browse", href: "/browse" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/investors" },
  { name: "Wellbeing", href: "/safety" },
]

export function Navbar() {
  const { theme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const getButtonClass = () => {
    switch (theme) {
      case "female":
        return "bg-pink-500 hover:bg-pink-600"
      case "male":
        return "bg-blue-500 hover:bg-blue-600"
      case "trans":
        return "bg-gradient-to-r from-sky-400 to-pink-400 hover:from-sky-500 hover:to-pink-500"
      case "nonbinary":
        return "bg-gradient-to-r from-yellow-400 to-purple-500 hover:from-yellow-500 hover:to-purple-600"
      default:
        return "bg-pink-500 hover:bg-pink-600"
    }
  }

  return (
    <div className="w-full">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 text-white text-center py-2 text-xs font-medium">
        Demo Platform: Experience our booking flow with sample data
      </div>

      {/* Main Navbar */}
      <header className="absolute top-[32px] left-0 right-0 z-50 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-transparent">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
            <Image
              src="/images/logo.png"
              alt="whoredash"
              width={140}
              height={40}
              className="w-auto object-contain h-14"
              priority
            />
          </Link>

          {/* Main Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors relative group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10 transition-all">
                Sign In
              </Button>
            </Link>
            <Link href="/pricing">
              <Button
                className={`${getButtonClass()} text-white rounded-full px-6 font-medium transition-all duration-300 btn-press shadow-lg hover:shadow-xl`}
              >
                Join as Companion
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-white/10 p-4 space-y-4 animate-fadeIn">
            <nav className="flex flex-col gap-1">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="pt-4 border-t border-gray-700 space-y-3">
              <Link href="/dashboard" className="block">
                <Button variant="ghost" className="w-full text-gray-300 hover:text-white hover:bg-white/10">
                  Sign In
                </Button>
              </Link>
              <Link href="/pricing" className="block">
                <Button
                  className={`w-full ${getButtonClass()} text-white rounded-full px-6 font-medium transition-all duration-300`}
                >
                  Join as Companion
                </Button>
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  )
}
