import React from 'react'
import Container from './Container'
import SecondaryFooter from './SecondaryFooter'
import Logo from './Logo'
import SocialMedia from './SocialMedia'

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
        </div>
      </Container>
    </footer>
  )
}

export default Footer
