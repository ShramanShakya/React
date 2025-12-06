import React from 'react'
import { Facebook, Github, Instagram, Linkedin } from 'lucide-react'
import { Tooltip, TooltipProvider } from './Tooltip'
import Link from 'next/link'



const socialLink=[
    {
        title: "Facebook",
        href: "https://www.facebook.com/shraman.sakya",
        icon: <Facebook className="w-5 h-5"/>

    },
    {
        title:"Github",
        href:"https://github.com/ShramanShakya",
        icon:<Github className="w-5 h-5"/>
    },
    {
        title:"LinkedIn",
        href:"https://www.linkedin.com/in/shraman-shakya-6923a038a/",
        icon:<Linkedin className="w-5 h-5"/>
    },
    {   
        title:"Instagram",
        href:"https://www.instagram.com/shraman_sakya/",
        icon:<Instagram className="w-5 h-5"/>,
    }
]

const SocialMedia = () => {
  return <TooltipProvider>
    <div className="flex gap-4 ">
      {socialLink.map((link) => (
        <Tooltip key={link.title} content={link.title}>
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            {link.icon}
          </a>
        </Tooltip>
      ))}
    </div>
  </TooltipProvider>

}

export default SocialMedia
