import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Loader from "../atoms/Loader";
import Image from "../atoms/Image";
import {ALTS, IMAGES, TEXTS} from "../../utils/contants";
import {getPokemonDetails} from "../../services/pokemons.service";

const PokemonDetails = ({pokemonName}) => {
    const {pending, pokemonDetailsRes, error} = useSelector(state => state.pokemonDetailsData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemonDetails(pokemonName))
    }, [dispatch]);

    console.log(pokemonDetailsRes, pending, error)

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
        <div className="pokemon__details">
            {pokemonDetailsRes &&
            <>
                <div></div>
            </>
            }
        </div>
    );
}

export default PokemonDetails;
