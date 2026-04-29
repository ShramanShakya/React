import React from 'react'
interface Props{
    product: Product;
    className?: string;
}
import { Button } from './ui/button'
import { ShoppingBag } from 'lucide-react';
import { Product } from '@/sanity.types';
import { cn } from '@/lib/utils';

const AddToCartButton = ({ product, className }: Props) => {
    const isOutofStock = product.stock === 0;
    const handleAddToCart = () => {
        window.alert("added to cart")
    }
  return (
    <div>
      <Button
      onClick={handleAddToCart}
        disabled={isOutofStock}
        className={cn(
            `w-full text-white
            hover:bg-(--color-shop_light_purple) 
            shadow-none
            border-(--color-shop_light_purple)
            font-semibold
            tracking-wide
            hover:text-white
            bg-(--color-shop_dark_purple) 
            `,
            className
        )}
      >
        <ShoppingBag /> {isOutofStock ? "Out of Stock" : "Add to Cart"}
      </Button>
    </div>
  )
}

export default AddToCartButton