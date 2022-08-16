import React from 'react'
import { FaGithub, } from 'react-icons/fa'

function Project(props) {

    const { name, deployed, repo, index } = props

    return (
        <div className='project'>
            <img className='image' src={require(`../../assets/images/${index}.jpg`)} alt={name} />
            <div className='links'>
                <a href={deployed} rel={'noreferrer'} target={'_blank'}><span>{name}</span></a>
                <a href={repo} rel={'noreferrer'} target={'_blank'}><span>{<FaGithub />}</span></a>
            </div>
        </div>
    )
}

export default Project;