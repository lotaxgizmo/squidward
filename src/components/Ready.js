<<<<<<< HEAD
import React from 'react'
import bikinidollars2 from '../assets/bikinidollars2.svg'
import buynowsquidwardd from '../assets/buynowsquidwardd.svg'
import contractsquidward from '../assets/contractsquidward.svg'
import readytobuy from '../assets/readytobuy.svg'
import CopyToClipboard from './CopyToClipboard'

function Ready() {
    return (
        <div className='flex flex-col items-center px-4 relative overflow-hidden'>
            <img src={readytobuy} alt="" className='z-10 w-[800px]' />
            <img src={contractsquidward} alt="" className='z-10 ' />
            <div className=' flex'>
      <CopyToClipboard text="0xa1a92f15c24ad358c3a4d0a8ba4f7db18fbfab2f" />
      </div>
            <a href="https://app.uniswap.org/swap?outputCurrency=0xa1a92f15c24ad358c3a4d0a8ba4f7db18fbfab2f" className='z-20'>
                <img src={buynowsquidwardd} alt="" className='z-10 my-10' />
            </a>
            <img src={bikinidollars2} alt="" className='absolute animate-spin' />
        </div>
    )
}

=======
import React from 'react'
import bikinidollars2 from '../assets/bikinidollars2.svg'
import buynowsquidwardd from '../assets/buynowsquidwardd.svg'
import contractsquidward from '../assets/contractsquidward.svg'
import readytobuy from '../assets/readytobuy.svg'
import CopyToClipboard from './CopyToClipboard'

function Ready() {
    return (
        <div className='flex flex-col items-center px-4 relative overflow-hidden'>
            <img src={readytobuy} alt="" className='z-10 w-[800px]' />
            <img src={contractsquidward} alt="" className='z-10 ' />
            <div className=' flex'>
      <CopyToClipboard text="0xa1a92f15c24ad358c3a4d0a8ba4f7db18fbfab2f" />
      </div>
            <a href="https://app.uniswap.org/swap?outputCurrency=0xa1a92f15c24ad358c3a4d0a8ba4f7db18fbfab2f" className='z-20'>
                <img src={buynowsquidwardd} alt="" className='z-10 my-10' />
            </a>
            <img src={bikinidollars2} alt="" className='absolute animate-spin' />
        </div>
    )
}

>>>>>>> 5fd1b3f9d72408b6b7ccf6c9c04f66bf0f65cbe8
export default Ready