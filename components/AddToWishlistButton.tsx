import React from 'react'
import { Product } from '@/sanity.types'
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

const AddToWishlistButton = ({
    product,
    className,
}:{
    product: Product;
    className?: string;
}) => {
  return (
  <div className={cn("absolute top-2 right-2 z-10",className)}>
      <div className={'p-1 rounded-full hover:bg-[--color-shop_light_purple]'} />
      <Heart size = {15} /> 
    </div>
);
};

export default AddToWishlistButton
