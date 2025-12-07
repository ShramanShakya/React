import React from 'react'
import { Facebook, Github, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from './ui/tooltip'
import { cn } from '@/lib/utils'

interface Props{
    className?: string;
    iconClassName?: string;
    tooltipClassName?: string;
}

const socialLink = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/shraman.sakya",
    icon: <Facebook className="w-5 h-5"/>,
  },
  {
    title: "Github",
    href: "https://github.com/ShramanShakya",
    icon: <Github className="w-5 h-5"/>
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/shraman-shakya-6923a038a/",
    icon: <Linkedin className="w-5 h-5"/>
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/shraman_sakya/",
    icon: <Instagram className="w-5 h-5"/>
  },
]

const SocialMedia = ({className, iconClassName, tooltipClassName}: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex gap-3.5", className)}>
        {socialLink?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
                <Link
                    key={item?.title}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item?.href}
                    className={cn("p-2 border rounded-full")}
                >
                    {item?.icon}
                </Link>
            </TooltipTrigger>
          </Tooltip>
        ))}
        </div>
        </TooltipProvider>
    )
}

export default SocialMedia;
//aaaaaaaa