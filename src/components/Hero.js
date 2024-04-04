import React from 'react'
import cephalopodroll from '../assets/cephalopodroll.svg'
import heroleft from '../assets/heroleft.svg'
import heroright from '../assets/heroright.svg'
import neptuneroll from '../assets/neptuneroll.svg'
import oceanroll from '../assets/oceanroll.svg'
import squidwardhero from '../assets/squidwardhero.svg'
import jointelegram from '../assets/jointelegram.svg'


function Hero() {
    return (
        <div className='flex flex-col relative mt-16 items-center w-full'>
            <img src={squidwardhero} alt="" className=' px-4' />
            <img src={jointelegram} alt="" className='mt-4 mb-20  px-4' />


            <div className=" flex justify-between images lg:absolute w-full dbg-red-500 mt-[-70px] lg:mt-auto">
                <img src={heroleft} className='w-32 lg:w-auto' alt="" />
                <img src={heroright} className='w-28 lg:w-auto mt-[-100px]' alt="" />

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