"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Star,
  MapPin,
  Heart,
  CheckCircle,
  Clock,
  Search,
  Filter,
  DollarSign,
  Users,
  Calendar,
  TrendingUp,
} from "lucide-react"
import { useState } from "react"
import { useTheme } from "@/components/theme-context"

const companions = [
  {
    name: "Sophia",
    location: "New York",
    rating: 4.9,
    bookings: 150,
    responseRate: 98,
    price: 350,
    bio: "Professional model and art enthusiast. Perfect companion for gallery openings, theater, and sophisticated social events.",
    image: "/beautiful-young-woman-professional-headshot-elegan.jpg",
    available: true,
    verified: true,
  },
  {
    name: "Isabella",
    location: "Los Angeles",
    rating: 5.0,
    bookings: 89,
    responseRate: 100,
    price: 420,
    bio: "Former ballet dancer and wine sommelier. Brings grace and sophistication to every encounter.",
    image: "/elegant-latina-woman-professional-photo-studio.jpg",
    available: false,
    verified: true,
  },
  {
    name: "Victoria",
    location: "Miami",
    rating: 4.8,
    bookings: 76,
    responseRate: 95,
    price: 380,
    bio: "Award-winning chef and culinary artist. Creates unforgettable dining experiences.",
    image: "/beautiful-brunette-woman-professional-portrait-sof.jpg",
    available: true,
    verified: true,
  },
  {
    name: "Marcus",
    location: "Chicago",
    rating: 4.7,
    bookings: 68,
    responseRate: 95,
    price: 280,
    bio: "Fitness enthusiast and motivational speaker. Perfect for active dates and wellness events.",
    image: "/handsome-professional-man-headshot.jpg",
    available: true,
    verified: true,
  },
  {
    name: "Anastasia",
    location: "San Francisco",
    rating: 4.9,
    bookings: 120,
    responseRate: 97,
    price: 450,
    bio: "International business consultant. Speaks 5 languages and specializes in corporate entertainment.",
    image: "/elegant-russian-woman-professional-photo.jpg",
    available: true,
    verified: true,
  },
  {
    name: "Alexander",
    location: "Seattle",
    rating: 4.6,
    bookings: 82,
    responseRate: 93,
    price: 390,
    bio: "Tech entrepreneur and investment advisor. Engaging conversationalist for business dinners.",
    image: "/professional-man-entrepreneur-headshot.jpg",
    available: false,
    verified: true,
  },
  {
    name: "Gabrielle",
    location: "Las Vegas",
    rating: 4.7,
    bookings: 95,
    responseRate: 92,
    price: 320,
    bio: "Professional opera singer and classical musician. Brings artistic sophistication to any event.",
    image: "/beautiful-elegant-woman-singer-portrait.jpg",
    available: true,
    verified: true,
  },
  {
    name: "Celeste",
    location: "New York",
    rating: 4.8,
    bookings: 110,
    responseRate: 96,
    price: 395,
    bio: "Fashion designer and style consultant. Elegant companion for high-society gatherings.",
    image: "/stylish-fashion-designer-woman-portrait.jpg",
    available: false,
    verified: true,
  },
  {
    name: "Phoenix",
    location: "Miami",
    rating: 4.5,
    bookings: 55,
    responseRate: 90,
    price: 310,
    bio: "Creative artist and performance specialist. Vibrant energy for nightlife and entertainment.",
    image: "/creative-artistic-woman-portrait-colorful.jpg",
    available: true,
    verified: true,
  },
  {
    name: "Daniel",
    location: "Boston",
    rating: 4.8,
    bookings: 75,
    responseRate: 94,
    price: 340,
    bio: "Certified sommelier and food critic. Makes every dining experience extraordinary.",
    image: "/sophisticated-man-sommelier-portrait.jpg",
    available: true,
    verified: true,
  },
]

