import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Footer from './Footer'

const WeatherApp = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

  return (
    <motion.div
        className="container weather-app"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1}}
    >
        <div className="title-container">
            <h1>Weather App</h1>
            <p>This app is created for my portfolio specifically to show and demonstrate my skills of UI/UX design.</p>
            <p>Applications Used: Figma</p>
        </div>

        <a className="weather-image" href="https://www.figma.com/file/pVT5bOYzbD4hV1RfQ25MvN/Wheather-App?type=design&node-id=32-315&mode=design" target='_blank' rel='noreferrer'>
            <img src="https://ameer-ahmad.github.io/aniq-portfolio/weather-background2.png" alt="Weather Images" />
        </a>
      
        <Footer />
        
    </motion.div>
  )
}

export default WeatherApp