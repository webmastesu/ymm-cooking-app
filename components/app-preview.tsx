"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, Heart, Share2 } from "lucide-react"

const appScreenshots = [
  {
    id: 1,
    title: "Home Screen",
    description: "Discover recipes with beautiful categories",
    image: "/images/app-home.jpg",
    color: "from-orange-400 to-red-500"
  },
  {
    id: 2,
    title: "Categories",
    description: "Browse by cuisine type and difficulty",
    image: "/images/app-categories.jpg",
    color: "from-green-400 to-blue-500"
  },
  {
    id: 3,
    title: "Recipe Details",
    description: "Step-by-step cooking instructions",
    image: "/images/app-recipe.jpg",
    color: "from-purple-400 to-pink-500"
  },
  {
    id: 4,
    title: "Explore",
    description: "Find new recipes and cooking tips",
    image: "/images/app-explore.jpg",
    color: "from-yellow-400 to-orange-500"
  }
]

export default function AppPreview() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % appScreenshots.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + appScreenshots.length) % appScreenshots.length)
  }

  if (!isLoaded) {
    return (
      <div className="w-full h-[500px] flex items-center justify-center bg-gradient-to-br from-orange-50 to-lime-50 rounded-lg">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading App Preview...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Phone Frame */}
      <div className="relative bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
        <div className="bg-white rounded-[2.5rem] overflow-hidden">
          {/* Status Bar */}
          <div className="bg-gradient-to-r from-orange-400 to-red-500 h-8 flex items-center justify-between px-6 text-white text-sm font-medium">
            <span>9:41</span>
            <span>YMM COOKING</span>
            <div className="flex space-x-1">
              <div className="w-4 h-2 bg-white rounded-sm"></div>
              <div className="w-6 h-2 bg-white rounded-sm"></div>
            </div>
          </div>

          {/* App Content */}
          <div className="relative h-[600px] overflow-hidden">
            {/* Current Screenshot */}
            <div className="relative w-full h-full">
              <img
                src={appScreenshots[currentSlide].image}
                alt={appScreenshots[currentSlide].title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to gradient background if image fails to load
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  target.parentElement!.innerHTML = `
                    <div class="w-full h-full bg-gradient-to-br ${appScreenshots[currentSlide].color} flex items-center justify-center">
                      <div class="text-center text-white">
                        <div class="text-4xl mb-4">📱</div>
                        <h3 class="text-xl font-bold">${appScreenshots[currentSlide].title}</h3>
                        <p class="text-sm opacity-90">${appScreenshots[currentSlide].description}</p>
                      </div>
                    </div>
                  `
                }}
              />
              
              {/* Overlay with app info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-xl font-bold mb-2">
                  {appScreenshots[currentSlide].title}
                </h3>
                <p className="text-white/90 text-sm">
                  {appScreenshots[currentSlide].description}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Action Buttons */}
            <div className="absolute top-4 right-4 flex space-x-2">
              <button className="bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors">
                <Heart className="w-4 h-4" />
              </button>
              <button className="bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Home Indicator */}
          <div className="flex justify-center py-2">
            <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {appScreenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-orange-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Play Button */}
      <div className="text-center mt-6">
        <button className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-500 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          <Play className="w-5 h-5 inline mr-2" />
          Try Interactive Demo
        </button>
        <p className="text-gray-600 text-sm mt-2">Experience the full app</p>
      </div>
    </div>
  )
}
