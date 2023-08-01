import React, { useState } from 'react';
import { navTexts } from '../../constants';
import './navbar.css';

export default function Navbar() {
  const [classStates, setClassStates] = useState(navTexts.map(() => 'nav-link'));

  const handleMouseEnter = (id) => {
    const updatedStates = [...classStates];
    updatedStates[id] = 'nav-link nav-link-selected';
    setClassStates(updatedStates);
  };

  const handleMouseLeave = (id) => {
    const updatedStates = [...classStates];
    updatedStates[id] = 'nav-link';
    setClassStates(updatedStates);
  };

  const handleTouchStart = (id) => {
    const updatedStates = [...classStates];
    updatedStates[id] = 'nav-link nav-link-selected';
    setClassStates(updatedStates);
  };

  const handleTouchEnd = (id) => {
    const updatedStates = [...classStates];
    updatedStates[id] = 'nav-link';
    setClassStates(updatedStates);
  };

  return (
    <nav>
      {navTexts.map((text, id) => (
        <div className='nav-item' key={id} data-for-section={text}>
          <a
            href={'#' + text}
            className={classStates[id]}
            onMouseEnter={() => handleMouseEnter(id)}
            onMouseLeave={() => handleMouseLeave(id)}
            onTouchStart={() => handleTouchStart(id)}
            onTouchEnd={() => handleTouchEnd(id)}
          ></a>
          <span className='nav-label'>{text}</span>
        </div>
      ))}
    </nav>
  );
}
