import React from 'react'
import cephalopodroll from '../assets/cephalopodroll.svg'
import heroleft from '../assets/heroleft.svg'
import heroright from '../assets/heroright.svg'
import neptuneroll from '../assets/neptuneroll.svg'
import oceanroll from '../assets/oceanroll.svg'
import squidwardhero from '../assets/squidwardhero.svg'
import squidwardhero2 from '../assets/squidwardhero2.svg'
import jointelegram from '../assets/jointelegram.svg'
import gradienthome from '../assets/gradienthome.png'
import CopyToClipboard from './CopyToClipboard';


function Hero() {
    return (
        <div className='flex flex-col relative pt-44 items-center w-full' id='HOME'>
            <img src={gradienthome} alt="" className='absolute top-[-200px] left-[10px]  ' />
            <div className='lg:hidden flex'>
      <CopyToClipboard text="0xa1a92f15c24ad358c3a4d0a8ba4f7db18fbfab2f" />
      </div>
            <div className="hero relative flex flex-col">
                <img src={squidwardhero} alt="" className=' px-4 z-10 opacity-0 mt-10' />
                <img src={squidwardhero} alt="" className=' px-4 z-10 absolute' />
                <img src={squidwardhero2} alt="" className=' px-4 z-30 absolute' />
            </div>
      <div className='hidden lg:flex'>
      <CopyToClipboard text="0xa1a92f15c24ad358c3a4d0a8ba4f7db18fbfab2f" />
      </div>
            <a href="https://t.me/handsome_squid" className='z-10'>
                <img src={jointelegram} alt="" className='mt-4 mb-202  px-4 z-10' />
            </a>
             

            <div className=" flex justify-between images lg:absolute w-full dbg-red-500 mt-[-70px] lg:mt-auto">
                <img src={heroleft} className='w-32 lg:w-auto  z-10' alt="" />
                <img src={heroright} className='w-28 lg:w-auto mt-[-100px] z-10' alt="" />

            </div>


            <div className="rolls z-10 w-full flex flex-col items-center">
                <img src={neptuneroll} alt="" className='mb-4 w-full' />
                <img src={oceanroll} alt="" className='w-full' />
                <img src={cephalopodroll} alt="" className='w-full' />

            </div>

        </div>
    )
}

export default Hero