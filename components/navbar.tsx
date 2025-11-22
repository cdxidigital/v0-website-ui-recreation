"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-context"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const getThemeColor = () => {
    switch (theme) {
      case "male":
        return "bg-blue-600 shadow-blue-800"
      case "trans":
        return "bg-purple-600 shadow-purple-800"
      default:
        return "bg-pink-600 shadow-pink-800"
    }
  }

  const getTextColor = () => {
    switch (theme) {
      case "male":
        return "text-blue-600"
      case "trans":
        return "text-purple-600"
      default:
        return "text-pink-600"
    }
  }

  return (
    <div className="w-full">
      {/* Top Banner */}
      <div
        className={`${getThemeColor().split(" ")[0]} text-white text-center py-1 text-xs font-medium transition-colors duration-300`}
      >
        ⚠️ DEMO: Experience our platform features - Sample booking flow!
      </div>

      {/* Main Navbar */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50 transition-colors duration-300">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span
              className={`text-2xl font-bold italic ${getTextColor()} transition-colors duration-300`}
              style={{ fontFamily: "cursive" }}
            >
              whoredash
            </span>
          </Link>

          {/* Desktop Nav - 3D Buttons */}
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium text-gray-600">
            {["Browse", "How It Works", "About"].map((item) => (
              <Link
                key={item}
                href="#"
                className={`px-4 py-2 rounded-lg bg-white border border-gray-200 font-bold text-gray-700 btn-3d hover:bg-gray-50 hover:${getTextColor()}`}
                style={{ ["--tw-shadow-color" as any]: "#e5e7eb" }}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Theme Switcher & Auth */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Switcher */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              {(["all", "female", "male", "trans"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  className={`px-3 py-1 rounded-md text-xs font-bold capitalize transition-all ${
                    theme === t ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <Button variant="ghost" className="text-sm font-medium text-gray-600 hover:text-pink-600">
              Sign In
            </Button>
            <Button
              className={`text-white border-none rounded-full px-6 text-sm font-semibold btn-3d transition-all duration-300 ${getThemeColor()}`}
            >
              Join as Companion
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-gray-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 p-4 space-y-4">
            <nav className="flex flex-col gap-3">
              {["Browse", "How It Works", "About"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block px-4 py-3 rounded-lg bg-gray-50 font-bold text-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>
            <div className="pt-4 border-t border-gray-100">
              <p className="text-xs font-bold text-gray-500 mb-2 uppercase">Select Theme</p>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {(["all", "female", "male", "trans"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTheme(t)}
                    className={`py-2 rounded-md text-xs font-bold capitalize border ${
                      theme === t ? `bg-gray-900 text-white border-gray-900` : "bg-white text-gray-600 border-gray-200"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <Button className={`w-full ${getThemeColor()} text-white rounded-lg py-3 font-bold shadow-none`}>
                Join as Companion
              </Button>
            </div>
          </div>
        )}
      </header>
    </div>
  )
}
