import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer'
import { motion } from "framer-motion"

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <motion.div 
      className="container"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1}}
    >
        <div className="home">

          <div className="overlay-container">
            <Link to="/introduction"><img src="/intro.png" alt="intro" /></Link>  
            <div className="middle">
              <div className="text">Introduction</div>
            </div>
          </div>

          <div className="overlay-container">
            <Link to="/philosophical-quote"><img src="/quote.png" alt="quote" /></Link> 
            <div className="middle">
              <div className="text">Famous Quote</div>
            </div>
          </div>

          <div className="overlay-container">
            <Link to="/skills-and-toolset"><img src="/skills.png" alt="skills" /></Link>
            <div className="middle">
              <div className="text">Skills & Toolsets</div>
            </div>
          </div>
                  
        </div>
        <Footer />
    </motion.div>
  )
}

export default Home