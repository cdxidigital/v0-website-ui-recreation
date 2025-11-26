"use client"

import { Star, MapPin, Heart, CheckCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-context"
import Link from "next/link"
import { useState } from "react"

const companions = [
  {
    name: "Sophia",
    location: "New York",
    rating: 4.9,
    bookings: 150,
    responseRate: 98,
    price: 350,
    tags: ["Bedroom Fun", "Intimate Dining"],
    image: "/beautiful-young-woman-professional-headshot-elegan.jpg",
    available: true,
    verified: true,
    responseTime: "30-45 min",
  },
  {
    name: "Isabella",
    location: "Los Angeles",
    rating: 5.0,
    bookings: 89,
    responseRate: 100,
    price: 420,
    tags: ["Social Companion", "Cultural Events"],
    image: "/elegant-latina-woman-professional-photo-studio.jpg",
    available: false,
    verified: true,
    responseTime: "30-45 min",
  },
  {
    name: "Victoria",
    location: "Miami",
    rating: 4.8,
    bookings: 76,
    responseRate: 95,
    price: 380,
    tags: ["Fine Dining", "Travel"],
    image: "/beautiful-brunette-woman-professional-portrait-sof.jpg",
    available: true,
    verified: true,
    responseTime: "30-45 min",
  },
]

export function Trending() {
  const { theme } = useTheme()
  const [favorites, setFavorites] = useState<Set<string>>(new Set())

  const getAccentColor = () => {
    switch (theme) {
      case "female":
        return "text-pink-600"
      case "male":
        return "text-blue-600"
      case "trans":
        return "text-sky-500"
      case "nonbinary":
        return "text-yellow-600"
      default:
        return "text-pink-600"
    }
  }

  const getButtonClass = () => {
    switch (theme) {
      case "female":
        return "border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
      case "male":
        return "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
      case "trans":
        return "border-sky-400 text-sky-500 hover:bg-sky-400 hover:text-white"
      case "nonbinary":
        return "border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white"
      default:
        return "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
    }
  }

  const getHeartHoverClass = () => {
    switch (theme) {
      case "female":
        return "hover:text-pink-500"
      case "male":
        return "hover:text-blue-500"
      case "trans":
        return "hover:text-sky-400"
      case "nonbinary":
        return "hover:text-yellow-500"
      default:
        return "hover:text-pink-500"
    }
  }

  const toggleFavorite = (name: string) => {
    setFavorites((prev) => {
      const next = new Set(prev)
      if (next.has(name)) {
        next.delete(name)
      } else {
        next.add(name)
      }
      return next
    })
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Trending Companions Near You</h2>
            <p className="text-gray-500">Most booked this week - Available now</p>
          </div>
          <Link href="/browse">
            <Button
              variant="outline"
              className={`rounded-full px-6 bg-transparent transition-all duration-300 btn-press hover:scale-105 ${getButtonClass()}`}
            >
              View All 2,500+ →
            </Button>
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {companions.map((companion, i) => (
            <article
              key={i}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden card-hover animate-fadeInUp"
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden group">
                <img
                  src={companion.image || "/placeholder.svg"}
                  alt={`${companion.name} - Professional companion in ${companion.location}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading={i < 3 ? "eager" : "lazy"}
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm ${
                      companion.available ? "bg-green-500/90 text-white" : "bg-gray-800/90 text-white"
                    }`}
                    aria-label={companion.available ? "Available now" : "Currently busy"}
                  >
                    {companion.available ? "Available" : "Busy"}
                  </span>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/90 text-gray-700 flex items-center gap-1 backdrop-blur-sm">
                    <Clock className="w-3 h-3" aria-hidden="true" />
                    {companion.responseTime}
                  </span>
                </div>

                {companion.verified && (
                  <div className="absolute top-3 right-3">
                    <span
                      className="bg-green-500 text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1 shadow-lg"
                      aria-label="Verified companion"
                    >
                      <CheckCircle className="w-3 h-3" aria-hidden="true" />
                      Verified
                    </span>
                  </div>
                )}

                <button
                  onClick={() => toggleFavorite(companion.name)}
                  className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg hover:scale-110 focus:scale-110"
                  aria-label={favorites.has(companion.name) ? "Remove from favorites" : "Add to favorites"}
                  aria-pressed={favorites.has(companion.name)}
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${
                      favorites.has(companion.name)
                        ? "fill-pink-500 text-pink-500"
                        : `text-gray-400 ${getHeartHoverClass()}`
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{companion.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                      {companion.location}
                    </div>
                  </div>
                  <div className={`text-xl font-bold transition-colors duration-300 ${getAccentColor()}`}>
                    ${companion.price}
                    <span className="text-sm font-normal text-gray-500">/hr</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label="Service categories">
                  {companion.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full"
                      role="listitem"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                    <span className="font-semibold text-gray-900">{companion.rating}</span>
                    <span aria-label={`${companion.bookings} bookings`}>• {companion.bookings} bookings</span>
                  </div>
                  <span className="text-green-600 font-medium" aria-label={`${companion.responseRate}% response rate`}>
                    {companion.responseRate}% response
                  </span>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1 rounded-lg text-sm bg-transparent btn-press hover:bg-gray-50"
                    aria-label={`View ${companion.name}'s profile`}
                  >
                    View Profile
                  </Button>
                  <Button
                    variant="outline"
                    className="w-10 h-10 p-0 rounded-lg bg-transparent btn-press hover:bg-gray-50"
                    aria-label="Quick book"
                  >
                    +
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
