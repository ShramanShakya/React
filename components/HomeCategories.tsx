import React from 'react'
import { Title } from './MiddleText'
import { Category } from '@/sanity.types'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'

const HomeCategories = ({ categories }: { categories: Category[] }) => {
  return (
    <div className="bg-white border border-shop_light_purple my-10 md:my-20 p-5 lg:p-7 rounded-md">
      <Title className="border-b pb-3">Popular Category</Title>
      <div>
        {categories?.map((category) => (
          <div key={category?._id}>{category?.image && (
            <div className="overflow-hidden border border-shop_light_purple hover:border-shop_dark_purple hoverEffect w-20 h-20 p-1">
              <Link href={`/category/${category?.slug?.current}`}>
                <Image
                  src={urlFor(category?.image).url()}
                  alt="categoryImage"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain group-hover:scale-110 hoverEffect"
                />
              </Link>
            </div>
          )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeCategories