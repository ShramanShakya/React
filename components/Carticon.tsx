import React from 'react'
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'

const Carticon = () => {
  return (
    <Link href ={"/cart"} className="group relative">
        <span className="absolute -top-1 -right-1 bg-[var(--color-shop_dark_purple)] text-white h-4 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">0</span>
      <ShoppingBag/>
    </Link>
  )
}

export default Carticon
