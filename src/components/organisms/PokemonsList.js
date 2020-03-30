import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPokemons} from "../../services/pokemons.service";
import Loader from "../atoms/Loader";
import PokemonCard from "../molecules/PokemonCard";
import Pagination from "../molecules/Pagination";
import {RESULTS_PER_PAGE} from "../../config/api.config";
import {withRouter} from 'react-router-dom';


const PokemonsList = (props) => {
    const {pending, pokemonsRes, error} = useSelector(state => state.pokemonsData);
    const dispatch = useDispatch();
    const pageId = props.match.params.id
    const resultIndex = (props.match.params.id - 1) * RESULTS_PER_PAGE

    useEffect(() => {
        dispatch(getPokemons(RESULTS_PER_PAGE, resultIndex))
    }, [pageId]);

    if (pending) {
        return <Loader/>
    }

    if (error) {
        return (
            <div className="pokemons__list error">
                <span>Error Loading content: {error}</span>
            </div>
        )
    }

    return (
        <>
            {pokemonsRes.results && <>
                <div className="pokemons__list">
                    {pokemonsRes.results.map((pokemon, i) => (
                        <PokemonCard key={i} pokemon={pokemon}/>
                    ))}
                </div>
                <Pagination count={pokemonsRes.count} pageId={pageId}/>
            </>}
        </>
    );
}

export default withRouter(PokemonsList);
