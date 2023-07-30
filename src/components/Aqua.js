import React, { useEffect } from 'react'
import Footer from './Footer'
import { motion } from 'framer-motion'

const Aqua = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

  return (
    <motion.div 
      className="container aqua"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1}}
    >
      <div className="title-container">
        <h1>Aqua Water Bottle</h1>
        <p>This water bottle logo design was entirely made by me from scratch all illustrations and mockup were created for this portfolio.</p>
        <p>Applications Used: Adobe Photoshop, Adobe Illustrator</p>
      </div>
      
      <div className="work-image-container">
        <img src="/aqua1.png" alt="aqua1" />
        <img src="/aqua2.png" alt="aqua2" />
      </div>

      <Footer />
    </motion.div>
  )
}

export default Aqua