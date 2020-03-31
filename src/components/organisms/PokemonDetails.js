import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Loader from "../atoms/Loader";
import Image from "../atoms/Image";
import {TEXTS} from "../../utils/contants";
import {getPokemonDetails} from "../../services/pokemons.service";
import {formatComma, statColor} from "../../utils/helpers";
import StatBar from "../atoms/StatBar";

const PokemonDetails = ({pokemonName}) => {
    const {pending, pokemonDetailsRes, error} = useSelector(state => state.pokemonDetailsData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemonDetails(pokemonName))
    }, [dispatch]);


    // if (pending) {
        return <Loader/>
    // }

    if (error) {
        return (
            <div className="pokemons__list error">
                <span>Error Loading content</span>
            </div>
        )
    }

    return (
        <div className="pokemon__details">
            {(pokemonDetailsRes && pokemonDetailsRes.name) &&
            <>
                <span>
                    <strong>{TEXTS.SPECIE}: </strong>
                    <div>
                    <span>{pokemonDetailsRes.species.name}</span>
                    {pokemonDetailsRes.sprites.front_default && <Image src={pokemonDetailsRes.sprites.front_default} alt="Pokemon Picture"/>}
                    <span
                        className="props">{TEXTS.HEIGHT}: {pokemonDetailsRes.height}, {TEXTS.WEIGHT}: {pokemonDetailsRes.weight}, {TEXTS.ORDER}: {pokemonDetailsRes.order}</span>
                     </div>
                </span>
                <span><strong>{TEXTS.EXPERIENCE}: </strong><span>{pokemonDetailsRes.base_experience}</span></span>
                <span><strong>{TEXTS.TYPES}: </strong><div>{pokemonDetailsRes.types.map((e, i) => (
                    <span key={i}>{e.type.name}{formatComma(pokemonDetailsRes.abilities, i)}</span>
                ))
                }</div></span>
                <span><strong>{TEXTS.STATS}: </strong>
                    <div>
                        {pokemonDetailsRes.stats.map((e, i) => (
                            <div key={i}>
                                {e.stat.name}
                                <StatBar background={statColor(e.base_stat)} percentage={e.base_stat}/>
                            </div>
                        ))
                        }</div>
                </span>
                <span><strong>{TEXTS.ABILITIES}: </strong><div>{pokemonDetailsRes.abilities.map((e, i) => (
                    <span key={i}>{e.ability.name}{formatComma(pokemonDetailsRes.abilities, i)}</span>
                ))
                }</div></span>

            </>
            }
        </div>
    );
}

export default PokemonDetails;
