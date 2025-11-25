"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Search } from "lucide-react"
import { useTheme } from "@/components/theme-context"
import Link from "next/link"

export function Hero() {
  const { theme, setTheme } = useTheme()

  const getActiveButtonClass = () => {
    switch (theme) {
      case "female":
        return "bg-pink-500 text-white shadow-lg shadow-pink-500/30"
      case "male":
        return "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
      case "trans":
        return "bg-gradient-to-r from-sky-400 via-pink-300 to-sky-400 text-slate-800 shadow-lg"
      case "nonbinary":
        return "bg-gradient-to-r from-yellow-400 via-white to-purple-500 text-slate-800 shadow-lg"
      default:
        return "bg-pink-500 text-white shadow-lg shadow-pink-500/30"
    }
  }

  const getSearchButtonClass = () => {
    switch (theme) {
      case "female":
        return "bg-pink-500 hover:bg-pink-600 shadow-lg shadow-pink-500/30"
      case "male":
        return "bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/30"
      case "trans":
        return "bg-gradient-to-r from-sky-400 to-pink-400 hover:from-sky-500 hover:to-pink-500 shadow-lg"
      case "nonbinary":
        return "bg-gradient-to-r from-yellow-400 to-purple-500 hover:from-yellow-500 hover:to-purple-600 shadow-lg"
      default:
        return "bg-pink-500 hover:bg-pink-600 shadow-lg shadow-pink-500/30"
    }
  }

  const getGradientTextClass = () => {
    switch (theme) {
      case "female":
        return "from-pink-400 via-rose-400 to-pink-400"
      case "male":
        return "from-blue-400 via-cyan-400 to-blue-400"
      case "trans":
        return "from-sky-400 via-pink-300 to-sky-400"
      case "nonbinary":
        return "from-yellow-400 via-white to-purple-400"
      default:
        return "from-pink-400 via-purple-400 to-pink-400"
    }
  }

  const getBadgeClass = () => {
    switch (theme) {
      case "female":
        return "bg-pink-500/20 border-pink-400/30 text-pink-300"
      case "male":
        return "bg-blue-500/20 border-blue-400/30 text-blue-300"
      case "trans":
        return "bg-sky-400/20 border-sky-400/30 text-sky-300"
      case "nonbinary":
        return "bg-yellow-500/20 border-yellow-400/30 text-yellow-300"
      default:
        return "bg-purple-500/20 border-purple-400/30 text-purple-300"
    }
  }

  const getLinkClass = () => {
    switch (theme) {
      case "female":
        return "text-pink-400 hover:text-pink-300"
      case "male":
        return "text-blue-400 hover:text-blue-300"
      case "trans":
        return "text-sky-400 hover:text-sky-300"
      case "nonbinary":
        return "text-yellow-400 hover:text-yellow-300"
      default:
        return "text-pink-400 hover:text-pink-300"
    }
  }

  const genderOptions = [
    { id: "all", label: "All Genders" },
    { id: "female", label: "Female" },
    { id: "male", label: "Male" },
    { id: "trans", label: "Trans" },
    { id: "nonbinary", label: "Non-Binary" },
  ]

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-[44px]">
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="\images\grok-whoredash.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-purple-900/50 to-slate-900/80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-20">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 border rounded-full px-4 py-2 mb-6 transition-all duration-300 animate-fadeInUp ${getBadgeClass()}`}
        >
          <span className="text-sm font-medium">✨ Verified Professionals</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight animate-fadeInUp stagger-1">
          Connect With
          <br />
          <span
            className={`bg-gradient-to-r ${getGradientTextClass()} bg-clip-text text-transparent transition-all duration-500`}
          >
            Premium Professionals
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-base md:text-lg mb-8 max-w-2xl mx-auto animate-fadeInUp stagger-2">
          Verified, professional companions available 24/7. Average delivery time: 30 minutes.
        </p>

        {/* Gender Filter Tabs */}
        <div className="inline-flex flex-wrap justify-center bg-white/5 backdrop-blur-sm p-1.5 rounded-full mb-10 border border-white/10 animate-fadeInUp stagger-3">
          {genderOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setTheme(option.id as any)}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                theme === option.id ? getActiveButtonClass() : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative mb-4 animate-fadeInUp stagger-4">
          <div className="bg-white rounded-full shadow-2xl flex items-center p-2 gap-2">
            <div className="flex items-center flex-1 px-4">
              <MapPin className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
              <Input
                type="text"
                placeholder="Enter city or area..."
                className="border-0 shadow-none focus-visible:ring-0 text-sm h-12 placeholder:text-gray-400 bg-transparent"
              />
            </div>
            <Link href="/browse">
              <Button
                className={`${getSearchButtonClass()} text-white px-6 sm:px-8 rounded-full h-12 font-medium flex items-center gap-2 transition-all duration-300 btn-press`}
              >
                <Search className="w-4 h-4" />
                <span className="hidden sm:inline">Browse Now</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Browse All Link */}
        <Link
          href="/browse"
          className={`text-sm font-medium transition-colors duration-300 animate-fadeInUp stagger-5 ${getLinkClass()}`}
        >
          or view all professionals
        </Link>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-md border-t border-white/10 py-6 sm:py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {[
              { value: "2,000+", label: "Professional Companions" },
              { value: "29 min", label: "Avg Response Time" },
              { value: "99.2%", label: "Satisfaction Rate" },
              { value: "50,000+", label: "Happy Clients" },
            ].map((stat, i) => (
              <div key={i} className="animate-fadeInUp" style={{ animationDelay: `${0.1 * i}s` }}>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
