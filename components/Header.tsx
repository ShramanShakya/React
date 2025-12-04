import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import SearchBar from './SearchBar'
import Carticon from './Carticon'
import FavouriteButton from './FavouriteButton'
import SignIn from './SignIn'
import MobileMenu from './MobileMenu'

const Header = () => {
  return (
    <header className="bg-white py-5 border-b border-b-black/20"> 
      <Container className="flex items-center justify-between">
        <div className='flex items-center gap-2.5 md:gap-3 justify-start w-auto md:w-1/3 text-[var(--color-lightColor)]'>
          <MobileMenu/>
          <Logo/>
        </div>
        <HeaderMenu/>
      <div className ="w-auto md:w-1/3 flex items-center justify-end gap-5">
        <SearchBar/>
        <Carticon/>
        <FavouriteButton/>
        <SignIn/>
      </div>
      </Container>
    </header>
  )
}

export default Header
