import React from 'react'
import { Title } from './MiddleText';
import Link from 'next/link';

const HomeBanner = () => {
  return (
    <div className="py-16 md:py-0 bg-(--color-shop_light_cream) rounded-lg px-10 lg:px-24 flex items-center justify-between">
<div>
  <Title>
    Grab Upto 50% off on <br />
    Selected Products
  </Title>
  <Link href={"/shop"} className="bg-shop_dark_purple">Buy Now</Link>
</div>  
    <div></div>   
    </div>
  )
}

export default HomeBanner
