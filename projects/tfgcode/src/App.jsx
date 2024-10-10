import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './rootStyle.css'
import {Banner} from './Banner.jsx'
import './roomStyle.css'



export function App() {
  
return (
  <div className = 'banners-flex'>
    <Banner image = '../media1/roombanner1.webp' title = 'Habitación número 1' ></Banner>
    <Banner image = '../media1/roombanner2.jpg' title = 'Habitación número 2'></Banner>
    <Banner image = '../media1/roombanner3.webp' title = 'Habitación número 3'></Banner> 
    <Banner image = '../media1/roombanner4.jpg' title = 'Habitación número 4'></Banner>
    <Banner image = '../media1/roombanner5.jpg' title = 'Habitación número 5'></Banner>
    <Banner image = '../media1/roombanner6.webp' title = 'Habitación número 6'></Banner>
  </div>  
  )
}
export default App








