import './Footer.css';
import React from 'react';

class Footer extends React.Component {
    render() { 
        return ( 
            <div className='footer' id='Contact'>
                <div className='contact-section'>
                    <h3>Contact Me!</h3>
                    <a href="mailto:CodingWHenry@gmail.com">CodingWHenry@gmail.com</a>
                </div>
                <div className='social-media'>
                    <h3>Social Media</h3>
                    <p>
                    <a 
                        href="https://github.com/HenryDelGlitch" 
                        target="_blank" 
                        rel="noreferrer"
                        aria-label="Github Page">

                        <i class="fab fa-github"></i>
                    </a>
                    </p>
                    <p>
                    <a 
                        href="https://twitter.com/GlitchDel" 
                        target="_blank" 
                        rel="noreferrer"
                        aria-label="Twitter Page">
                        <i class="fab fa-twitter"></i>
                    </a>
                    </p>
                </div>
          </div>
        );
    }
}
 
export default Footer;