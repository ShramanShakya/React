import React from 'react'
import { FC } from 'react'
import Logo from './Logo'
import { X } from 'lucide-react'


interface SideBarProps{
    isOpen: boolean;
    onClose: ()=> void;
}

const SideMenu : FC<SideBarProps>=({isOpen, onClose}) => {
  return (
    <div className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 text-white shadow-xl ${isOpen? 'translate-x-0': '-translate-x-full'}hoverEffect`}>
        <div className="min-wd-72 max-w-96 bg-black h-screen p-10 border-r border-r-purple">
            <div className="flex items-center justify-between gap-5">
                <Logo className="text-white" spanDesignN="group-hover:text-white"/> 
                <button className="hover:text-[var(--color-shop_light_purple)] absolute top-5 right-5" onClick={onClose}> 
                    <X/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default SideMenu
