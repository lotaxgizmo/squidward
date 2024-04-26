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
                <a href="https://X.com/squidoneth">
                    <img src={squidx} alt="" />
                </a>
                <a href="https://t.me/handsome_squid">
                    <img src={squidtele} alt="" />
                </a>
                <a href="https://www.dextools.io/app/en/ether/pair-explorer/0xdfbb47a226b17044592c4e8ecc0819301f9f1e34">
                    <img src={squiddex} alt="" />
                </a>

            </div>
            {/* <img src={squidrights} alt="" /> */}
            <p className='text-white text-center'>
            $SQUID is a meme coin with no expectation of financial return.  This coin is simply paying homage to a very Handsome Meme that we all love.  There is no formal dev team, it is a Community driven project for fans of the Handsome Meme format.  $SQUID is for entertainment purposes only.  

            </p>

        </div>
    )
}

export default Footer