import React from 'react'
import bikinidollars2 from '../assets/bikinidollars2.svg'
import buynowsquidwardd from '../assets/buynowsquidwardd.svg'
import contractsquidward from '../assets/contractsquidward.svg'
import readytobuy from '../assets/readytobuy.svg'

function Ready() {
    return (
        <div className='flex flex-col items-center px-4 relative'>
            <img src={readytobuy} alt="" className='z-10 w-[800px]' />
            <img src={contractsquidward} alt="" className='z-10 ' />
            <img src={buynowsquidwardd} alt="" className='z-10 my-10' />
            <img src={bikinidollars2} alt="" className='absolute animate-spin' />
        </div>
    )
}

export default Ready