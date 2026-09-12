import Announcement from './components/Announcement'
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Banners from './components/Banners'
import BestSellers from './components/BestSellers'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Announcement />
      <Header />
      <main>
        <Hero />
        <Categories />
        <Banners />
        <BestSellers />
        <Features />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
