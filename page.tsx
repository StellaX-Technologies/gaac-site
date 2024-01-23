import  Button  from "@/components/ui/button"
import scroll from "../public/scroll.svg"
import Image from 'next/image'
import line from "../public/line.svg"
import InnerRectangle from "@/components/rectangle"
import Button2 from "@/components/ui/button2"
import Career from "@/components/ui/career"
import Faq from "@/components/ui/faaq"
export default function Home() {
  return (
    <><div className="min-[200px]:max-[600px]:">

      <div className="Updates">
        <div className="flex justify-between">
          <div className="text-white text-[30px] not-italic font-bold leading-[normal] mt-5 ml-10 ">Updates</div>
          <div className="button"></div>
          <Button />
        </div>
      </div>
    </div>
    <div className="bg-[#ffffff1c] flex gap-16 mt-6 leading-normal align-items-center min-[1475px]:text-center  w-1512 h-[230px] p-10   ">
        <InnerRectangle />
      </div>
      <div className="min-[200px]:max-[600px]:">
        <div className="w-100% mr-auto ml-auto pr-8 pl-8 flex justify-between gap-5">
          <div className="Roboto float-left mt-80 text-white w-[2000px] text-lg ml:10 font-light ">
            <ul>
              <h1 className="text-2xl ml-8">Hey !</h1>
              <h1 className="text-2xl ml-8">We are GITAM Aero Astro Club!</h1>
              <p className="ml-8">A student chapter of MIT Aero Astro Society, Boston.</p>
              <p className="ml-8">GITAM Aero Astro Club was established in Nov 2020. This student-led club is full of creative minds who are busy innovating and learning.</p>
            </ul>
          </div>
          <div className=" mt-10">
            <Image src={scroll} width={300} height={60} alt="scroll" className="center" quality={100} />
            <div className=" text-white ml-2 mb-4 Roboto font-extralight">Scroll Down</div>
            <div className="ml-14 mt-14">
              <Image src={line} width={2} height={60} alt="line" className="center" />
            </div>
          </div>

          <div className="Roboto font-light float-right mt-72 text-white w-[2000px] text-lg mr:7">
            <ul>
              <p className="mr-10">This club lays prime focus on latest technology and innovations that bring the versatility of its students to the fore and gives them a sound sense of perspective. The mentors comprise of experienced and dedicated advisors who with their expert inputs encourage students to explore new avenues. The GITAM Aero Astro Club was started with the aim to foster interest in the world of science and technology. It provides a platform for like-minded brains to communicate with each other and expand their horizons.</p>
            </ul>
          </div>

        </div>
        <div className="flex justify-between">
          <div className="text-white text-[30px] not-italic font-bold leading-[normal] mr-10 mt-20 ml-10">Careers</div>
          <div className="mt-14 mr-20"><Button />
          </div>
        </div>
      </div><div className="rounded-40">
        <div className="web-description-container">
          <div className="min-[320px]: max-[600px]">

            <Career />
            <div className="button2"></div>
          </div>

        </div>
      </div><div className="container2">
        <div className="flex justify-between">
          <div className="text-white text-[30px] not-italic font-bold leading-[normal] mr-10 mt-14 ml-10">Faq's</div>
          <div className="mt-10 mr-20"><Button />
          </div>
        </div>

      </div><Faq /></>
  
  
  
  
  )
}
