import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer'
import { motion } from 'framer-motion'

const Work = () => {

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
        <div className="work-container">
            <div className="overlay-container">
                <Link to="/corporate-memphis-style"><img src="/work1.png" alt="Corporate Memphis" /></Link>
                <div className="middle">
                <div className="text">Corporate Memphis Style</div>
                </div>
            </div>

            <div className="overlay-container">
                <Link to="/point-cross-beach"><img src="/work2.png" alt="Beach RV Park" /></Link>
                <div className="middle">
                <div className="text">Point Cross Beach RV Park</div>
                </div>
            </div>

            <div className="overlay-container">
                <Link to="/essential-board-game"><img src="/work3.png" alt="Essential" /></Link>
                <div className="middle">
                <div className="text">Essential</div>
                </div>
            </div>

            <div className="overlay-container">
                <Link to="/tiff-posters-portfolio-posters"><img src="/work4.png" alt="TIFF" /></Link>
                <div className="middle">
                <div className="text">TIFF Posters & Portfolio Posters</div>
                </div>
            </div>

            <div className="overlay-container">
                <Link to="/aqua-water-bottle"><img src="/work5.png" alt="Aqua" /></Link>
                <div className="middle">
                <div className="text">Aqua</div>
                </div>
            </div>

            <div className="overlay-container">
                <Link to="/well-care-app"><img src="/work6.png" alt="Wellcare" /></Link>
                <div className="middle">
                <div className="text">WellCare App</div>
                </div>
            </div>

            <div className="overlay-container">
                <Link to="/weather-app"><img src="/work7.png" alt="Weather" /></Link>
                <div className="middle">
                <div className="text">WellCare App</div>
                </div>
            </div>

        </div>
        <Footer />
    </motion.div>
    
  )
}

export default Work