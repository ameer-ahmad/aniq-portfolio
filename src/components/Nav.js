import React, {useState} from 'react'
import {Link} from 'react-router-dom'


const Nav = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
    <button class="icon mobile-menu" onClick={() => setIsNavOpen(true)}>
        <i class="fa fa-bars"></i>
    </button>
    <div className={isNavOpen ? 'navigation mobile' : 'navigation'}>

      <button class="icon close" onClick={() => setIsNavOpen(false)}>
        <i class="fa fa-close"></i>
      </button>
      
        <img src="https://ameer-ahmad.github.io/aniq-portfolio/logo.png" alt="logo" />
        <ul>
          <li className="title"><Link to="/">About Me</Link></li>
          <li><Link to="/introduction">Introduction</Link></li>
          <li><Link to="/philosophical-quote">Famous Quote</Link></li>
          <li><Link to="/skills-and-toolset">Skills & Toolset</Link></li>
        </ul>

        <ul>
          <li className="title"><Link to="/work">Work</Link></li>
          <li><Link to="/corporate-memphis-style">Corporate Memphis Illustrations</Link></li>
          <li><Link to="/point-cross-beach">Point Cross Beach RV Park</Link></li>
          <li><Link to="/essential-board-game">Essential Board Game</Link></li>
          <li><Link to="/tiff-posters-portfolio-posters">TIFF Posters & Portfolio Posters</Link></li>
          <li><Link to="/aqua-water-bottle">Aqua Water Bottle</Link></li>
          <li><Link to="/well-care-app">WellCare App</Link></li>
          <li><Link to="/weather-app">Weather App</Link></li>
        </ul>

        <ul>
          <li><a href="https://www.linkedin.com/in/aniq-khan-4631951b7/" target='_blank' rel='noreferrer'>LinkedIn</a></li>
          <li><a href='https://dribbble.com/AniqKhan' target='_blank' rel='noreferrer'>Dribbble</a></li>
          <li><a href='https://drive.google.com/file/d/1HTVXofTUV7q04UZPCAwgeqMEpWmMK7Tb/view' target='_blank' rel='noreferrer'>Resume</a></li>
        </ul>

    </div>
    </>
  )
}

export default Nav