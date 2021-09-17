import React from 'react'
import { Navbar } from '../../element-page/Navbar/Navbar'
import { Footer } from '../../element-page/Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import './info-style.scss'

export const Info = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="container form">
                    <h1 className="title__form"><FontAwesomeIcon icon={faInfoCircle} /> Info App</h1>
                    <div class="row form-info">
                        <div class="col s12 m7">
                            <div class="card blue-grey darken-1">
                                <div class="card-content white-text">
                                    <span class="card-title">React Todo</span>
                                    <p>
                                        Our application is in alpha testing. Application version 0.1.0
                                    </p>
                                </div>
                                <div class="card-action">
                                    <a href="/main">Main</a>
                                    <a>0.1.0</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p id="p1">
                        information about react app
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Info