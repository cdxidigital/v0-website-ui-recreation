"use client"

import { Search, Clock, UserCheck, Lock, Star, Shield, Headphones } from "lucide-react"
import { useTheme } from "@/components/theme-context"

export function HowItWorks() {
  const { theme } = useTheme()

  const getStepColors = () => {
    switch (theme) {
      case "female":
        return ["bg-pink-500", "bg-purple-500", "bg-pink-500"]
      case "male":
        return ["bg-blue-500", "bg-cyan-500", "bg-blue-500"]
      case "trans":
        return ["bg-sky-400", "bg-pink-400", "bg-sky-400"]
      case "nonbinary":
        return ["bg-yellow-500", "bg-purple-500", "bg-yellow-500"]
      default:
        return ["bg-pink-500", "bg-purple-500", "bg-pink-500"]
    }
  }

  const stepColors = getStepColors()

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-16">How Whoredash works</h2>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-20 relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10" />

          {[
            {
              step: "1. Browse & Select",
              desc: "Browse verified hotties in your area and select your perfect match",
              icon: Search,
            },
            {
              step: "2. Book Instantly",
              desc: "Choose your time and location, then book with just a few taps",
              icon: Clock,
            },
            {
              step: "3. Enjoy",
              desc: "Meet your companion and enjoy an unforgettable experience",
              icon: UserCheck,
            },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className={`w-24 h-24 rounded-full ${stepColors[i]} flex items-center justify-center text-white shadow-lg mb-6 transition-colors duration-300`}
              >
                <item.icon className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{item.step}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-4xl mx-auto">
          <div className="text-sm font-medium text-gray-500 mb-6">Built with enterprise-grade security and trust</div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <Lock className="w-4 h-4 text-green-500" />
              SSL Encrypted
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              4.9/5 Trustpilot Rating
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <Shield className="w-4 h-4 text-blue-500" />
              Background Verified
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <Headphones className="w-4 h-4 text-purple-500" />
              24/7 Support
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-100 text-xs text-gray-400 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            127 companions online now • 43 bookings made in the last hour • 2,847 active users today
          </div>
        </div>
      </div>
    </section>
  )
}
