import React, { useEffect } from 'react'
import Footer from './Footer'
import { motion } from 'framer-motion'

const TIFF = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

  return (
    <motion.div 
      className="container tiff"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1}}
    >
      <div className="title-container">
        <h1>TIFF Posters & Portfolio Posters</h1>
        <p>This is a showcase of TIFF posters that I designed for school a poster that I designed for this portfolio.</p>
        <p>Applications Used: Adobe Photoshop, Adobe Illustrator                       </p>
      </div>
      
      <div className="work-image-container">
        <img src="https://ameer-ahmad.github.io/aniq-portfolio/tiff1.png" alt="tiff1" />
        <img src="https://ameer-ahmad.github.io/aniq-portfolio/tiff2.png" alt="tiff2" />
        <img src="https://ameer-ahmad.github.io/aniq-portfolio/tiff3.png" alt="tiff3" />
      </div>

      <Footer />
    </motion.div>
  )
}

export default TIFF