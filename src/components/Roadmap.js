import React from 'react'
import roadmapsquidward from '../assets/roadmapsquidward.svg'
import squidwardrd1 from '../assets/squidwardrd1.svg'
import joinsquidward from '../assets/joinsquidward.svg'
import squidwardfish from '../assets/squidwardfish.svg'

function Roadmap() {
    return (
        <div className='flex flex-col items-center px-4 z-20'>
            <img src={roadmapsquidward} alt="" className='my-5' />
            <img src={squidwardrd1} alt="" />

            <div className="join my-10">
                <img src={joinsquidward} alt="" className='opacity-55' />
                <div className="fish flex  lg:flex-row flex-col justify-between">

                    <img src={squidwardfish} alt="" />
                    <img src={squidwardfish} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Roadmap