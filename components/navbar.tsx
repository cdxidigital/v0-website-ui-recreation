import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <div className="w-full">
      {/* Top Banner */}
      <div className="bg-pink-500 text-white text-center py-1 text-xs font-medium">
        ⚠️ DEMO: Experience our platform features - Sample booking flow!
      </div>

      {/* Main Navbar */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold italic text-pink-600" style={{ fontFamily: "cursive" }}>
              whoredash
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <Link href="#" className="hover:text-pink-600 transition-colors">
              Browse
            </Link>
            <Link href="#" className="hover:text-pink-600 transition-colors">
              How It Works
            </Link>
            <Link href="#" className="hover:text-pink-600 transition-colors">
              About
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-sm font-medium text-gray-600 hover:text-pink-600 hidden sm:flex">
              Sign In
            </Button>
            <Button className="bg-white text-pink-600 border border-pink-200 hover:bg-pink-50 hover:text-pink-700 rounded-full px-6 shadow-sm text-sm font-semibold">
              Join as Companion
            </Button>
          </div>
        </div>
      </header>
    </div>
  )
}
