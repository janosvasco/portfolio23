import React from 'react';
import { Link } from 'react-scroll';
import { navTexts } from '../../constants';
import './navbar.css';

export default function Navbar() {
  return (
    <nav>
      {navTexts.map((text, id) => (
        <div className='nav-item' key={id} data-for-section={text}>
          <Link
            to={text}
            spy={true}
            smooth={true}
            offset={0} // Adjust this offset value to consider the height of your sticky navbar
            duration={50} // Adjust the scrolling duration as needed
            activeClass="nav-link-selected"
            className="nav-link"
          ></Link>
          <span className='nav-label'>{text}</span>
        </div>
      ))}
    </nav>
  );
}
