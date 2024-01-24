import { Button } from "@/components/ui/button"
import event from '../public/event .png'
import Image from'next/image'
import right from '../public/fright.png'
import left from '../public/fleft.png'
import Carousel from "@/components/ui/carousel"
import { Sliders } from "lucide-react"
import Carousel2 from "@/components/ui/carousel2"

export default function Home() {
  
  return (
    <><div className='flex justify-center align-middle'>
     <Carousel></Carousel>
    </div><div className='flex justify-center align-middle'>
        <Carousel2 />
      </div></>
      
  )
}


