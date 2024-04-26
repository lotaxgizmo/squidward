import React from 'react'
// import squidwardheader from '../assets/squidwardheader.svg'
import squidxx from '../assets/squidxx.svg'
import squidtelee from '../assets/squidtelee.svg'
import squiddexx from '../assets/squiddexx.svg'
import reddit from '../assets/reddit.svg'

function Header() {
    return (
        <div className='fixed flex flex-col w-full items-center justify-center z-50 '>
            {/* <img src={squidwardheader} alt="" /> */}
            <div className="header bg-white flex items-center justify-center lg:justify-between border-4 border-[#284063] pt-5 -mt-5 rounded-3xl w-10/12 lg:px-5">
                <div className="socials flex items-center justify-center">

                    <a href="https://X.com/squidoneth" target="_blank" rel="noopener noreferrer" className=' z-50 '>
                        <img src={squidxx} alt="" className='px-1' />
                    </a>

                    <a href="https://t.me/handsome_squid" target="_blank" rel="noopener noreferrer" className=' z-50 '>
                        <img src={squidtelee} alt="" className='px-1' />
                    </a>

                    <a href="https://www.dextools.io/app/en/ether/pair-explorer/0xdfbb47a226b17044592c4e8ecc0819301f9f1e34" target="_blank" rel="noopener noreferrer" className=' z-50 '>
                        <img src={squiddexx} alt="" className='px-1' />
                    </a>
                    <a href="https://www.reddit.com/r/SquidOnETH/" target="_blank" rel="noopener noreferrer" className=' z-50 '>
                        <img src={reddit} alt="" className='px-1 w-14' />
                    </a>

                </div>
                <div className="menu lg:flex justify-around py-10 hidden ">
                    <a href="#HOME" className='text-2xl px-5'>HOME</a>
                    <a href="#ABOUT" className='text-2xl px-5'>ABOUT</a>
                    <a href="#TOKENOMICS" className='text-2xl px-5'>TOKENOMICS</a>
                    <a href="#ROADMAP" className='text-2xl px-5'>ROADMAP</a>
                    <a href="https://app.uniswap.org/swap?outputCurrency=0xa1a92f15c24ad358c3a4d0a8ba4f7db18fbfab2f" target="_blank" rel="noopener noreferrer" className='text-2xl px-5'>BUY</a>
                </div>
            </div>
        </div>
    )
}
 
export default Header