import Link from 'next/link'
import React from 'react'
import { productType } from './Constants/Data'

interface Props{
    selectedTab: string;
    onTabSelect: (tab: string) => void;
}

const HomeTabBar = ({ selectedTab, onTabSelect }: Props) => {
  console.log(selectedTab);
  return (
    <div className="flex items-center justify-between flex-wrap gap-5">
        <div className="flex items-center gap-3 text-sm font-semibold">
            {productType?.map((item) =>(
                <button 
                onClick={() => onTabSelect(item?.title)}
                key={item?.title} 
                className={`border border-gray-300
                    px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-(--color-shop_dark_purple) 
                    hover:border-(--color-shop_dark_purple) text-white 
                    ${selectedTab === item?.title ? "bg-(--color-shop_dark_purple)" : "bg-black"}`}>
                      {item?.title}</button>
            ))}
        </div>
      <div>Left </div>
        <Link href={"/shop"} className="border border-gray-300
                    px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-(--color-shop_dark_purple) 
                    hover:border-(--color-shop_dark_purple) hover:text-white">See all</Link>
    </div>
  )
}

export default HomeTabBar
