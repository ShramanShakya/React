import React from 'react'
import { FC } from 'react'
import Logo from './Logo'
import { X } from 'lucide-react'
import Link from 'next/link'
import { headerData } from './Constants/Data'
import { usePathname } from 'next/navigation'
import SocialMedia from './SocialMedia'

interface SideBarProps{
    isOpen: boolean;
    onClose: ()=> void;
}

const SideMenu : FC<SideBarProps>=({isOpen, onClose}) => {
    const pathname = usePathname();
  return (
    <div className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 text-white shadow-xl ${isOpen? 'translate-x-0': '-translate-x-full'}hoverEffect`}>
        <div className="min-wd-72 max-w-96 bg-black h-screen p-10 border-r border-r-purple">
            <div className="flex items-center justify-between gap-5 pb-5">
                <Logo className="text-white" spanDesignN="group-hover:text-white"/> 
                <button className="hover:text-[var(--color-shop_light_purple)] absolute top-5 right-5" onClick={onClose}> 
                    <X/>
                </button>
            </div>
            <div className="flex flex-col space-y-4 font-semibold tracking-wide pb-5">
                {headerData?.map((item)=>(
                    <Link href={item?.href} key={item?.title} className={`hover:text-[var(--color-shop_light_purple)] hoverEffect ${pathname === item?.href ? "text-[var(--color-shop_light_purple)]" : ""}`}>
                        {item?.title}
                    </Link>
                ))}
            </div>
                <SocialMedia />
        </div>
    </div>
  )
}

export default SideMenu
