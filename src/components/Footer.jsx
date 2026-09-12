import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react'

const shopLinks = ['All Products', 'Women', 'Men', 'Kids', 'Shoes', 'Bags', 'Accessories', 'Sale']
const serviceLinks = ['Contact Us', 'Shipping & Delivery', 'Returns & Refunds', 'FAQ', 'Size Guide', 'Track Order']
const companyLinks = ['About Us', 'Careers', 'Blog', 'Sustainability', 'Affiliate Program']

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/5">
      <div className="max-w-content mx-auto px-4 sm:px-6 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <a href="#" className="flex items-baseline gap-1">
            <span className="font-serif text-2xl font-semibold">Luxe.</span>
            <span className="text-clay">✦</span>
          </a>
          <p className="text-xs tracking-[0.25em] text-ink/50 mt-1">FASHION</p>
          <p className="text-sm text-ink/60 mt-4 max-w-xs">Premium quality fashion for modern lifestyles.</p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Shop" links={shopLinks} />
        <FooterCol title="Customer Service" links={serviceLinks} />
        <FooterCol title="Company" links={companyLinks} />

        <div>
          <h4 className="font-semibold text-sm mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-ink/60">
            <li className="flex items-center gap-2">
              <Phone size={14} /> +1 (800) 123-4567
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} /> support@luxefashion.com
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0" /> 123 Fashion Street, New York, NY 10001, USA
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-black/5">
        <div className="max-w-content mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink/50">
          <p>© 2024 Luxe Fashion. All rights reserved.</p>
          <div className="flex gap-3 items-center font-medium">
            <span>VISA</span>
            <span>Mastercard</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
            <span>G Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="font-semibold text-sm mb-4">{title}</h4>
      <ul className="space-y-2.5 text-sm text-ink/60">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="hover:text-ink">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
