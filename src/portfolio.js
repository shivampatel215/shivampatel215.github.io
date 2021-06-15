import React from 'react'
import Card from './card.js';
import {portfolioData} from './data/constants.js';
import './portfolio.scss';

function portfolio() {
    return (
        <div className="projects">
        {portfolioData.map((project) => (
        <Card title={project.title} description={project.description} websitelink={project.websitelink} imgsrc={project.imgsrc} color={project.color} />
      ))} 
        </div>
    )
}

export default portfolio
