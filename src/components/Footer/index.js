import React from 'react'
import { FaGithub, FaLinkedinIn, FaTwitterSquare } from 'react-icons/fa'

function Footer() {
    return (
        <footer>
            <a href='https://github.com/ryanms1' rel={'noreferrer'} target={'_blank'}>
                <FaGithub />
            </a>
            <a href='https://www.linkedin.com/' rel={'noreferrer'} target={'_blank'}>
                <FaLinkedinIn />
            </a>
            <a href='https://twitter.com/?lang=en' rel={'noreferrer'} target={'_blank'}>
                <FaTwitterSquare />
            </a>
        </footer>
    )
}

export default Footer;