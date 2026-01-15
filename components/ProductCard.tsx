import React from 'react'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { Product } from '@/sanity.types'
import { Flame,} from 'lucide-react'
import Link from 'next/link'
import AddToWishlistButton from './AddToWishlistButton'

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="text-sm border border-black rounded-md bg-white group  ">
      <div className="relative group overflow-hidden bg-(--color-shop_light_bg)">
        {product?.images && (
          <Image src={urlFor(product?.images[0]).url()}
            alt="Product Image" loading="lazy" width={700} height={700}
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
      <div className="p-3">
        Product details
      </div>
    </div>
  );
}

export default ProductCard
