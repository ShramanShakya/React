"use client"
import { AlignLeft } from 'lucide-react'
import React from 'react'
import SideMenu from './SideMenu'
import { useState } from 'react'

const MobileMenu = () => {
    const [isSiderbarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
    <button onClick={()=> setIsSidebarOpen(!isSiderbarOpen)}>
      <AlignLeft className='h-5 w-5 text-black hover:text-[var(--color-shop_light_purple)] transition-colors duration-100 hover:cursor-pointer md:hidden'/>
    </button>
    <div className="md:hidden">
        <SideMenu 
        isOpen={isSiderbarOpen}
        onClose={()=> setIsSidebarOpen(false)}
        />
    </div>
    </>
  )
}

export default MobileMenu
