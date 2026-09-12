import women from '../assets/cat_women.png'
import men from '../assets/cat_men.png'
import kids from '../assets/cat_kids.png'
import shoes from '../assets/cat_shoes.png'
import bags from '../assets/cat_bags.png'
import watches from '../assets/cat_watches.png'
import sunglasses from '../assets/cat_sunglasses.png'
import jewelry from '../assets/cat_jewelry.png'
import accessories from '../assets/cat_accessories.png'
import sale from '../assets/cat_sale.png'

const categories = [
  { name: 'Women', img: women },
  { name: 'Men', img: men },
  { name: 'Kids', img: kids },
  { name: 'Shoes', img: shoes },
  { name: 'Bags', img: bags },
  { name: 'Watches', img: watches },
  { name: 'Sunglasses', img: sunglasses },
  { name: 'Jewelry', img: jewelry },
  { name: 'Accessories', img: accessories },
  { name: 'Sale', img: sale },
]

export default function Categories() {
  return (
    <section className="max-w-content mx-auto px-4 sm:px-6 py-6">
      <div className="grid grid-cols-5 sm:grid-cols-10 gap-y-6 gap-x-2 text-center">
        {categories.map((c) => (
          <a key={c.name} href="#" className="flex flex-col items-center gap-2 group">
            <span className="block w-16 h-16 sm:w-[70px] sm:h-[70px] rounded-full overflow-hidden ring-1 ring-black/5 group-hover:ring-clay/60 transition">
              <img src={c.img} alt={c.name} className="img-cover" />
            </span>
            <span className="text-xs sm:text-sm font-medium">{c.name}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
