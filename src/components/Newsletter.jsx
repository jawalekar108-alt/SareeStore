import { useState } from 'react'
import { Mail } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <section className="max-w-content mx-auto px-4 sm:px-6 pb-14">
      <div className="bg-cream rounded-3xl p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0">
          <Mail size={20} className="text-clay" />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h3 className="font-serif text-xl sm:text-2xl font-semibold">Get 10% Off Your First Order!</h3>
          <p className="text-sm text-ink/60 mt-1">Join our newsletter for exclusive offers and new arrivals.</p>
        </div>
        <form onSubmit={handleSubmit} className="flex w-full sm:w-auto gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 sm:w-64 px-4 py-3 rounded-full border border-black/10 text-sm focus:outline-none focus:ring-2 focus:ring-clay/40"
          />
          <button
            type="submit"
            className="bg-ink text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-ink/90 whitespace-nowrap"
          >
            {submitted ? 'Subscribed ✓' : 'Subscribe'}
          </button>
        </form>
      </div>
    </section>
  )
}