export default function BrowsePage() {
  const { theme } = useTheme()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("available")

  const getAccentColor = () => {
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
        return "bg-pink-600 hover:bg-pink-700"
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <section className="bg-slate-900 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Companion</h1>
          <p className="text-gray-400 mb-6">Browse 2,500+ verified professionals - Available 24/7</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              12 Available
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Avg Response: 15 mins
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              4.9+ Average Rating
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 sticky top-24 space-y-6">
              {/* Category Filter */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
                <div className="space-y-2">
                  {[
                    { label: "All Categories", count: "2,000+" },
                    { label: "Women", count: "1,200+" },
                    { label: "Men", count: "500+" },
                    { label: "Trans", count: "300+" },
                  ].map((cat, i) => (
                    <button
                      key={i}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                        i === 0 ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span className="text-xs opacity-70">{cat.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Search & Filters */}
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Search com..."
                    className="pl-9 text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="w-4 h-4" />
                </Button>
              </div>

              {/* Location */}
              <div>
                <div className="relative">
                  <MapPin className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <Input placeholder="Enter city or area..." className="pl-9 text-sm" />
                </div>
                <p className={`text-xs ${getAccentColor()} mt-2`}>Location access denied. Using city search instead.</p>
              </div>

              {/* Benefits Cards */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100">
                <div className="text-center p-3 bg-gray-50 rounded-xl">
                  <DollarSign className="w-5 h-5 mx-auto mb-1 text-gray-600" />
                  <div className="text-[10px] font-medium text-gray-900">Transparent Pricing</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-xl">
                  <Clock className="w-5 h-5 mx-auto mb-1 text-gray-600" />
                  <div className="text-[10px] font-medium text-gray-900">Flexible Bookings</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-xl">
                  <CheckCircle className="w-5 h-5 mx-auto mb-1 text-gray-600" />
                  <div className="text-[10px] font-medium text-gray-900">Secure Payments</div>
                </div>
              </div>

              {/* Companion Benefits */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-gray-600" />
                  <h4 className="font-semibold text-gray-900 text-sm">Companion Benefits</h4>
                </div>
                <p className="text-xs text-gray-500 mb-3">Why join our platform</p>

                <div className="mb-4">
                  <div className="text-xs text-gray-500">Average Earnings</div>
                  <div className="text-xl font-bold text-gray-900">$5,000/mo</div>
                  <div className="text-xs text-gray-500">Top companions earn $15,000+</div>
                </div>

                <ul className="space-y-2 text-xs text-gray-600">
                  <li className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5" />
                    50,000+ Active Clients
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" />
                    Flexible Scheduling
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-3.5 h-3.5" />
                    Verified Reviews
                  </li>
                </ul>

                <Button className={`w-full mt-4 ${getButtonColor()} text-white rounded-lg`}>Apply to Join</Button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  <span className={getAccentColor()}>12</span> companions found
                </h2>
              </div>
              <div className="flex gap-2">
                {["Available Now", "Top Rated", "Best Price"].map((filter, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveFilter(filter.toLowerCase().replace(" ", "-"))}
                    className={`px-4 py-2 rounded-full text-xs font-medium border transition-colors ${
                      activeFilter === filter.toLowerCase().replace(" ", "-")
                        ? "bg-gray-900 text-white border-gray-900"
                        : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {i === 0 && <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1.5" />}
                    {i === 1 && <Star className="inline-block w-3 h-3 mr-1" />}
                    {i === 2 && <DollarSign className="inline-block w-3 h-3 mr-1" />}
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Companion Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {companions.map((companion, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/5]">
                    <img
                      src={companion.image || "/placeholder.svg"}
                      alt={companion.name}
                      className="w-full h-full object-cover"
                    />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span
                        className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                          companion.available ? "bg-green-100 text-green-700" : "bg-gray-800 text-white"
                        }`}
                      >
                        {companion.available ? "Available" : "Offline"}
                      </span>
                    </div>

                    {companion.verified && (
                      <div className="absolute top-3 right-3">
                        <span className="bg-green-500 text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          Verified
                        </span>
                      </div>
                    )}

                    <button className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-sm">
                      <Heart className="w-5 h-5 text-gray-400 hover:text-pink-500 transition-colors" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{companion.name}</h3>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <MapPin className="w-3.5 h-3.5" />
                          {companion.location}
                        </div>
                      </div>
                      <div className={`text-xl font-bold ${getAccentColor()}`}>
                        ${companion.price}
                        <span className="text-sm font-normal text-gray-500">/hr</span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{companion.bio}</p>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium text-gray-900">{companion.rating}</span>
                        <span>• {companion.bookings} bookings</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-green-600 font-medium">{companion.responseRate}% response</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1 rounded-lg text-sm bg-transparent">
                        View Profile
                      </Button>
                      <Button variant="outline" className="w-10 h-10 p-0 rounded-lg bg-transparent">
                        +
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
