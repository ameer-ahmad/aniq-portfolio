import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Footer from './Footer'

const PointCrossBeach = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

  return (
    <motion.div
        className="container point-cross"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1}}
    >
        <div className="title-container">
            <h1>Point Cross Beach RV Park</h1>
            <p>Company : Point Cross Beach RV Park ( Point Cross, Nova Scotia )</p>
            <p>Applications Used: Adobe Photoshop, Adobe Illustrator</p>
        </div>

        <div className="text-image-container">
            <div className="summary-container left-text-container">
                <h2>[Summary]</h2>
                <p>Experience the awe-inspiring image of an RV emerging boldly from a crashing wave, accompanied by the ethereal silhouette of an abstract sun, in this captivating billboard art designed exclusively for Point Cross Beach RV Park in Nova Scotia.</p>
            </div>
            <div className='image-container'>
                <img src="https://ameer-ahmad.github.io/aniq-portfolio/point-cross.png" alt="Point Cross Beach RV Park" />
            </div>
        </div>

        <div className="text-image-container">
            <div className="design-process left-text-container">
                <h2>[Design Process]</h2>
                <p>The creation of the Point Cross RV Beach Park billboard involved a meticulous design process, capturing the essence of this unique destination by skillfully depicting an RV emerging from a crashing wave, complemented by an abstract sun symbolizing warmth and radiance. With careful attention to detail, perspective, color, and composition, the artwork invites viewers to embark on their own adventures and embrace the serene beauty of Point Cross Beach RV Park.</p>
            </div>
            <div className='image-container'>
                <img src="https://ameer-ahmad.github.io/aniq-portfolio/web-design2.png" alt="Web Design" />  
            </div>
        </div>

        <div className='rv-image-container'>
            <img src="https://ameer-ahmad.github.io/aniq-portfolio/mockup-rv.png" alt="RV Mockup" /> 
            <img src="https://ameer-ahmad.github.io/aniq-portfolio/conclusion2.png" alt="conclusion" /> 
            <img src="https://ameer-ahmad.github.io/aniq-portfolio/final.png" alt="Final Mockups" className='final-mockups' /> 
            <img src="https://ameer-ahmad.github.io/aniq-portfolio/final-rv.png" alt="Point Cross Final" />  
            <div className='shirt-container'>
                <div>
                    <img src="https://ameer-ahmad.github.io/aniq-portfolio/tshirt1.png" alt="Point Cross T Shirt 1" className='rv-shirt'/>  
                </div>
                <div>
                    <img src="https://ameer-ahmad.github.io/aniq-portfolio/tshirt2.png" alt="Point Cross T Shirt 2" className='rv-shirt'/>
                </div>
            </div> 
            <img src="https://ameer-ahmad.github.io/aniq-portfolio/rv-mug.png" alt="Point Cross Mug" />   
        </div>

        <Footer />
        
    </motion.div>
  )
}

export default PointCrossBeach