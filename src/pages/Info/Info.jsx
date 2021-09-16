import React from 'react'
import { Navbar } from '../../element-page/Navbar/Navbar'
import { Footer } from '../../element-page/Footer/Footer'

export const Info = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>Info</h1>
            </div>
            <Footer />
        </div>
    )
}

export default Info