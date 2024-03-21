import React from 'react'
import img1 from './img/veme-blockchain-app-developed.png'
import img2 from './img/veme-app-ui-design.png'

export default function Page2() {
    return (
        <div className='page2 w-full h-screen bg-violet-950 relative'>
            <div className='flex h-[60%]'>
                <img src={img2} alt='moblie-2'
                    className='absoulte top-0 ml-[500px]'
                />
                <img src={img1} alt='moblie-1'
                    className='absolute bottom-0 left-[20%] h-[60%] w-[35%] ' />
            </div>
        </div>
    )
}
