import React from 'react'
import { Title } from './MiddleText'
import { Category } from '@/sanity.types'


const HomeCategories = ({ categories }: {categories: Category[] }) => {
  return (
    <div className="bg-white border border-shop_light_purple my-10 md:my-20 p-5 lg:p-7 rounded-md">
      <Title className="border-b pb-3">Popular Category</Title>
      <div>{categories.map((category) => <div>category</div>)}</div>
    </div>
  )
}

export default HomeCategories;
