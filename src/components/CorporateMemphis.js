import React, { useEffect } from 'react'
import Footer from './Footer'
import {motion} from 'framer-motion'

const CorporateMemphis = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

  return (
    <motion.div 
      className="container memphis-style"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1}}
    >
      <div className="title-container">
        <h1>Corporate Memphis Style</h1>
        <p>A display of Corporate Memphis Style Illustrations made by me.</p>
        <p>Applications Used: Adobe Photoshop, Adobe Illustrator</p>
      </div>
      
      <div className="work-image-container">
        <img src="https://ameer-ahmad.github.io/aniq-portfolio/memphis1.png" alt="memphis1" />
        <img src="https://ameer-ahmad.github.io/aniq-portfolio/memphis2.png" alt="memphis2" />
        <img src="https://ameer-ahmad.github.io/aniq-portfolio/memphis3.png" alt="memphis3" />
        <img src="https://ameer-ahmad.github.io/aniq-portfolio/memphis4.png" alt="memphis4" />
        <img src="https://ameer-ahmad.github.io/aniq-portfolio/memphis5.png" alt="memphis5" />
        <img src="https://ameer-ahmad.github.io/aniq-portfolio/memphis6.png" alt="memphis6" />
        <img src="https://ameer-ahmad.github.io/aniq-portfolio/memphis7.png" alt="memphis7" />
      </div>

      <Footer />
    </motion.div>
  )
}

export default CorporateMemphis