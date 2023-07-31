import './navbar.css'
import { navTexts } from '../../constants'
import { useState } from 'react'

export default function Navbar() {


    return (
        <nav>
            {navTexts.map((text, id) => (
                <div
                    className='nav-item'
                    key={id}
                >
                    <a href={'#' + text}
                        className="nav-link"
                    >
                    </a>
                    <span className='nav-label'>{text}</span>
                </div>
            ))}
        </nav>
    )
}