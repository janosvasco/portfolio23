import './layout.css'
import React from 'react'
import Navbar from '../Right-side/Navbar'
import Header from '../Header/Header'
import Sections from '../Sections/Sections'

export default function Layout () {
  return (
        <>
            <Header />
            <Sections />
            <Navbar />
        </>
  )
}
