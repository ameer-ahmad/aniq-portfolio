import React from 'react'

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

  return (
    <div className="footer">
        <p className="back-to-top" onClick={scrollToTop}>Back to top <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M18.0699 9.57L11.9999 3.5L5.92993 9.57M11.9999 20.5V3.67" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg></p>
        <div className='footer-container'>
            <p>&copy; Aniq Khan Copyrights Reserved</p>
            <div>
                <img src="https://ameer-ahmad.github.io/aniq-portfolio/Behance.png" alt="behance" />
                <a href="https://www.linkedin.com/in/aniq-khan-4631951b7/" target='_blank' rel='noreferrer'><img src="https://ameer-ahmad.github.io/aniq-portfolio/LinkedIn.png" alt="LinkedIn" /></a>
                <a href='https://dribbble.com/AniqKhan' target='_blank' rel='noreferrer'><img src="https://ameer-ahmad.github.io/aniq-portfolio/dribbble.png" alt="dribbble" /></a>
            </div>
        </div>
    </div>
  )
}

export default Footer