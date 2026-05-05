import React from 'react'
import { Title } from './MiddleText'
import Link from 'next/link'
import { getBrands } from '@/sanity/queries'

const ShopByBrands = async() => {
    const brands = await getBrands();

  return (
    <div className="mb-10 lg:pb-20 bg-(--color-shop_light-bg) p-5 lg:p-7 rounded-md">
        <div className="flex items-center justify-between gap-5 mb-10">
        <Title>Shop By Brands</Title>
        <Link
            href={"/shop"}
            className="text-sm font-semibold tracking-wide hover:text-(--color-shop_light_purple) hoverEffect"
        >
            View all
        </Link>
    </div>
    </div>
  )
}

export default ShopByBrands;
