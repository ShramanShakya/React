"use client"
import { Home } from 'lucide-react';
import React from 'react'
import { useState } from 'react';
import HomeTabBar from './HomeTabBar';

const ProductGrid = () => {
    const [prodcts, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedTab,setselectedTab] = useState("")
    
  return (
    <div>
      <HomeTabBar/>
    </div>
  )
}

export default ProductGrid
