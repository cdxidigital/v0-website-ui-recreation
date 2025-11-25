"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-context"
import { Menu, X } from "lucide-react"
import { useState } from "react"

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
      <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white text-center py-1.5 text-xs font-medium">
        Demo Platform: Experience our booking flow with sample data
      </div>

      {/* Main Navbar */}
      <header className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-800/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="whoredash"
              width={140}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Main Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {[
              { name: "Browse", href: "/browse" },
              { name: "Bookings", href: "/pricing" },
              { name: "Pricing", href: "/pricing" },
              { name: "About", href: "/investors" },
            ].map((item) => (
              <Link key={item.name} href={item.href} className="text-gray-300 hover:text-white transition-colors">
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
              Sign In
            </Button>
            <Button
              className={`${getButtonClass()} text-white rounded-full px-6 font-medium transition-all duration-300`}
            >
              Join as Companion
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-gray-300" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-purple-800/30 p-4 space-y-4">
            <nav className="flex flex-col gap-2">
              {[
                { name: "Browse", href: "/browse" },
                { name: "Bookings", href: "/pricing" },
                { name: "Pricing", href: "/pricing" },
                { name: "About", href: "/investors" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-white/10 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="pt-4 border-t border-gray-700">
              <Button
                className={`w-full ${getButtonClass()} text-white rounded-full px-6 font-medium transition-all duration-300`}
              >
                Join as Companion
              </Button>
            </div>
          </div>
        )}
      </header>
    </div>
  )
}
