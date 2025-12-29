import React from 'react'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { Product } from '@/sanity.types'

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div>
      <div>
        {product?.images && (
          <Image src={urlFor(product?.images[0]).url()}
            alt="Product Image" loading="lazy" width={700} height={700}
          />
        )}
      </div>
    </div>
  );
}

export default ProductCard
