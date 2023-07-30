import React, { useEffect } from 'react'
import Footer from './Footer'
import { motion } from 'framer-motion'

const FamousQuote = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

  return (
    <motion.div 
        className="container famous-quote"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1}}
    >
        <h1>Philosophical Quote To Live By:</h1>

        <div className="quote-container">
            <div className="quote-left">
                <h2>“There is nothing either good or bad, but thinking makes it so.”― William Shakespeare, Hamlet.</h2>
                <h4>My Personal Feeling:</h4>
                <p>The idea behind this remark resonates more deeply with me since I experience the same emotions whenever I look at projects or works of art. There is no such thing as good or terrible objectively; the concept of good and bad is only something that the human existence and mind may imagine based on societal norms.</p>
            </div>
            <img alt="shakespeare" src="https://ameer-ahmad.github.io/aniq-portfolio/shakespeare.png" />
        </div>
        <Footer />
    </motion.div>
  )
}

export default FamousQuote