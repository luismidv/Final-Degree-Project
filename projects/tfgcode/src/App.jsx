import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/rootStyle.css'
import {Banner} from './Banner.jsx'
import './styles/roomStyle.css'



export function App() {
  
return (
  <div className = 'banners-flex'>
    <Banner image = '../media1/roombanner1.webp' title = 'Room number 1' ></Banner>
    <Banner image = '../media1/roombanner2.jpg' title = 'Room number 2'></Banner>
    <Banner image = '../media1/roombanner3.webp' title = 'Room number 3'></Banner> 
    <Banner image = '../media1/roombanner4.jpg' title = 'Room number 4'></Banner>
    <Banner image = '../media1/roombanner5.jpg' title = 'Room number 5'></Banner>
    <Banner image = '../media1/roombanner6.webp' title = 'Room number 6'></Banner>
  </div>  
  )
}
export default App








