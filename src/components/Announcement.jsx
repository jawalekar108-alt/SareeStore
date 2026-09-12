import { Truck, RotateCcw, ShieldCheck } from 'lucide-react'

export default function Announcement() {
  return (
    <div className="bg-cream text-ink text-xs sm:text-sm">
      <div className="max-w-content mx-auto flex items-center justify-center gap-6 sm:gap-10 py-2 px-4 overflow-x-auto whitespace-nowrap">
        <span className="flex items-center gap-1.5">
          <Truck size={14} strokeWidth={2} /> Free Shipping on orders over $50
        </span>
        <span className="flex items-center gap-1.5">
          <RotateCcw size={14} strokeWidth={2} /> 30-Day Returns
        </span>
        <span className="flex items-center gap-1.5">
          <ShieldCheck size={14} strokeWidth={2} /> Secure Payment
        </span>
      </div>
    </div>
  )
}
