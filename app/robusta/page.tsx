import  Button  from "@/components/ui/button"
import Image from 'next/image'
import {Caveat} from 'next/font/google'
import Head from 'next/head';
import Members from "@/components/ui/members"
import Rectmem from "@/components/ui/rectmem"
export default function Home() {
  return (
    <body>
      <div className="min-[12.5rem]:max-[37.5rem]:">

    
      <div className="flex justify-between">
          <div className="text-white text-[1.875rem] not-italic font-bold leading-[normal] mr-10 mt-14 ml-10">Members</div>
          <div className="mt-10 mr-20"><Button />
          </div>
        </div>
          <Members/>
         
          <Rectmem/>
          </div>
          <div>
      <Head>
        {/* Import the font */}
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Roboto&display=swap" rel="stylesheet"/>

      </Head>

      

      {/* Your content goes here */}
      <div>
        <h1>Hello, world!</h1>
        <p>This is a Next.js application with a custom font.</p>
      </div>
    </div>
</body>
  
  
  
  
  )
}