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

        <a className="wellcare-images" href="https://www.figma.com/proto/aRXmPB9eTXsnVb5cAsEiKw/Well-Care?page-id=0%3A1&type=design&node-id=19-24&viewport=333%2C343%2C0.13&scaling=scale-down&starting-point-node-id=19%3A24" target='_blank' rel="noreferrer">
            <img src="https://ameer-ahmad.github.io/aniq-portfolio/wellcare-image.png" alt="Wellcare" />
        </a>

        <Footer />
        
    </motion.div>
  )
}

export default WellCareApp