import React from 'react'
import img1 from './img/pizza_box.png'
import img2 from './img/dominos-bread.png'
import img3 from './img/dominos-bread1.png'
import mobile1 from './img/domi-img1.png'
import mobile2 from './img/ux-strategy-for-mobile-app-devlopment.png'


export default function Page4() {
    return (
        <div className='page4 w-full h-screen bg-black relative overflow-hidden'>
            <div>
                <img src={img1} alt='img1'
                    className='absolute top-[-60px]' />
                <img src={img2} alt='img1'
                    className='absolute top-[-120px] right-[60px]' />
                <img src={img3} alt='img1'
                    className='absolute bottom-[-90px] right-[-40px]' />
            </div>
            <div className='flex h-[60%]'>
                <img src={mobile2} alt='moblie-2'
                    className='ml-[420px] mt-[7%]' />
                <img src={mobile1} alt='moblie-1'
                    className='absolute h-[55%] bottom-0 left-[10%]' />
            </div>
        </div>
    )
}
