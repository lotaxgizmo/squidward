import React from 'react'
import squidwardheader from '../assets/squidwardheader.svg'
import squidxx from '../assets/squidxx.svg'
import squidtelee from '../assets/squidtelee.svg'
import squiddexx from '../assets/squiddexx.svg'

function Header() {
    return (
        <div className='fixed flex flex-col w-full items-center justify-center z-50 '>
            {/* <img src={squidwardheader} alt="" /> */}
            <div className="header bg-white flex items-center justify-between border-4 border-[#284063] pt-5 -mt-5 rounded-3xl w-10/12 px-5">
                <div className="socials flex">

                    <a href="#" target="_blank" rel="noopener noreferrer" className=' z-50 '>
                        <img src={squidxx} alt="" className='px-1' />
                    </a>

                    <a href="#" target="_blank" rel="noopener noreferrer" className=' z-50 '>
                        <img src={squidtelee} alt="" className='px-1' />
                    </a>

                    <a href="#" target="_blank" rel="noopener noreferrer" className=' z-50 '>
                        <img src={squiddexx} alt="" className='px-1' />
                    </a>

                </div>
                <div className="menu flex justify-around py-10 ">
                    <a href="#" target="_blank" rel="noopener noreferrer" className='text-2xl px-5'>HOME</a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className='text-2xl px-5'>TOKENOMICS</a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className='text-2xl px-5'>BUY</a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className='text-2xl px-5'>ROADMAP</a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className='text-2xl px-5'>PARTNERS</a>
                </div>
            </div>
        </div>
    )
}

export default Header