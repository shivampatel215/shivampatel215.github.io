import React from 'react';
import './card.scss';
// import mewtwo from './data/images/mewtoo.png';
import {portfolioData} from './data/constants.js';

function card(props) {
    return (
    
            <div class="container">
                <div class={`card ${props.color}`}>
                    <div class="imgBx">
                    <img src={`${process.env.PUBLIC_URL}/images/${props.imgsrc}`} />
                    </div>
                    <div class="contentBx">
                    <h2>{props.title}</h2>
                    <div class="size">
                        <h3>{props.description}</h3>
                    </div>
                    <a target="_blank" href={props.websitelink}>Check Out</a>
                    <a class="git" href={props.githublink} target="_blank" aria-label="GitHub">
                    <i class="fab fa-github grow" ></i></a>
                    </div>
                </div>
            </div>

            
        
    )
}

export default card
