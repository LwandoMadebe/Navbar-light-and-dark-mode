import React from 'react'
import './Navbar.css'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toggle_light from '../../assets/night.png'
import toggle_dark from '../../assets/day.png'

const Navbar = ({theme, setTheme}) => {

      const toggle_mode = ()=>{
        theme == 'light'  ? setTheme('dark') : setTheme('light');
      }
  return (
    <div className='navbar'>
      <div className='logo'>
        <h1>Lwando Madebe</h1>
      </div>
      <ul>
        <li>Home</li>
        <li>About Me</li>
        <li>Projects</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
      <div className='searchbox'>
        <input type="text" placeholder='Search'/>
        <img src={theme == 'light' ? search_icon_light : 
        search_icon_dark} alt="" />

      </div>

      <img onClick={()=>{toggle_mode()}} src={theme == 'light' ? 
      toggle_light : toggle_dark} alt="" className='toggle'/>
    </div>
  )
}

export default Navbar
