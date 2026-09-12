import { ChevronRight } from 'lucide-react'
import summer from '../assets/banner_summer.png'
import men from '../assets/banner_men.png'
import sale from '../assets/banner_sale.png'

const banners = [
  {
    img: summer,
    tone: 'bg-cream',
    title: 'Summer Collection 2024',
    text: 'Fresh styles for every moment.',
    cta: 'Shop Women',
  },
  {
    img: men,
    tone: 'bg-[#D8E3EE]',
    title: "Men's Essentials",
    text: 'Timeless looks for every man.',
    cta: 'Shop Men',
  },
  {
    img: sale,
    tone: 'bg-cream',
    title: 'Big Sale Up to 50% Off',
    text: "Don't miss out on exclusive deals!",
    cta: 'Shop Now',
  },
]

export default function Banners() {
  return (
    <section id="collections" className="max-w-content mx-auto px-4 sm:px-6 py-6 relative">
      <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
        {banners.map((b) => (
          <div key={b.title} className={`relative rounded-3xl overflow-hidden aspect-[382/188] ${b.tone}`}>
            <img src={b.img} alt={b.title} className="img-cover absolute inset-0" />
          </div>
        ))}
      </div>
      <button
        aria-label="Next promotions"
        className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-md items-center justify-center hover:bg-black/5"
      >
        <ChevronRight size={18} />
      </button>
    </section>
  )
}
