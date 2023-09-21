import React from 'react'
import Link from 'next/link'
import icon_facebook from '@/public/icon-facebook.svg'
import icon_instagram from '@/public/icon-instagram.svg'
import icon_linkedin from '@/public/icon-linkedin.svg'
import icon_github from '@/public/icon_github-mark-white.svg'
import icon_youtube from '@/public/icon-youtube.svg'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-zinc-950">
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div className="mx-auto my-6 text-center text-white md:hidden flex">
              Copyright &copy; 2023, All rights reserved
            </div>
            <div className="flex justify-center space-x-4">
              <Link href={`https://www.facebook.com/randle.flag.12/`}   className='hover:text-cyan-950'>
                <Image src={icon_facebook} alt="Facebook" width={30}/>
              </Link>
              <Link href={`https://www.instagram.com/raychromium/`}   className='hover:text-cyan-950'>
                <Image src={icon_instagram} alt="Instagram" width={30}/>
              </Link>
              <Link href={`https://www.linkedin.com/in/cai-rui/`}   className='hover:text-cyan-950'>
                <Image src={icon_linkedin} alt="Linkedin" width={30}/>
              </Link>
              <Link href={`https://github.com/RayChromium`}   className='hover:text-cyan-950'>
                <Image src={icon_github} alt="GitHub" width={30}/>
              </Link>
              <Link href={`https://www.youtube.com/channel/UCLjbCltCiUrkH890Ar3pWEg`}   className='hover:text-cyan-950'>
                <Image src={icon_youtube} alt="Youtube" width={30}/>
              </Link>
            </div>
          </div>

          <div className="hidden text-white md:block">
            Copyright &copy; 2023, All rights reserved
          </div>
        </div>
      </footer>
  )
}

export default Footer