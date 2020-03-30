import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PokemonsList from "../organisms/PokemonsList";
import Pagination from "../molecules/Pagination";

const Pokemons = () => {
    return (
        <div className="pokemons">
            <div className="pokemons__content">
                <Router>
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to='page/1'/>}/>
                        <Route exact path='/page/:id' render={(props) => <PokemonsList {...props}/>}/>
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default Pokemons;
