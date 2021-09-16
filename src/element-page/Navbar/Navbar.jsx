import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {
    faReact
} from '@fortawesome/free-brands-svg-icons'

export const Navbar = () => {
    return (
        <nav>
            <div class="nav-wrapper navbar purple lighten-3">
                <div className="container">
                    <a href="/home" class="brand-logo center"><FontAwesomeIcon icon={faReact} style={{ marginRight: 7 }} />Todo</a>
                    <ul id="nav-mobile" class="left hide-on-med-and-down">
                        <li><a className="waves-effect waves-light btn indigo accent-3 btn pulse" href="/main">Main</a></li>
                        <li><a href="/info">Info</a></li>
                        <li><a href="/home">Home</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar