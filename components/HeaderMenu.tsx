"use client";

import React from 'react'
import { headerData } from './Constants/Data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import path from 'path';
const HeaderMenu = () => {
    const pathname = usePathname();
  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-7 text-sm font-semibold text-[var(--color-lightColor) ">
      {headerData?.map((item) => (
        <Link key={item?.title} href={item?.href} className={
          `hover:text-(--color-shop_light_purple) hoverEffect relative group${pathname === item.href ? ' text-(--color-shop_light_purple)' : ''}`
        }>
            {item?.title}
            <span className={`absolute left-1/2 -bottom-0.5 h-0.5 bg-[var(--color-shop_light_purple)] transition-all duration-50 group-hover:w-full group-hover:-translate-x-1/2${pathname === item.href ? ' w-1/2 -translate-x-1/2' : ' w-0'}`} />
        </Link>
      ))}
    </div>
  )
}

export default HeaderMenu
