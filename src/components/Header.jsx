import { useState } from 'react'
import { Search, User, Heart, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react'

const navLinks = ['Home', 'Shop', 'Women', 'Men', 'Kids', 'Collections', 'Sale', 'About Us', 'Contact']

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-black/5 sticky top-0 bg-white/95 backdrop-blur z-40">
      <div className="max-w-content mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-baseline gap-1 shrink-0">
          <span className="font-serif text-2xl font-semibold tracking-tight">Luxe.</span>
          <span className="text-clay text-lg -translate-y-1">✦</span>
        </a>
        <span className="hidden sm:block -ml-4 text-[10px] tracking-[0.25em] text-ink/60 self-end mb-1">FASHION</span>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
          {navLinks.map((link) =>
            link === 'Home' ? (
              <a key={link} href="#" className="px-4 py-2 rounded-full bg-ink text-white">
                {link}
              </a>
            ) : link === 'Shop' ? (
              <a key={link} href="#" className="px-4 py-2 rounded-full hover:bg-black/5 flex items-center gap-1">
                {link} <ChevronDown size={14} />
              </a>
            ) : (
              <a key={link} href="#" className="px-4 py-2 rounded-full hover:bg-black/5">
                {link}
              </a>
            )
          )}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4 sm:gap-5 shrink-0">
          <button aria-label="Search" className="hover:opacity-70">
            <Search size={20} />
          </button>
          <button aria-label="Account" className="hidden sm:inline hover:opacity-70">
            <User size={20} />
          </button>
          <button aria-label="Wishlist" className="relative hidden sm:inline hover:opacity-70">
            <Heart size={20} />
            <span className="absolute -top-2 -right-2 bg-clay text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
              2
            </span>
          </button>
          <button aria-label="Cart" className="relative hover:opacity-70">
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-clay text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>
          <button aria-label="Menu" className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="lg:hidden flex flex-col gap-1 px-4 pb-4 text-sm font-medium">
          {navLinks.map((link) => (
            <a key={link} href="#" className="px-3 py-2 rounded-lg hover:bg-black/5">
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
