import React from 'react'
import Container from '@/components/Container'
import HomeBanner from '@/components/HomeBanner'
import ProductGrid from '@/components/ProductGrid';
import HomeCategories from '@/components/HomeCategories';
import { getCategories } from '@/sanity/queries';

const page = async() => {
  const categories = await getCategories(6);
  
  return (
    <Container className="bg-shop_light_purple">
      <HomeBanner />
      <ProductGrid />
      <HomeCategories categories={categories}/>
    </Container>

  );
};
 
export default page
