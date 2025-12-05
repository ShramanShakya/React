import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'


const Logo = ({ className, spanDesignN }: {className?:string, spanDesignN?:string}) => {
  return (
    <Link href={"/"}>
        <h2 className={cn("group text-2xl text-[var(--color-shop_dark_purple)] font-black tracking-wider uppercase hover:text-[var(--color-shop_light_purple)] font-sans",className)}>
            SHOPMA
            <span className={cn("text-[var(--color-shop_light_purple)] group-hover:text-[var(--color-shop_dark_purple)] hoverEffect",spanDesignN)}>N</span>
        </h2>
    </Link>
  )
}

export default Logo
