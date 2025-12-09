import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import SearchBar from './SearchBar'
import Carticon from './Carticon'
import FavouriteButton from './FavouriteButton'
import SignIn from './SignIn'
import MobileMenu from './MobileMenu'
import { currentUser } from '@clerk/nextjs/server'
import { ClerkLoaded } from '@clerk/nextjs'
import { SignedIn, UserButton } from '@clerk/nextjs'

const Header = async() => {
  const user = await currentUser();
  console.log(user, "user");

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
        <ClerkLoaded>
          <SignedIn>
            <UserButton/>
          </SignedIn>
          {!user && <SignIn/>}
        </ClerkLoaded>
      </div>
      </Container>
    </header>
  )
}

export default Header
