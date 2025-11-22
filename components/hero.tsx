"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Search, ShieldCheck, Star, Users, Zap, Heart } from "lucide-react"
import { useTheme } from "@/components/theme-context"

export function Hero() {
  const { theme, setTheme } = useTheme()

  const getGradient = () => {
    switch (theme) {
      case "male":
        return "from-blue-50/50"
      case "trans":
        return "from-purple-50/50"
      default:
        return "from-pink-50/50"
    }
  }

  const getPrimaryColor = () => {
    switch (theme) {
      case "male":
        return "text-blue-600"
      case "trans":
        return "text-purple-600"
      default:
        return "text-pink-600"
    }
  }

  const getButtonColor = () => {
    switch (theme) {
      case "male":
        return "bg-blue-600 hover:bg-blue-700"
      case "trans":
        return "bg-purple-600 hover:bg-purple-700"
      default:
        return "bg-pink-500 hover:bg-pink-600"
    }
  }

  return (
    <section className={`pt-12 pb-16 bg-gradient-to-b ${getGradient()} to-white transition-colors duration-500`}>
      <div className="container mx-auto px-4 text-center max-w-5xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
          Premium Companions
          <br />
          Delivered
        </h1>
        <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
          Verified, professional companions available 24/7. Average delivery time: 30 minutes.
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-gray-600">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-green-500" />
            <span>100% Verified</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span>4.9/5 Rating</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-blue-500" />
            <span>50k+ Happy Clients</span>
          </div>
        </div>

        {/* Category Toggles - Now Interactive */}
        <div className="inline-flex bg-white p-1.5 rounded-full shadow-sm border border-gray-100 mb-8">
          <button
            onClick={() => setTheme("female")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              theme === "female" || theme === "all"
                ? "bg-pink-500 text-white shadow-sm"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Women <span className="opacity-80 text-xs ml-1">12,000+</span>
          </button>
          <button
            onClick={() => setTheme("male")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              theme === "male" ? "bg-blue-600 text-white shadow-sm" : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Men <span className="opacity-80 text-xs ml-1">5,000+</span>
          </button>
          <button
            onClick={() => setTheme("trans")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              theme === "trans" ? "bg-purple-600 text-white shadow-sm" : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Trans <span className="opacity-80 text-xs ml-1">3,000+</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative mb-16">
          <div className={`absolute left-4 top-1/2 -translate-y-1/2 ${getPrimaryColor()} z-10 transition-colors`}>
            <MapPin className="w-5 h-5" />
          </div>
          <Input
            type="text"
            placeholder="Enter your delivery address"
            className={`w-full h-16 pl-12 pr-48 rounded-full border-gray-200 shadow-lg text-lg focus-visible:ring-2 transition-all`}
            style={{
              ["--tw-ring-color" as any]: theme === "male" ? "#2563eb" : theme === "trans" ? "#9333ea" : "#ec4899",
            }}
          />
          <Button
            className={`absolute right-2 top-2 bottom-2 rounded-full ${getButtonColor()} text-white px-8 text-base font-medium h-auto transition-colors duration-300`}
          >
            <Search className="w-4 h-4 mr-2" />
            Find Companions Now
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              value: "375",
              label: "Verified Companions",
              sub: "Background checked",
              icon: ShieldCheck,
              color: "text-green-500",
            },
            {
              value: "28 min",
              label: "Avg Response Time",
              sub: "Lightning Fast",
              icon: Zap,
              color: "text-yellow-500",
            },
            {
              value: "98%",
              label: "Satisfaction Rate",
              sub: "Industry leading",
              icon: Star,
              color: "text-purple-500",
            },
            {
              value: "7,502",
              label: "Happy Clients",
              sub: "Trusted worldwide",
              icon: Heart,
              color: "text-pink-500",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`text-3xl font-bold text-gray-900 mb-1 ${stat.color}`}>{stat.value}</div>
              <div className="text-sm font-medium text-gray-900 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500 flex items-center justify-center gap-1">
                <stat.icon className="w-3 h-3" />
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
