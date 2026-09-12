import { ArrowRight } from 'lucide-react'
import heroModel from '../assets/hero_model.png'
import trustAvatars from '../assets/trust_avatars.png'

export default function Hero() {
  return (
    <section className="max-w-content mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left copy */}
        <div>
          <div className="flex items-center gap-2 text-clay font-semibold text-sm mb-4">
            <span>✦</span> NEW ARRIVALS
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] font-semibold">
            Discover Your
            <br />
            Style. <span className="text-clay">Live Luxe.</span>
          </h1>
          <p className="mt-5 text-ink/60 text-base sm:text-lg max-w-sm">
            Premium quality fashion for modern lifestyles.
          </p>
          <div className="mt-7 flex items-center gap-4">
            <a
              href="#best-sellers"
              className="inline-flex items-center gap-2 bg-ink text-white px-6 py-3.5 rounded-full font-medium hover:bg-ink/90 transition-colors"
            >
              Shop Now <ArrowRight size={16} />
            </a>
            <a
              href="#collections"
              className="inline-flex items-center gap-2 border border-ink/20 px-6 py-3.5 rounded-full font-medium hover:bg-black/5 transition-colors"
            >
              Explore Collection
            </a>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <img src={trustAvatars} alt="Happy customers" className="h-10 w-auto" />
            <span className="text-sm text-ink/60">Trusted by 100K+ happy customers</span>
          </div>
        </div>

        {/* Right image */}
        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-[382/250]">
          <img src={heroModel} alt="Woman wearing a beige blazer" className="img-cover" />
        </div>
      </div>
    </section>
  )
}
