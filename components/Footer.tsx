import React from 'react'
import Container from './Container'
import SecondaryFooter from './SecondaryFooter'


interface ContactItemData{
  title:string;
  subtitle: string;
  icon: React.ReactNode;
}
const data: ContactItemData[]=[
  {
    title:"Vist Us",
    subtitle:"123 Main St, City, Country",
    icon:()
  },
  {
    title:"Call Us",
    subtitle:"0918742671",
    icon:()
  }
]
const Footer = () => {
  return (
    <footer className="mb-40"> 
      <Container>
        <SecondaryFooter/>
      </Container>
    </footer>
  )
}

export default Footer
