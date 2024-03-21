import React from 'react'
import svg from './img/svg-with-paths.svg'

export default function SideBar({ scroll }) {
    let bgcolor = 'blue'
    console.log(scroll)
    let mainText;
    let subText;
    let abc;
    let views;
    if (scroll < 14) {
        mainText = "25M+ Downloads";
        subText = "on appstore & google playstore"
        abc = "ABC 123"
        views = `View Case Study `
    } else if (scroll < 28) {
        mainText = "BlockChain";
        subText = "The Next Biggest Revolution"
        abc = "ABC 234"
        views = `Coming Soon `
    } else if (scroll < 42) {
        mainText = "NASA";
        subText = "Powered by advance Algorithms"
        abc = "ABC 345"
        views = `Coming Soon `
    } else if (scroll < 56) {
        mainText = "UX Strategy";
        subText = "Refining UI designs"
        abc = "ABC 456"
        views = `View Case Study `
    } else if (scroll < 70) {
        mainText = "Text Headling";
        subText = "Footer Headline"
        abc = "ABC 567"
        views = `Coming Soon `
    } else if (scroll < 85) {
        mainText = "Text Headline";
        subText = "In Furniture Industries"
        abc = "ABC 678"
        views = `View Case Study `
    } else {
        mainText = "East Asia";
        subText = "Biggest Classified Countries";
        abc = "ABC 23478"
        views = `Coming Soon `
    }

    return (
        <div className='sidebar w-[45%] h-screen text-white bg-purple-800 fixed z-10'>
            <div className='flex justify-end pt-[32%] z-50'>
                <div className='text-right z-10'>
                    <h1 className='text-6xl font-bold'>
                        {mainText}
                    </h1>
                    <h2 className='text-2xl'>{subText}</h2>
                </div>
            </div>
            <div>
                {

                    // <div className={`w-[400px] h-[400px] rounded-full bg-[url(${svg})] absolute top-[50%] left-[50%] -translate-x-[80%] -translate-y-[80%] z-10`}></div>
                    // <img className='w-[400px] h-[400px] rounded-full mix-blend-lighten absolute top-[50%] left-[60%] -translate-x-[0%] -translate-y-[80%] z-10'
                    //     src={svg} alt='svg-circle' />
                    <p className='w-[400px] h-[400px] absolute top-[50%] left-[80%] -translate-x-[30%] -translate-y-[80%] z-[-1]'>
                        <svg version="1.1" id="transring" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 414 414" style={{ enableBackground: 'new 0 0 414 414', backgroundColor: '#6A1B9A', borderRadius: '50%' }} xmlSpace="preserve">
                            <path id="Transparent_Ring" className="transrg" style={{ opacity: '0.4', fill: 'none', stroke: '#FFFFFF', strokeWidth: 2, strokeMiterlimit: 10, enableBackground: 'new' }} d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173
                      c-47.8,0-91-19.4-122.3-50.7" />
                            <path id="Opaque_Ring" className="transrgwht" strokeDasharray="0,1000" style={{ fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: 2, strokeMiterlimit: 10, strokeDasharray: '10, 1000' }} d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173
                      c-47.8,0-91-19.4-122.3-50.7" />
                            <g id="Dots1" className="dots-nav">
                                <g>
                                    <path className="dotsst dotsfill1" style={{ fill: 'rgb(0, 146, 255)', opacity: 1 }} d="M84,80 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 87, 80, 84,80 z" />
                                </g>
                                <g>
                                    <path className="dotsstro1" style={{ opacity: 1, fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: 2, strokeMiterlimit: 10 }} d="M84,80c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 87, 80, 84,80 z" />
                                </g>
                            </g>
                            <g id="Dots2" className="dots-nav">
                                <g>
                                    <path className="dotsst dotsfill2" style={{ fill: 'rgb(0, 146, 255)', opacity: 1 }} d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6S 210.1,29, 206.8,29 z M206.8" />
                                </g>
                                <g>
                                    <path className="dotsstro2" style={{ opacity: 1, fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: 2, strokeMiterlimit: 10 }} d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6S 210.1,29, 206.8,29 z M206.8" />
                                </g>
                            </g>
                            <g id="Dots3" className="dots-nav">
                                <g>
                                    <path className="dotsst dotsfill3" style={{ fill: 'rgb(0, 146, 255)', opacity: 1 }} d="M332,85 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 335,85, 332,85 z M332" />
                                </g>
                                <g>
                                    <path className="dotsstro3" style={{ opacity: 1, fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: 2, strokeMiterlimit: 10 }} d="M332,85 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 335,85, 332,85 z M332" />
                                </g>
                            </g>
                            <g id="Dots4" className="dots-nav">
                                <g>
                                    <path className="dotsst dotsfill4" style={{ fill: 'rgb(0, 146, 255)', opacity: 1 }} d="M380,205 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 383,205, 380,205 z M380" />
                                </g>
                                <g>
                                    <path className="dotsstro4" style={{ opacity: 1, fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: 2, strokeMiterlimit: 10 }} d="M380,205 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 383,205, 380,205 z M380" />
                                </g>
                            </g>
                            <g id="Dots5" className="dots-nav">
                                <g>
                                    <path className="dotsst dotsfill5" style={{ fill: 'rgb(0, 146, 255)', opacity: 1 }} d="M335,315 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 340,315, 335,315 z M335" />
                                </g>
                                <g>
                                    <path className="dotsstro5" style={{ opacity: 1, fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: 2, strokeMiterlimit: 10 }} d="M335,315 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 340,315, 335,315 z M335" />
                                </g>
                            </g>
                            <g id="Dots6" className="dots-nav">
                                <g>
                                    <path className="dotsst dotsfill6" style={{ fill: 'rgb(0, 146, 255)', opacity: 1 }} d="M210,375 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 215,375, 210,375 z M210" />
                                </g>
                                <g>
                                    <path className="dotsstro6" style={{ opacity: 1, fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: 2, strokeMiterlimit: 10 }} d="M210,375 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 215,375, 210,375 z M210" />
                                </g>
                            </g>
                            <g id="Dots7" className="dots-nav">
                                <g>
                                    <path className="dotsst dotsfill7" style={{ fill: 'rgb(0, 146, 255)', opacity: 1 }} d="M88,324 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 92,324, 88,324 z M88" />
                                </g>
                                <g>
                                    <path className="dotsstro7" style={{ opacity: 1, fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: 2, strokeMiterlimit: 10 }} d="M88,324 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 92,324, 88,324 z M88" />
                                </g>
                            </g>
                        </svg>
                    </p>
                }
            </div>

            <div className='mt-[50px] ml-[50px] flex gap-3 p-4 py-6 rounded-xl w-1/2 bg-slate-400 text-black'>
                <div className='icon flex items-center'>
                    <i class="ri-award-fill text-5xl"></i>
                </div>
                <div>
                    <p>Best Health Exprience</p>
                    <p className='font-bold'>World Communication Awards</p>
                </div>
            </div>

            <div className='mt-[30px] ml-[50px]'>
                <h1 className='text-5xl font-bold'>{abc}</h1>
                <p className='mt-[20px]'>We are the best web development <br /> company in the world</p>
            </div>

            <footer className='w-[80%] h-[60px] ml-[50px] flex justify-between absolute bottom-1' >
                <h2 className='text-xl flex items-center gap-3'>{views} <i class="ri-arrow-right-line text-4xl"></i>
                </h2>
                <div className='flex justify-end'>
                    <h2 className='text-lg tracking-widest'>S K I P</h2>
                </div>
            </footer>
        </div>
    )
}
