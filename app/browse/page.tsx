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
]

export default function BrowsePage() {
  const { theme } = useTheme()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("available-now")

  const getAccentColor = () => {
    switch (theme) {
      case "male":
        return "text-blue-600"
      case "trans":
        return "text-purple-600"
      case "nonbinary":
        return "text-yellow-600"
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
      case "nonbinary":
        return "bg-yellow-500 hover:bg-yellow-600"
      default:
        return "bg-pink-600 hover:bg-pink-700"
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 text-center pt-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">Find Your Perfect Companion</h1>
          <p className="text-gray-400 mb-8 animate-fadeInUp stagger-1">
            Browse 2,500+ verified professionals - Available 24/7
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 animate-fadeInUp stagger-2">
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
            <div className="bg-white rounded-2xl p-6 border border-gray-100 sticky top-24 space-y-6 shadow-sm">
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
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all ${
                        i === 0 ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span className="text-xs opacity-70">{cat.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Search */}
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Search..."
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
              </div>

              {/* Companion Benefits */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-gray-600" />
                  <h4 className="font-semibold text-gray-900 text-sm">Companion Benefits</h4>
                </div>

                <div className="mb-4">
                  <div className="text-xs text-gray-500">Average Earnings</div>
                  <div className={`text-2xl font-bold ${getAccentColor()}`}>$5,000/mo</div>
                </div>

                <ul className="space-y-2 text-xs text-gray-600 mb-4">
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

                <Button className={`w-full ${getButtonColor()} text-white rounded-lg btn-press`}>Apply to Join</Button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h2 className="text-lg font-semibold text-gray-900">
                <span className={getAccentColor()}>12</span> companions found
              </h2>
              <div className="flex gap-2 flex-wrap">
                {["Available Now", "Top Rated", "Best Price"].map((filter, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveFilter(filter.toLowerCase().replace(" ", "-"))}
                    className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${
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

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {companions.map((companion, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden card-hover animate-fadeInUp"
                  style={{ animationDelay: `${0.05 * i}s` }}
                >
                  <div className="relative aspect-[4/5]">
                    <img
                      src={companion.image || "/placeholder.svg"}
                      alt={companion.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />

                    <div className="absolute top-3 left-3 flex gap-2">
                      <span
                        className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                          companion.available ? "bg-green-500 text-white" : "bg-gray-800 text-white"
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

                    <button className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg hover:scale-110">
                      <Heart className="w-5 h-5 text-gray-400 hover:text-pink-500 transition-colors" />
                    </button>
                  </div>

                  <div className="p-5">
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

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-gray-900">{companion.rating}</span>
                        <span>• {companion.bookings} bookings</span>
                      </div>
                      <span className="text-green-600 font-medium">{companion.responseRate}% response</span>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1 rounded-lg text-sm bg-transparent btn-press">
                        View Profile
                      </Button>
                      <Button variant="outline" className="w-10 h-10 p-0 rounded-lg bg-transparent btn-press">
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
