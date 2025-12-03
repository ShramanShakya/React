import React from 'react'
import { Search } from 'lucide-react'

const SearchBar = () => {
  return (
    <div>
      <Search className="w-5 h-5 hover:cursor-pointer hover:text-[var(--color-shop_light_purple)] transition-all duration-150" />
    </div>
  )
}

export default SearchBar
