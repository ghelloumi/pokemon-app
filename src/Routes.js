import React from 'react';
import {Route, Switch, Redirect, BrowserRouter as Router} from 'react-router-dom'
import PokemonsList from "./components/organisms/PokemonsList";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' render={() => <Redirect to='page/1'/>}/>
                <Route exact path='/page/:id' render={(props) => <PokemonsList {...props}/>}/>
            </Switch>
        </Router>
    )
}

export default Routes
