import React from 'react'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { Product } from '@/sanity.types'

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="text-sm border border-black rounded-md bg-white group  ">
      <div className="relative group overflow-hidden bg-(--color-shop_light_bg)">
        {product?.images && (
          <Image src={urlFor(product?.images[0]).url()}
            alt="Product Image" loading="lazy" width={700} height={700}
          />
        )}
      {product?.status === "sale" && (
        <p className = "absolute top-2 left-2 z-10 text-xs border border-black/50 px-2 rounded-full group-hover:border-(--shop_dark_purple) group-hover:text-(--shop_dark_purple) hoverEffect">Sale!</p>
      )}
      </div>
      <div className="p-3">
        Product details
      </div>
    </div>
  );
}

export default ProductCard
