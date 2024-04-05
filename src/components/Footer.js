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
                <a href="https://t.me/squidwardeth">
                    <img src={squidtele} alt="" />
                </a>
                <a href="https://www.dextools.io/app/en/ether/pair-explorer/0xdfbb47a226b17044592c4e8ecc0819301f9f1e34">
                    <img src={squiddex} alt="" />
                </a>

            </div>
            <img src={squidrights} alt="" />
            <p className='text-white text-center'>
                $SQUID coin has no association with Nickelodeon or SpongeBob SquarePants.  This token is simply paying homage to a meme we all love and recognize.  $SQUID is a meme coin with no intrinsic value or expectation of financial return.  There is no formal team or roadmap. The coin is completely useless and for entertainment purposes only.
            </p>

        </div>
    )
}

export default Footer