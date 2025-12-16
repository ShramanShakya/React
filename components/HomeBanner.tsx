import React from 'react'
import { Title } from './MiddleText';
import Link from 'next/link';
import { head, isolated } from '@/images';
import Image from 'next/image';


const HomeBanner = () => {
  return (
    <div className="py-16 md:py-0 bg-(--color-shop_light_cream) rounded-lg px-10 lg:px-24 flex items-center justify-between">
<div className="space-y-5">
  <Title>
    Grab Upto 50% off on <br />
    Selected Products
  </Title>
  <div className="h-6" />
  <Link href={"/shop"} className="bg-(--color-shop_dark_purple) text-white/90 px-5 py-2 rounded-md text-sm font-semibold hover:text-white
  hover:bg-(--color-shop_light_purple) hoverEffect">Buy Now</Link>
</div>  
    <div>
      <Image src={head} alt="Isolated Product" className="hidden md:inline-flex w-96" />
    </div>   
    </div>
  )
}

export default HomeBanner
