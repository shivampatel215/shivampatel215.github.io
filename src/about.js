import React from 'react';
import './about.scss';

function about() {
    return (
        <div className="about-me">
            <div className="about-me-paragraphs">
                <p>Thanks for taking the time to look through my site! My name is Shivam Patel and I am a software developer with a passion for building beautiful products that live on the internet. 
                    I graduated from UC Berkeley in 2019, and have been working to improve my skills ever since. My main focus these days is building accessible, inclusive products and continuing to build my portfolio. </p>
                <p>When I’m not developing, I’m spending way too much time on twitter, watching sports, or losing my money in crypto. My other hobbies include adding new cool books to my <a href="https://www.goodreads.com/user/show/128354013-shivam" target="_blank">list</a> instead of actually reading them, and not being able to decide what 
                to <a href="https://letterboxd.com/shivamp/" target="_blank">watch</a> tonight. 
                    But hey, at least I finished this website. I’m always open to hearing about exciting new projects to work on so feel free to reach out, or just say hello!</p>
            </div>
            <img src={`${process.env.PUBLIC_URL}/images/profile.png`} className="profile-photo" alt="profile"></img>
        </div>
    )
}

export default about
