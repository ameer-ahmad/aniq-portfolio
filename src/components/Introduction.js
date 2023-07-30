import React, { useEffect } from 'react'
import Footer from './Footer'
import { motion } from 'framer-motion'

const Introduction = () => {


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
        <div className="introduction-background">
            <h1>Introduction & Background</h1>
            <div className="intro">
                <img src="/aniq.png" alt='' />
                <div className="intro-right">
                    <h3>Hello, my name is <span>Aniq Khan</span>. I am a <span>Graphic Designer</span>.</h3>
                    <p>I am a Graphic Designer at George Brown College. I have a strong passion for expressing my own creative ideas and expressive thoughts into my work, my goal is to be well recognized in the industry, And to achieve to a point to inspire others within the line of my work.</p>
                    <br/>
                    <p>Since I was a child, I have always had a deep appreciation for art and design, and I spent much of my free time sketching, painting and exploring various creative mediums. As I grew older, my interest in design only intensified, and I began to explore the world of graphic design, discovering how it could be used to communicate complex messages and ideas in a simple and visually appealing way. I am passionate about using my skills and creativity to help businesses and individuals create meaningful and impactful design solutions that resonate with their audience. </p>
                    <br/>
                    <p>What I love most about being a graphic designer is the ability to bring ideas to life through visual communication. Whether it's a branding project, a print advertisement or a website design, I take great pride in working with clients to understand their vision and translate it into a compelling design that tells their story.</p>
                    <br/>
                    <p>Ultimately, I am passionate about being a graphic designer because it allows me to combine my love of art and design with my desire to make a positive impact in the world. I believe that design has the power to shape perceptions, change behavior and inspire action, and I am committed to using my skills and passion to create designs that make a difference. </p>
                    <br/>
                    <p>Throughout this website you will see projects and mockups that I have created to show my experience. Currently Im looking for any internships or jobs, Feel free to contact me by LinkedIn or by email.</p>
                </div>
            </div>
            <div className="intro-container">
                <div className="left-container">
                    <h2>Goals & Aspirations</h2>
                    <p>For me my goals and aspirations are aimed high throughout this position. Its really important for me to aim high and be optimistic on where I stand. But I am a person who is always ready to keep on growing higher and higher to reach my full potential. I want to make it to a place where I will be noticed and chosen for my value. </p>
                    <br />
                    <p>An even bigger goal is to be as valuable as possible learning as many skills and software as I can to increase my value as a service for people. I want to be at my best when it comes to my work. I want to be noticed within my line of work. But most importantly I just want to keep learning.</p>
                </div>
                <img src="/roadmap.png" alt="roadmap" />
            </div>
            <div className='intro-container'>
                <div className='left-container'>
                    <h2>Background & Education</h2>
                    <p>My personal background and ethnicity is from Pakistan. My mom is originally from Pakistan and then my dad is from India but basically originated in Pakistan. Me personally I was born in Toronto and I've grown up in Ontario basically all my life. </p>
                    <br />
                    <p>As for my education I am currently enrolled into George Brown College for a Graphic Design program. I am currently in my second year throughout the program. I am extremely excited about creating intricate pieces even when I am at school.</p>
                </div>
                <img src="/education.png" alt="education" />
            </div>
            <div className='intro-container'>
                <div className='left-container'>
                    <h2>My Favourite Movies & TV Shows:</h2>
                    <p>These are some of the movies that I have really enjoyed watching and movies that have really stuck with me as some enjoyable and well worth the watch of movies. And I highly recommend watching these movies.</p>
                    <br />
                    <p>Personally I am a very big fan of movies and the different types of movies that are out there. For me I love thrillers, or good light hearted films. But here are the films that are kept close to me for a long time, and some films are recent as well as I'm always expanding my list. or changing it. </p>
                    <br />
                    <p>TV shows are amazing to me I prefer them over movies personally and it gets me more engaged I have plenty of TV shows that I personally love.</p>
                </div>
                <img src="/cinema.png" alt="cinema" />
            </div>

            <div className='fav-movies'>
                <div className='fav-movie'>
                    <img src='/movie1.png' alt='Everything Every Where All At Once' />
                    <p>Everything Every Where All At Once</p>
                </div>
                <div className='fav-movie'>
                    <img src='/movie2.png' alt='Forgotten' />
                    <p>Forgotten</p>
                </div>
                <div className='fav-movie'>
                    <img src='/movie3.png' alt='Parasite' />
                    <p>Parasite</p>
                </div>
                <div className='fav-movie'>
                    <img src='/movie4.png' alt='Forest Gump' />
                    <p>Forest Gump</p>
                </div>
                <div className='fav-movie'>
                    <img src='/movie5.png' alt='Barry' />
                    <p>Barry</p>
                </div>
                <div className='fav-movie'>
                    <img src='/movie6.png' alt='The Bear' />
                    <p>The Bear</p>
                </div>
                <div className='fav-movie'>
                    <img src='/movie7.png' alt='Breaking Bad' />
                    <p>Breaking Bad</p>
                </div>
                <div className='fav-movie'> 
                    <img src='/movie8.png' alt='Better Call Saul' />
                    <p>Better Call Saul</p>
                </div>
            </div>
            <Footer /> 
        </div>
    </motion.div>
  )
}

export default Introduction