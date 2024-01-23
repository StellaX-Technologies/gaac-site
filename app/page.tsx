import Navbar from '../components/navbar';
import Gallery from '../components/gallery';
import Carousel from '../components/carouselEvent';
import insta from '../public/insta.svg';
import mail from '../public/mail.svg';
import linkedin from '../public/linkedin.svg'; 
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <body>

      <div className="inline-flex justify-center text-center w-full">
        <div className='hero-img bg-local h-full w-full'>
          <div className='flex items-center'>
            <Navbar/>
          </div>
          <h1 className="text-gray-50 font-extrabold text-4xl drop-shadow-3xl text-center md:text-4xl lg:text-5xl">GITAM AERO ASTRO CLUB</h1>
        </div>
      </div>

      <div className='flex'>
        <p className='text-gray-50 text-[21px] font-bold text-left mt-10 lg:text-[30px]'>Events</p>
        <Carousel/>
      </div>

      <div className='flex'>
        <p className='text-gray-50 text-[21px] font-bold text-left mt-10 lg:text-[30px]'>Gallery</p>
        <div className='flex flex-row w-full my-8 overflow:auto'>
          <Gallery/>
        </div>
      </div>

      <footer className='hidden lg:flex flex-row justify-evenly max-w-full bg-black pt-[77px] pb-[77px]'>
        <div className='text-slate-50'>
          <h2 className='font-bold text-[25px] pb-5'>EVENTS</h2>
          <ul className='font-extralight'>
            <li className='pb-2'><Link href='#'>Rocketry 101</Link></li>
            <li className='pb-2'><Link href='#'>Rocketry 2.0</Link></li>       
            <li className='pb-2'><Link href='#'>Diana's Eve</Link></li>
            <li className='pb-2'><Link href='#'>FrostHack 2k23</Link></li>
            <li className='pb-2'><Link href='#'>Sangharsh</Link></li>
          </ul>
        </div>
        <div className='text-slate-50'>
          <h2 className='font-bold text-[25px] pb-5'>ABOUT US</h2>
          <ul className='font-extralight'>
            <li className='pb-2'><Link href='#'>Teams</Link></li>
            <li className='pb-2'><Link href='#'>Executive Body</Link></li>
            <li className='pb-2'><Link href='#'>Advisors</Link></li>
            <li className='pb-2'><Link href='#'>Careers</Link></li>
          </ul>
        </div>
        <div className='text-slate-50'>
          <h2 className='font-bold text-[25px] pb-5'>SOCIAL MEDIA</h2>
          <ul className='font-extralight pb-4' style={{ display: 'flex', alignItems: 'center' }}>
            <li className='pr-4'>
              <Image src={insta} alt='insta_logo' width={40} height={40} />
            </li>
            <li className='pb-2'>
              Instagram<br />
              <Link href='https://www.instagram.com/'><span className='underline decoration-solid'>g.aeroastro</span></Link>
            </li>
          </ul>
          <ul className='font-extralight pb-4' style={{ display: 'flex', alignItems: 'center' }}>
            <li className='pr-4'>
              <Image src={mail} alt='mail_logo' width={40} height={40} />
            </li>
            <li className='pb-2'>
              Email<br />
              <Link href='https://mail.google.com/'><span className='underline decoration-solid'>aeroastro_vzg@gitam.in</span></Link>
            </li>
          </ul>
          <ul className='font-extralight pb-4' style={{ display: 'flex', alignItems: 'center' }}>
            <li className='pr-4'>
              <Image src={linkedin} alt='linkedin_logo' width={40} height={40} />
            </li>
            <li className='pb-2'>
              Linkedin<br />
              <Link href='https://www.linkedin.com/'><span className='underline decoration-solid'>GITAM Aero Astro Club</span></Link>
            </li>
          </ul>
        </div>
      </footer>
    </body>
  );
}
