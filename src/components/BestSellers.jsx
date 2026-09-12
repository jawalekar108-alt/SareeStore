import { Heart, Star, ShoppingCart, ArrowRight } from 'lucide-react'
import sweater from '../assets/prod_sweater.png'
import sneakers from '../assets/prod_sneakers.png'
import handbag from '../assets/prod_handbag.png'
import watch from '../assets/prod_watch.png'
import sunglasses from '../assets/prod_sunglasses.png'
import jacket from '../assets/prod_jacket.png'

const products = [
  { name: 'Oversized Sweater', price: 49.99, rating: 4.8, img: sweater },
  { name: 'Classic Sneakers', price: 69.99, rating: 4.7, img: sneakers },
  { name: 'Luxury Handbag', price: 89.99, rating: 4.9, img: handbag },
  { name: 'Smart Watch Pro', price: 129.99, rating: 4.6, img: watch },
  { name: 'UV Protection Shades', price: 29.99, rating: 4.8, img: sunglasses },
  { name: 'Denim Jacket', price: 59.99, rating: 4.7, img: jacket },
]

export default function BestSellers() {
  return (
    <section id="best-sellers" className="max-w-content mx-auto px-4 sm:px-6 py-10">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold">Best Sellers</h2>
        <a href="#" className="text-sm font-medium flex items-center gap-1 hover:text-clay">
          View All Products <ArrowRight size={15} />
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
        {products.map((p) => (
          <div key={p.name} className="group">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#F1EFEC]">
              <img src={p.img} alt={p.name} className="img-cover" />
              <button
                aria-label={`Add ${p.name} to wishlist`}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white"
              >
                <Heart size={15} />
              </button>
              <span className="absolute bottom-3 left-3 bg-white/95 text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                <Star size={12} className="fill-clay text-clay" /> {p.rating}
              </span>
            </div>
            <h3 className="mt-3 text-sm font-medium leading-snug">{p.name}</h3>
            <p className="text-sm font-semibold mt-0.5">${p.price.toFixed(2)}</p>
            <button className="mt-2 w-full flex items-center justify-center gap-1.5 border border-ink/15 rounded-full py-2 text-xs sm:text-sm font-medium hover:bg-ink hover:text-white transition-colors">
              <ShoppingCart size={14} /> Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
