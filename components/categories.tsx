"use client"

import { Utensils, Heart, MessageCircle, HeartPulse, Compass, Film, Plane, Users } from "lucide-react"
import { useTheme } from "@/components/theme-context"

const categories = [
  { name: "Dinner & Dating", icon: Utensils, count: "450+", ariaLabel: "Browse 450+ dinner and dating companions" },
  { name: "Fine Dining", icon: Heart, count: "320+", ariaLabel: "Browse 320+ fine dining companions" },
  { name: "Car Companions", icon: MessageCircle, count: "180+", ariaLabel: "Browse 180+ car companions" },
  { name: "Wellness", icon: HeartPulse, count: "290+", ariaLabel: "Browse 290+ wellness companions" },
  { name: "Adventure", icon: Compass, count: "210+", ariaLabel: "Browse 210+ adventure companions" },
  { name: "Entertainment", icon: Film, count: "380+", ariaLabel: "Browse 380+ entertainment companions" },
  { name: "Events", icon: Plane, count: "260+", ariaLabel: "Browse 260+ event companions" },
  { name: "Conversation", icon: Users, count: "440+", ariaLabel: "Browse 440+ conversation companions" },
]

export function Categories() {
  const { theme } = useTheme()

  const getGradients = () => {
    switch (theme) {
      case "female":
        return [
          "from-pink-500 to-pink-600",
          "from-rose-500 to-pink-500",
          "from-purple-500 to-purple-600",
          "from-emerald-500 to-teal-500",
          "from-orange-500 to-rose-500",
          "from-red-500 to-pink-500",
          "from-fuchsia-500 to-pink-600",
          "from-pink-500 to-purple-500",
        ]
      case "male":
        return [
          "from-blue-500 to-blue-600",
          "from-cyan-500 to-blue-500",
          "from-indigo-500 to-blue-600",
          "from-emerald-500 to-teal-500",
          "from-orange-500 to-amber-500",
          "from-blue-500 to-indigo-500",
          "from-sky-500 to-blue-600",
          "from-cyan-500 to-blue-500",
        ]
      case "trans":
        return [
          "from-sky-400 to-sky-500",
          "from-pink-400 to-pink-500",
          "from-sky-400 to-pink-400",
          "from-emerald-500 to-teal-500",
          "from-pink-400 to-sky-400",
          "from-sky-500 to-pink-500",
          "from-pink-500 to-sky-500",
          "from-sky-400 to-pink-400",
        ]
      case "nonbinary":
        return [
          "from-yellow-400 to-yellow-500",
          "from-purple-500 to-purple-600",
          "from-yellow-400 to-purple-500",
          "from-emerald-500 to-teal-500",
          "from-purple-400 to-yellow-400",
          "from-yellow-500 to-purple-500",
          "from-purple-500 to-yellow-500",
          "from-yellow-400 to-purple-400",
        ]
      default:
        return [
          "from-pink-500 to-pink-600",
          "from-red-500 to-pink-500",
          "from-purple-500 to-purple-600",
          "from-emerald-500 to-teal-500",
          "from-orange-500 to-yellow-500",
          "from-red-500 to-purple-500",
          "from-blue-500 to-blue-600",
          "from-cyan-500 to-blue-500",
        ]
    }
  }

  const gradients = getGradients()

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Browse by category</h2>
          <p className="text-gray-500">Find the perfect companion for any occasion</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {categories.map((category, i) => (
            <button
              key={i}
              className={`bg-gradient-to-br ${gradients[i]} rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-white cursor-pointer hover:scale-105 active:scale-100 transition-all duration-300 shadow-lg hover:shadow-xl aspect-[3/2]`}
              aria-label={category.ariaLabel}
            >
              <category.icon className="w-8 h-8 sm:w-10 sm:h-10 mb-3" aria-hidden="true" />
              <span className="font-semibold text-xs sm:text-sm text-center">{category.name}</span>
              <span className="text-xs opacity-80 mt-1">{category.count} companions</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
