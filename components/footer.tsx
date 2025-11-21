import Link from "next/link"
import { Flame, Twitter, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer>
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://v0.dev/noise.png')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't Wait - Your Perfect Companion Awaits</h2>
          <p className="text-pink-100 mb-8 max-w-2xl mx-auto">
            Join 50,000+ satisfied clients who've found their ideal companions
          </p>

          <div className="flex justify-center gap-6 text-sm font-medium text-pink-100 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border border-pink-300 flex items-center justify-center">
                <div className="w-2 h-2 bg-pink-300 rounded-full" />
              </div>
              SSL Secured
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border border-pink-300 flex items-center justify-center">
                <div className="w-2 h-2 bg-pink-300 rounded-full" />
              </div>
              Verified Reviews
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border border-pink-300 flex items-center justify-center">
                <div className="w-2 h-2 bg-pink-300 rounded-full" />
              </div>
              24/7 Support
            </div>
          </div>

          <Button className="bg-white text-pink-600 hover:bg-gray-50 rounded-full px-8 py-6 text-lg font-bold shadow-xl">
            <Flame className="w-5 h-5 mr-2 text-pink-500" />
            Browse 2,500+ Companions Now
          </Button>
          <p className="text-xs text-pink-200 mt-4 opacity-80">
            * Limited time: 50% off your first booking + Free premium features
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#0f172a] text-gray-400 py-16 text-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <span className="text-2xl font-bold italic text-white" style={{ fontFamily: "cursive" }}>
                  whoredash
                </span>
              </Link>
              <p className="text-xs leading-relaxed mb-6 max-w-xs">
                Premium lifestyle companion booking platform connecting verified professionals with discerning clients.
              </p>
              <div className="flex gap-4">
                <Twitter className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                <Facebook className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">For Clients</h4>
              <ul className="space-y-3 text-xs">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Browse Directory
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Safety & Verification
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">For Companions</h4>
              <ul className="space-y-3 text-xs">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Join Our Platform
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Companion Resources
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Verification Process
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Earnings Guide
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Support</h4>
              <ul className="space-y-3 text-xs">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <div>© 2025 Whoredash. All rights reserved.</div>
            <div className="flex gap-6">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <div className="w-2 h-2 rounded-full bg-purple-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
