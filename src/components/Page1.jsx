import React from 'react'
import mobile1 from './img/nexgtv-entertainment-mobile-app-development.png'
import mobile2 from './img/nexgtv-mobile-app-ui-design.png'

export default function Page1() {
    return (
        <div className='page1 w-full h-screen'>
            {
                <div className='flex justify-center h-[90%] pt-[100px] ml-[80px]'>
                    <img src={mobile1} alt='moblie-1'
                    />
                    <img src={mobile2} alt='moblie-1'
                        className='ml-[-60px]'
                    />

                </div>
            }
        </div>
    )
}
