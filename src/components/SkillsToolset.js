import React, { useEffect } from 'react'
import Footer from './Footer'
import { motion } from 'framer-motion'

const SkillsToolset = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

  return (
    <motion.div 
        className="container skillsTools"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1}}
    >
        <div className="skills-title">
            <h1>Skills & Toolset</h1>
            <p>  General information on the skills and toolset that I use for being a Graphic designer. A list of skills and tools that I have from my experience being a Graphic Designer. </p>
        </div>
       
        <div className='skills-img'>
            <img  src="https://ameer-ahmad.github.io/aniq-portfolio/skills-text.png" alt='skills'/>  
        </div>
          

        <div className="skills-container">
            <div className="skill">
                <img src="https://ameer-ahmad.github.io/aniq-portfolio/skills1.png" alt='typography'/>
                <h5>Typography</h5>
                <p>Able to use typography to express and configure intricate use of type into projects and artwork.</p>
            </div>
            <div className="skill">
                <img src="https://ameer-ahmad.github.io/aniq-portfolio/skills2.png" alt='Design Principles'/>
                <h5>Design Principles</h5>
                <p>Configuring designing principles with poster design and in any type of design to express the flow of design.</p>
            </div>
            <div className="skill">
                <img src="https://ameer-ahmad.github.io/aniq-portfolio/skills3.png" alt='UI/UX Design'/>
                <h5>UI/UX Design</h5>
                <p>User design with app creating, using figma to create a well thought out design to execute the app design.</p>
            </div>
            <div className="skill">
                <img src="https://ameer-ahmad.github.io/aniq-portfolio/skills4.png" alt='Illustration'/>
                <h5>Illustration</h5>
                <p>Able to create illustrations and intricate designs to any needs.</p>
            </div>
            <div className="skill">
                <img src="https://ameer-ahmad.github.io/aniq-portfolio/skills5.png" alt='Ideation'/>
                <h5>Ideation</h5>
                <p>Important to have a good sense of ideation, and generating creative ideas and using them effectively.</p>
            </div>
            <div className="skill">
                <img src="https://ameer-ahmad.github.io/aniq-portfolio/skills6.png" alt='Color Theory '/>
                <h5>Color Theory </h5>
                <p>Strong sense of color theory and matching specific colors to making a well orientated design.</p>
            </div>
        </div>

        <div className="other-skills">
            <div>
                <h2>Other</h2>
                <h2>Skills</h2>
            </div>
            <div className="writing-img">
                <img src='/Writing.png' alt='writing' />
            </div>  
        </div>

        <div className="other-skills-container">
            <ul>
                <li>Logo creation</li>
                <li>Layout</li>
                <li>Spacing</li>
                <li>Storyboarding</li>
                <li>Color sense</li>
                <li>Composition</li>
            </ul>
            <img src='/other-skills-shapes.png' alt='shapes' />
        </div>

        <div className="toolset-img">
            <img src='/toolset.png' alt='toolset' />
        </div>
        

        <div className="toolset-container">
            <div className="tool-container">
               <img src='/tool1.png' alt='Adobe Illustrator'/>
               <p className="tool-title">Adobe Illustrator</p>
               <p className="tool-desc">I am competent and knowledgeable throughout the application, and I am able to comprehend ideas and produce things using them.</p>
            </div>
            <div className="tool-container">
               <img src='/tool2.png' alt='Adobe InDesign'/>
               <p className="tool-title">Adobe InDesign</p>
               <p className="tool-desc">Capable of copyfitting text, type alignment, poster grids, etc. efficiently. I can utilize the application but am knowledgeable about it.</p>
            </div>
            <div className="tool-container">
               <img src='/tool3.png' alt='Adobe Photoshop'/>
               <p className="tool-title">Adobe Photoshop</p>
               <p className="tool-desc">I've used Photoshop before. I have the ability to quickly make goods for clients in a variety of methods. I can design posters, advertising, mockups, and other visual materials.</p>
            </div>
            <div className="tool-container">
               <img src='/tool4.png' alt='Miro'/>
               <p className="tool-title">Miro</p>
               <p className="tool-desc">Web Design and UI/UX design, Miro is a website to either create webflows generating ideas. I am able to create websites or icons.</p>
            </div>
            <div className="tool-container">
               <img src='/tool5.png' alt='Figma'/>
               <p className="tool-title">Figma</p>
               <p className="tool-desc">Figma is a program allows UI/UX interface designs. It allows to make intricate designs making smooth layouts and interactive design prototypes. </p>
            </div>
        </div>

        <Footer />
    </motion.div>
  )
}

export default SkillsToolset