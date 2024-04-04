import React from 'react'
import squidwardheader from '../assets/squidwardheader.svg'

function Header() {
    return (
        <div className='fixed flex w-full items-center justify-center'>
            <img src={squidwardheader} alt="" />
        </div>
    )
}

export default Header