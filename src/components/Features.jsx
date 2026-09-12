import { Truck, RotateCcw, ShieldCheck, Headphones } from 'lucide-react'

const features = [
  { icon: Truck, title: 'Free Shipping', text: 'On orders over $50' },
  { icon: RotateCcw, title: '30-Day Returns', text: 'Hassle-free returns' },
  { icon: ShieldCheck, title: 'Secure Payment', text: '100% secure checkout' },
  { icon: Headphones, title: '24/7 Support', text: "We're here to help" },
]

export default function Features() {
  return (
    <section className="bg-[#F7F6F4] py-8">
      <div className="max-w-content mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
        {features.map((f) => (
          <div key={f.title} className="flex items-center gap-3">
            <f.icon size={26} strokeWidth={1.5} className="shrink-0" />
            <div>
              <p className="font-semibold text-sm">{f.title}</p>
              <p className="text-xs text-ink/60">{f.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
