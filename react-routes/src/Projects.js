import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom"

import Projects1 from './Projects1'

class Projects extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h1>Projects</h1>
                    <ul>
                        <Link to="/Projects/1/">Project 1</Link>
                    </ul>
                    <Route path="/Projects/1/" component={Projects1} />
                </div>
            </Router>
        )
    }
}

export default Projects
