import Link from 'next/link'
import React from 'react'
import { Heart } from 'lucide-react'


const FavouriteButton = () => {
  return (
    <Link href ={"/cart"} className="group relative">
        <span className="absolute -top-1 -right-1 bg-[var(--color-shop_dark_purple)] text-white h-4 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
          0
        </span>
        <Heart className="h-6 w-5.5 text-[var(--color-shop_dark_purple)] group-hover:text-white transition-colors duration-200" />
    </Link>
  )
}

export default FavouriteButton
