import './navbar.css'
import { navTexts } from '../../constants'
import { useState } from 'react'

export default function Navbar() {


    return (
        <nav>
            {navTexts.map(text => (
                <div className='nav-item'>
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

/* import './navbar.css'
import { navTexts } from '../../constants'
import { useState } from 'react'

export default function Navbar() {

    const [classN, setClassN] = useState("nav-link");

    function handleMouseEnter() {
        setClassN("nav-link-selected");
    }

    function handleMouseLeave() {
        setClassN("nav-link");
    }

    return (
        <nav>
            {navTexts.map(text => (
                <div className='nav-item'>
                    <a
                        href={'#' + text}
                        className={classN}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {text}
                    </a>
                    <span className='nav-label'>{text}</span>
                </div>
            ))}
        </nav>
    )
}
 */