import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import SearchBar from './SearchBar'
import Carticon from './Carticon'
import FavouriteButton from './FavouriteButton'

const Header = () => {
  return (
    <header className="bg-white py-5 border-b border-b-black/20"> 
      <Container className="flex items-center justify-between">
        <Logo/>
        <HeaderMenu/>
      <div className ="w-auto md:w-1/3 flex items-center justify-end gap-5">
        <SearchBar/>
        <Carticon/>
        <FavouriteButton/>
      </div>
      </Container>
    </header>
  )
}

export default Header
