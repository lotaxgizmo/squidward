import React from 'react'
import squidrights from '../assets/squidrights.svg'
import squiddex from '../assets/squiddex.svg'
import squidtele from '../assets/squidtele.svg'
import squidtext from '../assets/squidtext.svg'
import squidx from '../assets/squidx.svg'

function Footer() {
    return (
        <div className='flex flex-col items-center px-4 bg-black py-10'>
            <img src={squidtext} alt="" className='my-4' />
            <div className="social flex justify-around  my-4">
                <img src={squiddex} alt="" />
                <img src={squidtele} alt="" />
                <img src={squidx} alt="" />
            </div>
            <img src={squidrights} alt="" />

        </div>
    )
}

export default Footer