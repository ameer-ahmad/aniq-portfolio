import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Footer from './Footer'

const WellCareApp = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

  return (
    <motion.div
        className="container essential-board-game"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1}}
    >
        <div className="title-container">
            <h1>WellCare App</h1>
            <p>This app is created for my portfolio specifically to show and demonstrate me skills of UI/UX design.</p>
            <p>Applications Used: Figma</p>
        </div>

        <div className="wellcare-images">
            <img src="https://ameer-ahmad.github.io/aniq-portfolio/wellcare-images.png" alt="Wellcare" />
        </div>

        <Footer />
        
    </motion.div>
  )
}

export default WellCareApp