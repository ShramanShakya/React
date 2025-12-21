import React from 'react'
import { Clock, Mail, MapPin, Phone } from 'lucide-react';


interface ContactItemData{
  title:string;
  subtitle: string;
  icon: React.ReactNode;
}
const data: ContactItemData[]=[
  {
    title:"Vist Us",
    subtitle:"123 Main St, City, Country",
    icon:(
      <MapPin className="h-6 w-6 text-gray-600 group-hover:text-black transition-colors"></MapPin>
    )
  },
  {
    title:"Call Us",
    subtitle:"0918742671",
    icon:(
      <Phone className = "h-6 w-6 text-gray-600 group-hover:text-black transition-colors"></Phone>
    )
  },
  {
    title: "Working Hours",
    subtitle: "Mon - Fri: 9:00 AM - 6:00 PM",
    icon:(
      <Clock className = "h-6 w-6 text-gray-600 group-hover:text-black transition-colors"></Clock>
    )
  },
  {
    title:"Email Us",
    subtitle:"Shopman@gmail.com",
    icon:(
      <Mail className = "h-6 w-6 text-gray-600 group-hover:text-black transition-colors"></Mail>
    )
  }
]

const secondaryFooter = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-b">
      {data?.map((item, index)=>(
        <div key={index} className="flex items-center gap-3 group hover:bg-gray-100 p-4 transition-colors">
          {item?.icon}
          <div>
            <h3 className = "font-semibold text-gray-900 group-hover:text-black">{item?.title}</h3>
            <p>{item?.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default secondaryFooter
