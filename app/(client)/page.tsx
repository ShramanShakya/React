import React from 'react'
import Container from '@/components/Container'
import HomeBanner from '@/components/HomeBanner'
import ProductGrid from '@/components/ProductGrid';
import HomeCategories from '@/components/HomeCategories';

const page = () => {
  return (
    <Container className="bg-shop_light_purple">
      <HomeBanner />
      <ProductGrid/>
      <HomeCategories/>
    </Container>

  );
};

export default page
