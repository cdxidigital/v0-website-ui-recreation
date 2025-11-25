"use client"

import Link from "next/link"
import Image from "next/image"
import { Twitter, Instagram, Linkedin, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-context"

const footerLinks = {
  browse: [
    { name: "Find Companions", href: "/browse" },
    { name: "Pricing", href: "/pricing" },
    { name: "Categories", href: "/browse" },
  ],
  company: [
    { name: "About", href: "/investors" },
    { name: "Investors", href: "/investors" },
    { name: "Careers", href: "#" },
  ],
  resources: [
    { name: "Wellbeing", href: "/safety" },
    { name: "Contact", href: "#" },
    { name: "FAQ", href: "/pricing" },
  ],
  legal: [
    { name: "Terms", href: "#" },
    { name: "Privacy", href: "#" },
  ],
}

export function Footer() {
  const { theme } = useTheme()

  const getButtonClass = () => {
    switch (theme) {
      case "female":
        return "bg-pink-500 hover:bg-pink-600"
      case "male":
        return "bg-blue-500 hover:bg-blue-600"
      case "trans":
        return "bg-gradient-to-r from-sky-400 to-pink-400 hover:from-sky-500 hover:to-pink-500"
      case "nonbinary":
        return "bg-gradient-to-r from-yellow-400 to-purple-500 hover:from-yellow-500 hover:to-purple-600"
      default:
        return "bg-pink-500 hover:bg-pink-600"
    }
  }

  return (
    <footer>
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 py-20 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't Wait - Your Perfect Companion Awaits</h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg">
            Join 50,000+ satisfied clients who've found their ideal companions
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-300 mb-10">
            {["24/7 Support", "Verified Reviews", "5-Star Support"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                {item}
              </div>
            ))}
          </div>

          <Link href="/browse">
            <Button
              className={`${getButtonClass()} text-white rounded-full px-10 py-7 text-lg font-bold shadow-2xl transition-all duration-300 btn-press hover:scale-105`}
            >
              Browse 2,500+ Companions Now
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer Links */}
      <div className="bg-slate-900 text-gray-400 py-16 text-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/logo.png"
                  alt="WhoreDash"
                  width={150}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </Link>
              <p className="text-xs leading-relaxed max-w-xs">
                Premium companion marketplace connecting professionals with verified clients.
              </p>
            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-wider">{category}</h4>
                <ul className="space-y-2 text-xs">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="hover:text-white transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <div>© 2025 WhoreDash. All rights reserved.</div>
            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                <Icon key={i} className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
