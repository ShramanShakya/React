import React from 'react'
import Container from './Container'
import SecondaryFooter from './SecondaryFooter'
import Logo from './Logo'
import SocialMedia from './SocialMedia'
import Link from 'next/link'
import { categoriesData, quickLinkData } from './Constants/Data'
import { Button } from './ui/button'
import { Input } from './ui/input'

const Footer = () => {
  return (
    <footer className="bg-white border-t"> 
      <Container>
        <SecondaryFooter/>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo/>
            <p className="text-gray-600 text-sm">Discover your own needed items for either kitchen ware,or gaming or anything to blend with your style 
            and make your life more easier and comfortable with Shopman.
            </p>
            <SocialMedia className="text-darkColor/60" iconClassName="border-darkColor/60 hover:border-(--color-shop_light_purple) hover:text-(--color-shop_dark_purple)"
            tooltipClassName="bg-darkColor text-white"
            />
          </div>
          <div>
            <span className="font-semibold text-gray-900 font-sans">Quick Links</span>
            <ul className="space-y-3 mt-4">
              {quickLinkData?.map((item)=>(
                <li key={item?.title}>
                  <Link href={item?.href} className="hover:text-(--color-shop_light_purple) transition-colors duration-200">
                  {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="font-semibold text-gray-900 font-sans">Categories</span>
            <ul className="space-y-3 mt-4">
              {categoriesData?.map((item)=>(
                <li key={item?.title}>
                  <Link href={`/category/${item?.href}`} className="hover:text-(--color-shop_light_purple) transition-colors duration-200">
                  {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="font-semibold text-gray-900 font-sans">Newsletter</span>
            <p className="font-semobold text-gray-900">Subscribe to our newsletter to receive updates and exclusive offers</p>
            <form className="space-y-3">
              <Input placeholder="Enter your email" type="email" required/>
              <Button className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
