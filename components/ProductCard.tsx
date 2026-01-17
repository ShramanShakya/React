import React from 'react'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { Product } from '@/sanity.types'
import { Flame, StarIcon,} from 'lucide-react'
import Link from 'next/link'
import AddToWishlistButton from './AddToWishlistButton'

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="text-sm border border-black rounded-md bg-white group  ">
      <div className="relative group overflow-hidden bg-(--color-shop_light_bg)">
        {product?.images && (
          <Image src={urlFor(product?.images[0]).url()}
            alt="Product Image" 
            loading="lazy" 
            width={700} 
            height={700}
            className={`w-full h-64 object-contain overflow-hidden transition-transform bg-shop_lighter_bg hoverEffect
            ${product?.stock !==0 ? "group-hover:scale-105" : "opacity-50"}`}
          />
        )}
        <AddToWishlistButton product={product}/>
      {product?.status === "sale" && (
        <p className="absolute top-2 left-2 z-10 text-xs border border-black/50 px-2 rounded-full 
        group-hover:border-(--color-shop_dark_purple) group-hover:text-(--color-shop_light_purple) hoverEffect">Sale!</p>
      )}
      {product?.status === "new" && (
        <p className="absolute top-2 left-2 z-10 text-xs border border-black/50 px-2 rounded-full 
        hoverEffect group-hover:border-(--color-shop_dark_purple) group-hover:text-(--color-shop_light_purple)">New Arrival!</p>
      )}
      {product?.status === "hot" && <Link
        href={"/deal"}
        className="absolute top-2 left-2 z-10 border border-orange/50 p-1 rounded-full 
         group-hover:border-(--color-shop_orange) group-hover:text-(--color-shop_orange) hoverEffect"
        >
          <Flame
            size={18}
            fill = "#fb6c08"
            className="text-(--color-shop_orange) group-hover:border-(--color-shop_orange) hoverEffect "
        />
        </Link>}
      </div>
      <div className="p-3 flex flex-col gap-2">
        {product?.categories && (
          <p className="uppercase line-clamp-1 text-xs text-text-(--color_light_text)">
            {product?.categories?.map((cat)=>cat).join(", ")}
          </p>)}
          <title className="text-sm line-clamp-1">{product?.name}</title>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_,index)=>(
                <StarIcon 
                size={14}
                key={index} 
                className={index < 4 ? "text-(--color-shop_light_purple)" : "text-(--color-shop_lighter_text)"}
                fill = {index < 4 ? "#a766f2" : "#bc94e9"}
                />
              ))}
            </div>
            <p className="text-xd tracking-wide">Reviews</p>
          </div>
          <div className="flex items-center gap-2.5">
            <p className="font-medium">
              In Stock
            </p>
            <p className="Text-(--color-shop_light_purple) font-semibold">
              {(product?.stock as number) > 0 ?product?.stock : "unavailable"}
            </p>
          </div>
      </div>
    </div>
  );
}

export default ProductCard
