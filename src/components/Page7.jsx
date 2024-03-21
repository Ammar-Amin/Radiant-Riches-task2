import React from 'react'
import img1 from './img/melltoo-img2.png'
import img2 from './img/melltoo-img1.png'

export default function Page7() {
    return (
        <div className='page7 w-full h-screen bg-green-600 relative overflow-hidden' >
            <div className='flex items-end h-screen'>
                <img src={img1} alt='image'
                    className='absolute h-[580px] bottom-[-10%] left-[22%] z-20' />
                <img src={img2} alt='image'
                    className='absolute h-[600px] bottom-[-7%] right-[7%]' />
            </div>
        </div>
    )
}
