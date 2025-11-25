"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Search } from "lucide-react"
import { useTheme } from "@/components/theme-context"

export function Hero() {
  const { theme, setTheme, themeColors } = useTheme()

  const getActiveButtonClass = () => {
    switch (theme) {
      case "female":
        return "bg-pink-500 text-white"
      case "male":
        return "bg-blue-500 text-white"
      case "trans":
        return "bg-gradient-to-r from-sky-400 via-pink-300 to-sky-400 text-slate-800"
      case "nonbinary":
        return "bg-gradient-to-r from-yellow-400 via-white to-purple-500 text-slate-800"
      default:
        return "bg-pink-500 text-white"
    }
  }

  const getSearchButtonClass = () => {
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

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-[44px]">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="\images\grok-video-1e62dbf4-a8ee-42a2-a068-3c8e05f6ccad (1).mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-purple-900/50 to-slate-900/80" />

      <div className="relative z-10 container mx-auto px-4 text-center py-20">
        <div
          className={`inline-flex items-center gap-2 border rounded-full px-4 py-2 mb-6 transition-colors duration-300 ${getBadgeClass()}`}
        >
          <span className="text-sm">✨ Verified Professionals</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
          Connect With
          <br />
          <span
            className={`bg-gradient-to-r ${getGradientTextClass()} bg-clip-text text-transparent transition-all duration-300`}
          >
            Premium Professionals
          </span>
        </h1>

        <p className="text-gray-300 text-base md:text-lg mb-8 max-w-2xl mx-auto">
          Verified, professional companions available 24/7. Average delivery time: 30 minutes.
        </p>

        <div className="inline-flex flex-wrap justify-center bg-white/5 backdrop-blur-sm p-1.5 rounded-full mb-10 border border-white/10">
          <button
            onClick={() => setTheme("all")}
            className={`px-4 sm:px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              theme === "all" ? getActiveButtonClass() : "text-white/70 hover:text-white"
            }`}
          >
            All Genders
          </button>
          <button
            onClick={() => setTheme("female")}
            className={`px-4 sm:px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              theme === "female" ? getActiveButtonClass() : "text-white/70 hover:text-white"
            }`}
          >
            Female
          </button>
          <button
            onClick={() => setTheme("male")}
            className={`px-4 sm:px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              theme === "male" ? getActiveButtonClass() : "text-white/70 hover:text-white"
            }`}
          >
            Male
          </button>
          <button
            onClick={() => setTheme("trans")}
            className={`px-4 sm:px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              theme === "trans" ? getActiveButtonClass() : "text-white/70 hover:text-white"
            }`}
          >
            Trans
          </button>
          <button
            onClick={() => setTheme("nonbinary")}
            className={`px-4 sm:px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              theme === "nonbinary" ? getActiveButtonClass() : "text-white/70 hover:text-white"
            }`}
          >
            Non-Binary
          </button>
        </div>

        <div className="max-w-2xl mx-auto relative mb-4">
          <div className="bg-white rounded-full shadow-2xl flex items-center p-2 gap-2">
            <div className="flex items-center flex-1 px-4">
              <MapPin className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
              <Input
                type="text"
                placeholder="Enter city or area..."
                className="border-0 shadow-none focus-visible:ring-0 text-sm h-12 placeholder:text-gray-400"
              />
            </div>
            <Button
              className={`${getSearchButtonClass()} text-white px-6 sm:px-8 rounded-full h-12 font-medium flex items-center gap-2 transition-all duration-300`}
            >
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline">Browse Now</span>
            </Button>
          </div>
        </div>

        <a href="/browse" className={`text-sm font-medium transition-colors duration-300 ${getLinkClass()}`}>
          or view all professionals
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-md border-t border-white/10 py-6 sm:py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">2,000+</div>
              <div className="text-xs sm:text-sm text-gray-400">Professional Companions</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">29 min</div>
              <div className="text-xs sm:text-sm text-gray-400">Avg Response Time</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">99.2%</div>
              <div className="text-xs sm:text-sm text-gray-400">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">50,000+</div>
              <div className="text-xs sm:text-sm text-gray-400">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
