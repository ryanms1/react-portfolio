import React from 'react'
import Project from '../Project'

function Portfolio() {
    const projects = [
        {
            name: 'EndlessFlix',
            deployed: 'https://hoffnik.github.io/project1-movieLibrary/',
            repo: 'https://github.com/hoffnik/project1-movieLibrary'
        },
        {
            name: 'Doodly',
            deployed: 'https://doodly-site.herokuapp.com/',
            repo: 'https://github.com/ah-fang/doodly'
        },
        {
            name: 'RunBuddy',
            deployed: 'https://ryanms1.github.io/run-buddy/',
            repo: 'https://github.com/ryanms1/run-buddy'
        }
    ]
    return (
        <section>
            <h2>Portfolio</h2>
            <div className='projects'>
                {projects.map((project, index) => (
                    <Project name={project.name} deployed={project.deployed} repo={project.repo} index={index}></Project>
                ))}
            </div>
        </section>
    )
}

export default Portfolio;