import React, { Component } from "react"
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";



//Pages
import AboutUs from './AboutUs'
import Home from './Home'
import Recipes from './Recipes'

class App extends Component {
  render() {
    return(
    <Router>
        <div>
            <nav>
                <h1>Recipes</h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/AboutUs/">About Us</Link>
                    </li>
                    <li>
                        <Link to="/Recipes/">Recipes</Link>
                    </li>
                </ul>
            </nav>

            <Route path="/AboutUs/" component={AboutUs} />
            <Route path="/" exact component={Home} />
            <Route path="/Recipes/" component={Recipes} />
          </div>
    </Router>
    )
  }
}

export default App
