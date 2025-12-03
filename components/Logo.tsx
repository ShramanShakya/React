import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const Logo = ({ className }: {className?:string}) => {
  return (
    <Link href={"/"}>
        <h2 className={cn("group text-2xl text-[var(--color-shop_dark_purple)] font-black tracking-wider uppercase hover:text-[var(--color-shop_light_purple)] font-sans",className)}>
            SHOPMA
            <span className="text-[var(--color-shop_light_purple)] 
            group-hover:text-[var(--color-shop_dark_purple)] hoverEffect">N</span>
        </h2>
    </Link>
  )
}

export default Logo
