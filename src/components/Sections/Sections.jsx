import './sections.css'
import React from 'react'
import { navTexts } from '../../constants'

export default function Sections () {
  return (
        <main>
            {navTexts.map((text, id) => {
              return (
                    <div
                        className="section"
                        id={text}
                        key={id}
                        data-label={text}><p>{text}</p>
                    </div>)
            })}
        </main>
  )
}
