import { Star } from "lucide-react"

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">What our verified clients say</h2>
        <p className="text-gray-500 text-sm mb-4">Join thousands of satisfied clients who trust our platform</p>
        <div className="flex items-center justify-center gap-1 mb-12">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          ))}
          <span className="text-sm font-medium text-gray-600 ml-2">4.9 out of 5 (2,847+ reviews)</span>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              name: "Michael Thompson",
              role: "CEO, Tech Innovations",
              initial: "M",
            },
            {
              name: "James Rodriguez",
              role: "Investment Banking",
              initial: "J",
            },
            {
              name: "David Chen",
              role: "Real Estate Developer",
              initial: "D",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm text-left">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 text-sm mb-6 line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 font-bold">
                  {item.initial}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{item.name}</div>
                  <div className="text-xs text-gray-500">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
