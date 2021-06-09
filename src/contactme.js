import React from 'react'
import './contactme.scss';
import './navbar.scss';

function contactme() {
    return (
        <div className="contact-me">
            <p>I am currently looking for new opportunities and would love to speak with you! 
                <br></br>
                Don't be a stranger - whether it's just to say hi or to discuss a new project.</p>
            <p>Click the button below to email me.</p>
            <div className="email-button">
            <a class="hbtn hb-border-bottom-br2" href="mailto:shivpat0215g@gmail.com" rel="noopener noreferrer" target="_blank">reach out</a>
            </div>
        </div>
    )
}

export default contactme
