"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useTheme } from "@/components/theme-context"
import { DollarSign, Calendar, Star, TrendingUp, AlertCircle, Bell, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  const { theme } = useTheme()

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

  const stats = [
    { label: "Total Earnings", value: "$12,450", icon: DollarSign, change: "+12.5%", trend: "up" },
    { label: "Bookings This Month", value: "28", icon: Calendar, change: "+8", trend: "up" },
    { label: "Average Rating", value: "4.9", icon: Star, change: "+0.2", trend: "up" },
    { label: "Profile Views", value: "1,247", icon: TrendingUp, change: "+156", trend: "up" },
  ]

  const upcomingBookings = [
    { client: "John D.", date: "Today, 3:00 PM", duration: "2 hours", status: "confirmed" },
    { client: "Sarah M.", date: "Tomorrow, 7:00 PM", duration: "3 hours", status: "confirmed" },
    { client: "Mike R.", date: "Dec 25, 5:00 PM", duration: "4 hours", status: "pending" },
  ]

  const recentActivity = [
    { action: "New booking request", from: "Alex K.", time: "5 min ago" },
    { action: "Payment received", from: "Emma L.", time: "2 hours ago" },
    { action: "Rating received (5 stars)", from: "Chris P.", time: "5 hours ago" },
    { action: "Profile viewed", from: "Anonymous", time: "1 day ago" },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Dashboard Header */}
      <section className={`${getThemeColor()} text-white py-12`}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome back, Alex!</h1>
              <p className="text-white/90">Here's what's happening with your account today.</p>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Button variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Panic Button */}
      <section className="container mx-auto px-4 max-w-7xl -mt-6 mb-8 relative z-10">
        <div className="bg-red-500 text-white rounded-xl p-4 shadow-lg flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-6 h-6" />
            <div>
              <div className="font-bold">Emergency Support</div>
              <div className="text-sm text-white/90">Press this button if you need immediate assistance</div>
            </div>
          </div>
          <Button className="bg-red-700 hover:bg-red-800 text-white font-bold px-6">PANIC BUTTON</Button>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl pb-16">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${getThemeColor()} bg-opacity-10`}>
                    <Icon className={`w-6 h-6 ${getTextColor()}`} />
                  </div>
                  <span className="text-green-600 text-sm font-bold">{stat.change}</span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Upcoming Bookings */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900">Upcoming Bookings</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {upcomingBookings.map((booking, index) => (
                <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 mb-1">{booking.client}</div>
                      <div className="text-sm text-gray-600 mb-2">{booking.date}</div>
                      <div className="text-sm text-gray-500">Duration: {booking.duration}</div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          booking.status === "confirmed"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {booking.status}
                      </span>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          View
                        </Button>
                        <Button size="sm" className={`${getThemeColor()} text-white`}>
                          Contact
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-100 text-center">
              <Button variant="ghost" className={getTextColor()}>
                View All Bookings
              </Button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {recentActivity.map((activity, index) => (
                <div key={index} className="p-4">
                  <div className="font-medium text-gray-900 text-sm mb-1">{activity.action}</div>
                  <div className="text-xs text-gray-600">{activity.from}</div>
                  <div className="text-xs text-gray-400 mt-1">{activity.time}</div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-100 text-center">
              <Button variant="ghost" className={`${getTextColor()} text-sm`}>
                View All Activity
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto py-4 flex-col gap-2 bg-transparent">
              <Calendar className="w-6 h-6" />
              <span className="text-sm">Manage Availability</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2 bg-transparent">
              <Star className="w-6 h-6" />
              <span className="text-sm">View Reviews</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2 bg-transparent">
              <DollarSign className="w-6 h-6" />
              <span className="text-sm">Earnings Report</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2 bg-transparent">
              <TrendingUp className="w-6 h-6" />
              <span className="text-sm">Analytics</span>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
