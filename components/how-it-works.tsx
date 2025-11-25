"use client"

import { Search, Clock, UserCheck, Lock, Star, Shield, Headphones } from "lucide-react"
import { useTheme } from "@/components/theme-context"

export function HowItWorks() {
  const { theme } = useTheme()

  const getStepColors = () => {
    switch (theme) {
      case "female":
        return [
          "bg-gradient-to-br from-pink-500 to-pink-600",
          "bg-gradient-to-br from-purple-500 to-purple-600",
          "bg-gradient-to-br from-pink-500 to-pink-600",
        ]
      case "male":
        return [
          "bg-gradient-to-br from-blue-500 to-blue-600",
          "bg-gradient-to-br from-cyan-500 to-cyan-600",
          "bg-gradient-to-br from-blue-500 to-blue-600",
        ]
      case "trans":
        return [
          "bg-gradient-to-br from-sky-400 to-sky-500",
          "bg-gradient-to-br from-pink-400 to-pink-500",
          "bg-gradient-to-br from-sky-400 to-sky-500",
        ]
      case "nonbinary":
        return [
          "bg-gradient-to-br from-yellow-500 to-yellow-600",
          "bg-gradient-to-br from-purple-500 to-purple-600",
          "bg-gradient-to-br from-yellow-500 to-yellow-600",
        ]
      default:
        return [
          "bg-gradient-to-br from-pink-500 to-pink-600",
          "bg-gradient-to-br from-purple-500 to-purple-600",
          "bg-gradient-to-br from-pink-500 to-pink-600",
        ]
    }
  }

  const stepColors = getStepColors()

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How Whoredash works</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Simple, secure and seamless booking experience</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent -z-10" />

          {[
            {
              step: "Browse & Select",
              number: "01",
              desc: "Browse verified professionals in your area and select your perfect match",
              icon: Search,
            },
            {
              step: "Book Instantly",
              number: "02",
              desc: "Choose your time and location, then book with just a few taps",
              icon: Clock,
            },
            {
              step: "Enjoy",
              number: "03",
              desc: "Meet your companion and enjoy an unforgettable experience",
              icon: UserCheck,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200 hover:-translate-y-1"
            >
              {/* Step Number */}
              <div className="absolute top-6 right-6 text-6xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors">
                {item.number}
              </div>

              <div className="relative flex flex-col items-center text-center">
                <div
                  className={`w-28 h-28 rounded-2xl ${stepColors[i]} flex items-center justify-center text-white shadow-lg mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}
                >
                  <item.icon className="w-12 h-12" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.step}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-3xl p-10 shadow-xl border border-gray-200 max-w-5xl mx-auto backdrop-blur-sm">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Enterprise-Grade Security
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Built with trust and transparency</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { icon: Lock, text: "SSL Encrypted", color: "text-green-500" },
              { icon: Star, text: "4.9/5 Rating", color: "text-yellow-500" },
              { icon: Shield, text: "Background Verified", color: "text-blue-500" },
              { icon: Headphones, text: "24/7 Support", color: "text-purple-500" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <item.icon className={`w-8 h-8 ${item.color}`} />
                <span className="text-gray-700 text-sm font-medium text-center">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-gray-200 text-sm text-gray-500 text-center space-y-2">
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                127 companions online now
              </span>
              <span className="text-gray-300">•</span>
              <span>43 bookings in last hour</span>
              <span className="text-gray-300">•</span>
              <span>2,847 active users today</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
