"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useTheme } from "@/components/theme-context"
import { MessageCircle, Heart, Pin, Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function CommunityPage() {
  const { theme } = useTheme()
  const [selectedCategory, setSelectedCategory] = useState("all")

  const getThemeColor = () => {
    switch (theme) {
      case "male":
        return "bg-blue-600"
      case "trans":
        return "bg-purple-600"
      default:
        return "bg-pink-600"
    }
  }

  const getTextColor = () => {
    switch (theme) {
      case "male":
        return "text-blue-600"
      case "trans":
        return "text-purple-600"
      default:
        return "text-pink-600"
    }
  }

  const categories = [
    { id: "all", name: "All Topics", count: 248 },
    { id: "advice", name: "Advice & Support", count: 89 },
    { id: "safety", name: "Safety Tips", count: 56 },
    { id: "success", name: "Success Stories", count: 42 },
    { id: "legal", name: "Legal Guidance", count: 31 },
    { id: "wellness", name: "Mental Wellness", count: 30 },
  ]

  const posts = [
    {
      id: 1,
      isPinned: true,
      title: "Community Guidelines - Please Read First",
      author: "Admin Team",
      replies: 12,
      likes: 145,
      category: "safety",
      timeAgo: "Pinned",
      badge: "Verified",
    },
    {
      id: 2,
      title: "How do you handle difficult clients professionally?",
      author: "SarahJ",
      replies: 34,
      likes: 67,
      category: "advice",
      timeAgo: "2 hours ago",
      badge: "Veteran",
    },
    {
      id: 3,
      title: "Just hit my first $10k month! Here's what helped",
      author: "MaxPro",
      replies: 89,
      likes: 234,
      category: "success",
      timeAgo: "5 hours ago",
      badge: "Top Companion",
    },
    {
      id: 4,
      title: "Mental health check-in: How are you really doing?",
      author: "WellnessCoach",
      replies: 56,
      likes: 123,
      category: "wellness",
      timeAgo: "1 day ago",
      badge: "Mentor",
    },
    {
      id: 5,
      title: "Tax season tips for independent companions",
      author: "LegalEagle",
      replies: 28,
      likes: 91,
      category: "legal",
      timeAgo: "2 days ago",
      badge: "Legal Expert",
    },
    {
      id: 6,
      title: "Best practices for screening new clients?",
      author: "AlexM",
      replies: 45,
      likes: 78,
      category: "safety",
      timeAgo: "3 days ago",
      badge: "Verified",
    },
  ]

  const filteredPosts = selectedCategory === "all" ? posts : posts.filter((post) => post.category === selectedCategory)

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className={`${getThemeColor()} text-white py-16`}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Community Forum</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Connect with fellow companions, share experiences, and support each other.
              </p>
            </div>
            <Button className="bg-white text-gray-900 hover:bg-gray-100 font-bold px-6 py-3 rounded-lg">
              <Plus className="w-5 h-5 mr-2" />
              New Discussion
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-6xl py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 space-y-6">
            {/* Search */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input placeholder="Search discussions..." className="pl-10" />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === cat.id ? `${getThemeColor()} text-white` : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{cat.name}</span>
                      <span className={`text-xs ${selectedCategory === cat.id ? "text-white/80" : "text-gray-400"}`}>
                        {cat.count}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Community Stats */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Community Stats</h3>
              <div className="space-y-3">
                <div>
                  <div className={`text-2xl font-bold ${getTextColor()}`}>1,247</div>
                  <div className="text-sm text-gray-600">Active Members</div>
                </div>
                <div>
                  <div className={`text-2xl font-bold ${getTextColor()}`}>248</div>
                  <div className="text-sm text-gray-600">Total Discussions</div>
                </div>
                <div>
                  <div className={`text-2xl font-bold ${getTextColor()}`}>89</div>
                  <div className="text-sm text-gray-600">Online Now</div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Posts Header */}
              <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                <h2 className="font-bold text-gray-900">
                  {selectedCategory === "all"
                    ? "All Discussions"
                    : categories.find((c) => c.id === selectedCategory)?.name}
                </h2>
                <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-600">
                  <option>Latest Activity</option>
                  <option>Most Popular</option>
                  <option>Most Replies</option>
                </select>
              </div>

              {/* Posts List */}
              <div className="divide-y divide-gray-100">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-2 mb-2">
                          {post.isPinned && <Pin className={`w-4 h-4 ${getTextColor()} flex-shrink-0 mt-1`} />}
                          <h3 className="font-bold text-gray-900 hover:text-pink-600 transition-colors">
                            {post.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <span className="font-medium text-gray-700">{post.author}</span>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${getThemeColor()} text-white`}>
                            {post.badge}
                          </span>
                          <span>{post.timeAgo}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          <span className="font-medium">{post.replies}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span className="font-medium">{post.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
