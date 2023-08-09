import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { navTexts } from '../../constants'
import './navbar.css'

export default function Navbar() {
  const [activeLinkIndex, setActiveLinkIndex] = useState(null);
  return (
    <nav>
      {navTexts.map((text, id) => (
        <div
          className={`nav-item ${id === activeLinkIndex ? 'active' : ''}`}
          key={id}
          data-for-section={text}
        >
          <Link
            to={text}
            spy={true}
            smooth={true}
            offset={0} // Adjust this offset value to consider the height of your sticky navbar
            duration={300} // Adjust the scrolling duration as needed
            activeClass={`nav-link-selected${id === 3 ? '-white' : ''}`}
            className="nav-link"
            onClick={() => setActiveLinkIndex(id)}
          ></Link>
            <span className={`nav-label ${activeLinkIndex === id && id === 3 ? 'nav-label-white' : ''}`}>{text}</span>

        </div>
      ))}
    </nav>
  )
}