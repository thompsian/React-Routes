import React, { Component } from "react"
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

//Pages
import AboutMe from './AboutMe'
import Skills from './Skills'
import Home from './Home'
import Projects from './Projects'

class App extends Component {
  render() {
    return(
    <Router>
        <div>
            <nav>
                <h1>My Portfoli, yo</h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/AboutMe/">About Me</Link>
                    </li>
                    <li>
                        <Link to="/Skills/">Skills</Link>
                    </li>
                    <li>
                        <Link to="/Projects/">Projects</Link>
                    </li>
                </ul>
            </nav>

            <Route path="/AboutMe/" component={AboutMe} />
            <Route path="/Skills/" component={Skills} />
            <Route path="/" exact component={Home} />
            <Route path="/Projects/" component={Projects} />
          </div>
    </Router>
    )
  }
}

export default App
