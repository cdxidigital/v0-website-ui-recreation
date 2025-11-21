import { Flame, Wine, Theater, MessageCircle, Users, Plane, Gamepad2, Dumbbell } from "lucide-react"

const categories = [
  { name: "Bedroom Fun", icon: Flame, color: "from-red-400 to-pink-500" },
  { name: "Intimate Dining", icon: Wine, color: "from-purple-400 to-pink-400" },
  { name: "Role Play", icon: Theater, color: "from-pink-400 to-rose-500" },
  { name: "Message", icon: MessageCircle, color: "from-indigo-400 to-purple-500" },
  { name: "Social Events", icon: Users, color: "from-yellow-400 to-orange-500" },
  { name: "Travel", icon: Plane, color: "from-blue-400 to-indigo-500" },
  { name: "Gaming", icon: Gamepad2, color: "from-green-400 to-emerald-500" },
  { name: "Fitness", icon: Dumbbell, color: "from-orange-400 to-red-500" },
]

export function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Browse by category</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {categories.map((category, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl p-6 aspect-[2/1] flex flex-col items-center justify-center text-white shadow-md hover:shadow-lg transition-all cursor-pointer bg-gradient-to-br ${category.color}`}
            >
              <category.icon className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-sm md:text-base">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
