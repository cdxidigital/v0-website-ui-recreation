import { Star, MapPin } from "lucide-react"

export function Trending() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Trending Companions Near You</h2>
            <div className="flex items-center gap-2 text-sm text-orange-500 font-medium">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Most booked this week • Available now
            </div>
          </div>
          <a href="#" className="text-sm font-bold text-gray-900 hover:text-pink-600 transition-colors">
            View All 2,500+ →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="group relative rounded-xl overflow-hidden bg-gray-100 aspect-[3/4]">
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                <div className="flex justify-between items-start mb-1">
                  <div className="font-bold text-lg">Sarah, 24</div>
                  <div className="flex items-center gap-1 text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    4.9
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-300">
                  <MapPin className="w-3 h-3" />
                  2.5 miles away
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
