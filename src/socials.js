import React from 'react'
import './socials.scss'
function socials() {
    return (
        <div className="socials">
            <div orientation="left" className="social-nav-links">
            <ul><li>
                <a href="https://github.com/shivampatel215" target="_blank" aria-label="GitHub">
                    <i class="fab fa-github grow" ></i>
                    </a></li><li><a href="https://www.linkedin.com/in/shivampatel215/" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin grow" ></i></a>
                    </li><li><a href="mailto:shivpat0215@gmail.com" target="_blank" aria-label="Email"><i class="far fa-envelope grow" ></i></a></li><li><a href="https://www.twitter.com/shivampatel215/" target="_blank" aria-label="Twitter"><i class="fab fa-twitter grow" ></i></a></li>
                    </ul>

            </div>
            <div orientation="right" className="email-nav-right">
                <div className="email-right-bar">
                    <a class="email-tag-right grow" href="mailto:shivpat0215@gmail.com" target="_blank" aria-label="Email">shivpat0215@gmail.com</a>
                </div>

            </div>
            
            
        </div>
    )
}

export default socials
