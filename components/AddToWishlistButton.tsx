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
     <div className="p-2 rounded-full border
                  hover:bg-(--color-shop_dark_purple) bg-white hover:text-white hoverEffect
                  flex items-center justify-center">
    <Heart size={18} />
    </div>
    </div>
);
};

export default AddToWishlistButton
