import React from 'react'
import { Navbar } from '../../element-page/Navbar/Navbar'
import { Footer } from '../../element-page/Footer/Footer'
import './main-style.scss'

export const Main = () => {
    return (
        <div>
            <Navbar/>
            <Footer />
        </div>
    )
}

export default Main