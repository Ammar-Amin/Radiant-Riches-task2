import React from 'react'
import mobile1 from './img/nasa-fitness-tracking-mobile-app.png'
import mobile2 from './img/measure-total-body-weight-through-fitness-app.png'

export default function Page3() {
    return (
        <div className='page3 w-full h-screen bg-blue-950 relative overflow-hidden'>
            <div className='flex'>
                <img src={mobile1} alt='mobile'
                    className='h-[550px] absolute bottom-5 left-[20%]'></img>
                <img src={mobile2} alt='mobile'
                    className='h-[500px] absolute top-[-16%] right-[5%]'></img>
            </div>

        </div>
    )
}
