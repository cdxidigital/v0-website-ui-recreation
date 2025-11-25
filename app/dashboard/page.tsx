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
      case "nonbinary":
        return "bg-yellow-500"
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
      case "nonbinary":
        return "text-yellow-600"
      default:
        return "text-pink-600"
    }
  }

  const getBgColor = () => {
    switch (theme) {
      case "male":
        return "bg-blue-50"
      case "trans":
        return "bg-purple-50"
      case "nonbinary":
        return "bg-yellow-50"
      default:
        return "bg-pink-50"
    }
  }

  const stats = [
    { label: "Total Earnings", value: "$12,450", icon: DollarSign, change: "+12.5%" },
    { label: "Bookings This Month", value: "28", icon: Calendar, change: "+8" },
    { label: "Average Rating", value: "4.9", icon: Star, change: "+0.2" },
    { label: "Profile Views", value: "1,247", icon: TrendingUp, change: "+156" },
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

      {/* Header */}
      <section className={`${getThemeColor()} text-white py-16 pt-32 transition-colors duration-300`}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="animate-fadeInUp">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome back, Alex!</h1>
              <p className="text-white/90">Here's what's happening with your account today.</p>
            </div>
            <div className="flex gap-3 animate-fadeInUp stagger-1">
              <Button
                variant="secondary"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm"
              >
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Button
                variant="secondary"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm"
              >
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Panic Button */}
      <section className="container mx-auto px-4 max-w-7xl -mt-6 mb-8 relative z-10">
        <div className="bg-red-500 text-white rounded-xl p-4 shadow-xl flex items-center justify-between animate-pulse-glow">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-6 h-6" />
            <div>
              <div className="font-bold">Emergency Support</div>
              <div className="text-sm text-white/90">Press this button if you need immediate assistance</div>
            </div>
          </div>
          <Button className="bg-red-700 hover:bg-red-800 text-white font-bold px-6 btn-press">PANIC BUTTON</Button>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl pb-16">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover animate-fadeInUp"
                style={{ animationDelay: `${0.1 * i}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${getBgColor()} transition-colors duration-300`}>
                    <Icon className={`w-6 h-6 ${getTextColor()} transition-colors duration-300`} />
                  </div>
                  <span className="text-green-600 text-sm font-bold bg-green-50 px-2 py-1 rounded-full">
                    {stat.change}
                  </span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Bookings */}
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
                        <Button size="sm" variant="outline" className="bg-transparent">
                          View
                        </Button>
                        <Button
                          size="sm"
                          className={`${getThemeColor()} text-white btn-press transition-colors duration-300`}
                        >
                          Contact
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-100 text-center">
              <Button variant="ghost" className={`${getTextColor()} transition-colors duration-300`}>
                View All Bookings
              </Button>
            </div>
          </div>

          {/* Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {recentActivity.map((activity, index) => (
                <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="font-medium text-gray-900 text-sm mb-1">{activity.action}</div>
                  <div className="text-xs text-gray-600">{activity.from}</div>
                  <div className="text-xs text-gray-400 mt-1">{activity.time}</div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-100 text-center">
              <Button variant="ghost" className={`${getTextColor()} text-sm transition-colors duration-300`}>
                View All Activity
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Calendar, label: "Manage Availability" },
              { icon: Star, label: "View Reviews" },
              { icon: DollarSign, label: "Earnings Report" },
              { icon: TrendingUp, label: "Analytics" },
            ].map((action, i) => (
              <Button
                key={i}
                variant="outline"
                className="h-auto py-4 flex-col gap-2 bg-transparent hover:bg-gray-50 btn-press"
              >
                <action.icon className="w-6 h-6" />
                <span className="text-sm">{action.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
