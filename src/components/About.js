import React from 'react'
import squidwardface2 from '../assets/squidwardface2.svg'
import squidwardface from '../assets/chadwardbike.png'
import buynowsquidward from '../assets/buynowsquidward.svg'
import aboutaquidward from '../assets/aboutaquidward.svg'
import squidwardbills from '../assets/squidwardbills.svg'
import text1 from '../assets/text1.svg'
import text2 from '../assets/text2.svg'
import motherroll from '../assets/motherroll.svg'

function About() {
    return (
        <div className='flex flex-col relative w-full mt-16 items-center justify-center' id='ABOUT'>
            <img src={aboutaquidward} alt="" />

            <div className="flex flex-col lg:flex-row w-full items-center justify-center  px-4 relative lg:px-20">
                <div className="flex flex-col 1 lg:w-2/4 items-start">
                    <img src={text1} alt="" className='my-5' />
                    <img src={text2} alt="" className='my-5' />
                    <a href="https://app.uniswap.org/swap?outputCurrency=0xa1a92f15c24ad358c3a4d0a8ba4f7db18fbfab2f" className='my-5 z-50' >
                        <img src={buynowsquidward} alt="" />
                    </a>
                </div>
                <div className="2 lg:w-2/4">
                    <img src={squidwardface} alt="" />

                </div>
                <img src={squidwardbills} alt="" className='w-[900px] absolute bottom-0S ' />
            </div>
            <img src={motherroll} alt="" className='w-full  bottom-0' />
        </div>
    )
}

export default About
