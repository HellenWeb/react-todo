import React from 'react'
import { Navbar } from '../../element-page/Navbar/Navbar'
import { Footer } from '../../element-page/Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {
    faGithub
} from '@fortawesome/free-brands-svg-icons'
import './home-style.scss'

export const Home = () => {
    return (
        <div>
            <Navbar />
                <div className="intro">
                    <div className="container">
                        <div className="intro__inner">
                            <div className="title">
                                <img
                                    src="https://cdn0.iconfinder.com/data/icons/simpline-mix/64/simpline_39-512.png"
                                    style={{width: 200}}
                                />
                                <h1>Todo App</h1>
                            </div>
                            <p>
                                React app made with "Materialize CSS"
                            </p>
                            <div className="button" style={{paddingTop: 20}}>
                                <a
                                    href="https://github.com/HellenWeb/react-todo"
                                >
                                <button
                                    class="btn waves-effect waves-light btn grey darken-4" type="submit" name="action"
                                ><FontAwesomeIcon
                                    icon={faGithub}
                                    style={{marginRight: 7}} 
                                />
                                    GitHub
                                </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Home