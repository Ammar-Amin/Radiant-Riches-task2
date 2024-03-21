
import { useEffect, useState } from 'react'
import './App.css'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import Page5 from './components/Page5'
import Page6 from './components/Page6'
import Page7 from './components/Page7'
import SideBar from './components/SideBar'

function App() {
  let [scrollPercentage, setScrollPercentage] = useState(0)

  function handleScroll() {
    let howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop

    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight

    setScrollPercentage((howMuchScrolled / height) * 100)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return (() => {
      window.removeEventListener('scroll', () => { });
    })
  }, [])

  return (
    <>
      <div className='scroll-container fixed top-9 z-50'>
        <div className='scroll-bar '
          style={{ width: `${scrollPercentage}%` }} ></div>
      </div>
      <div className='content flex'>
        <SideBar scroll={scrollPercentage} />
        <div className='pages w-[55%] absolute right-0 z-0'>
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
          <Page5 />
          <Page6 />
          <Page7 />
        </div>
      </div>
    </>
  )
}

export default App
