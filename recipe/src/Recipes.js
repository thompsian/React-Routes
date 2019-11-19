import React, { Component } from "react"
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

//Store
import recipes from './store/recipes'

class Recipes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allRecipes: recipes
        }
    }
  render() {
      this.state={
          recipeId: props.match.params.id
      }

    return(
    <Router>
        <div>
            <nav>
                <h1>Recipes</h1>
                <ul>
                     {recipes.map((recipe)=>
                    <li>
                        <Link to={`/recipes/${recipes.id}`}>{recipes.name}</Link>
                    </li>
                    )}
                </ul>
            </nav>

            <Route path="/recipes/:id/" component={Recipes} />
          </div>
    </Router>
    )
  }
}

export default Recipes
