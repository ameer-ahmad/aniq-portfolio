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
            <p>This app is created for my portfolio specifically to show and demonstrate me skills of UI/UX design.</p>
            <p>Applications Used: Figma</p>
        </div>

        <div className="weather-top">
            <div className="weather-left">
                <div>
                    <h2>Summary:</h2>
                    <p>This app was built expressly for school, but I thought it would look better on my portfolio, adding it to the collection of my experiences and skills.</p>
                </div>
                <div>
                    <h2>Design Process:</h2>
                    <p>Introducing an innovative weather app for a fictional space setting, where users can access captivating weather information. 
                    <br/><br/>The app features clean and minimalistic icons representing space weather conditions, a color palette inspired by the vastness of space with smooth blues and contrasting tones, and a user-friendly interface prioritizing legibility and intuitive navigation for a seamless experience. </p>
                </div>
            </div>
            <div className='weather-right'>
                <img src='https://ameer-ahmad.github.io/aniq-portfolio/layout.png' alt='layout' />
            </div>
        </div> 
        <div className='general-wireframes'>
            <h3>General<br/>Wireframes</h3>
        </div>
        
        <div className='wireframe-container'>
            <img src='https://ameer-ahmad.github.io/aniq-portfolio/weather-wireframe.png' alt='Weather App Wireframe' />
        </div>

        <div className='weather-conclusion'>
            <h3>Conclusion:</h3>
            <p>The development of a weather app for a fictional space setting involves a blend of imagination, meticulous research, and attention to detail.</p>
            <br />
            <p>The app's clean icons effectively convey weather conditions, while the serene blues and dynamic contrasting colors in the palette evoke the vastness and energy of space. 
            The visually appealing and user-friendly interface showcases the designer's ability to conceptualize and execute innovative ideas with creativity and professionalism.</p>
            <br />
            <p><a href='https://www.figma.com/file/pVT5bOYzbD4hV1RfQ25MvN/Wheather-App?node-id=32%3A315&mode=dev' target='_blank' rel='noreferrer'>Try this prototype for yourself!</a></p>
        </div>

        <div className="weather-image">
            <img src="https://ameer-ahmad.github.io/aniq-portfolioweather-background.png" alt="Weather Images" />
        </div>
      
        <Footer />
        
    </motion.div>
  )
}

export default WeatherApp