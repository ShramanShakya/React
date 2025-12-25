import React from 'react'
import Container from '@/components/Container'
import HomeBanner from '@/components/HomeBanner'
import ProductGrid from '@/components/ProductGrid';

const page = () => {
  return (
    <Container className="bg-shop_light_purple">
      <HomeBanner />
      <ProductGrid/>
    </Container>

  );
};

export default page
