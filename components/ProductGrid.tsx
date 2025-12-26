"use client"
import { Home } from 'lucide-react';
import React from 'react'
import { useState } from 'react';
import HomeTabBar from './HomeTabBar';
import { productType } from './Constants/Data';
import { useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import {motion} from "motion/react"
import { Loader2 } from 'lucide-react';


const ProductGrid = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedTab,setselectedTab] = useState(productType[0]?.title||"");
    
    const query = `*[_type == "product" && variant ==$variant] | order(name desc){
  ..., "categories": categories[]-> title
}`;
const params = { variant: selectedTab.toLowerCase() };
useEffect(() =>{
      const fetchData = async() =>{
        setLoading(true);
        try{
          const response = await client.fetch(query,params);
          setProducts(response);
        }catch (error){
          console.error("Error fetching products:", error);
        }finally{
          setLoading(false);
        }
      }
      fetchData();
    },[selectedTab])
  return (
    <div>
      <HomeTabBar selectedTab ={selectedTab} onTabSelect = {setselectedTab}/>
      {!loading? <div className="flex flex-col items-center justify-center py-10 min-h-80 gap-4 bg-gray-100 w-full mt-10">
        <motion.div>
          <Loader2/>
          <span>
            Product is loading...
          </span>
        </motion.div>
      </div> : <>products</>}
    </div>
  )
}

export default ProductGrid
