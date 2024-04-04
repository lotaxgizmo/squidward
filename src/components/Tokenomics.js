import React from 'react'
import totalsquidward from '../assets/totalsquidward.svg'
import tokenomicssquidward from '../assets/tokenomicssquidward.svg'
import texessquidward from '../assets/texessquidward.svg'
import liquiditysquidward from '../assets/liquiditysquidward.svg'

function Tokenomics() {
    return (
        <div className='flex flex-col items-center px-4'>
            <img src={tokenomicssquidward} alt="" className='my-10' />
            <div className="things flex flex-col lg:flex-row items-center justify-around w-full ">
                <img src={totalsquidward} alt="" className='w-96 my-4' />
                <img src={liquiditysquidward} alt="" className='w-96 my-4' />
                <img src={texessquidward} alt="" className='w-96 my-4' />
            </div>
        </div>
    )
}

export default Tokenomics