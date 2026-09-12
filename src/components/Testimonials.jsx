import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import jessica from '../assets/test_jessica.png'
import david from '../assets/test_david.png'
import sophia from '../assets/test_sophia.png'

const reviews = [
  {
    name: 'Jessica M.',
    tag: 'Verified Buyer',
    img: jessica,
    text: 'Amazing quality and fast delivery! Luxe Fashion is my go-to store now.',
  },
  {
    name: 'David K.',
    tag: 'Verified Buyer',
    img: david,
    text: 'Stylish collection and great customer service. Highly recommend!',
  },
  {
    name: 'Sophia R.',
    tag: 'Verified Buyer',
    img: sophia,
    text: 'Love the designs! The fabric quality is top-notch and super comfortable.',
  },
]

export default function Testimonials() {
  return (
    <section className="max-w-content mx-auto px-4 sm:px-6 py-12 relative">
      <div className="flex items-center gap-2 justify-center mb-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-center">What Our Customers Say</h2>
        <span className="text-clay">✦</span>
      </div>

      <div className="grid sm:grid-cols-3 gap-5">
        {reviews.map((r) => (
          <div key={r.name} className="border border-black/10 rounded-2xl p-5 flex gap-4">
            <img src={r.img} alt={r.name} className="w-14 h-14 rounded-full object-cover shrink-0" />
            <div>
              <p className="text-sm text-ink/80 leading-relaxed">{r.text}</p>
              <div className="flex gap-0.5 mt-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-clay text-clay" />
                ))}
              </div>
              <p className="text-sm font-semibold mt-1">{r.name}</p>
              <p className="text-xs text-ink/50">{r.tag}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        aria-label="Previous testimonial"
        className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-md items-center justify-center hover:bg-black/5"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        aria-label="Next testimonial"
        className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-md items-center justify-center hover:bg-black/5"
      >
        <ChevronRight size={18} />
      </button>
    </section>
  )
}
