import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Footer from './Footer'

const EssentialBoardGame = () => {

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
            <h1>Essential Board Game</h1>
            <p>This board game design was entirely made by me from scratch all illustrations and mockup were created for this portfolio.</p>
            <p>Applications Used: Adobe Photoshop, Adobe Illustrator</p>
        </div>

        <div className="essential-images">
            <img src="essential-images.png" alt="Essential" />
        </div>

        <Footer />
        
    </motion.div>
  )
}

export default EssentialBoardGame