import {headers, URI} from "../config/api.config";
import {pokemonDetailsActions, pokemonsActions} from '../redux/actions';

export const getPokemons = (resultPerPage, resultIndex) => (
    async dispatch => {
        dispatch(pokemonsActions.fetchPokemonsPending());
        try {
            const res = await fetch(`${URI}pokemon/?limit=${resultPerPage}&offset=${resultIndex}`, {
                method: 'GET',
                headers
            })
            const resJson = await res.json()
            if (resJson.error) {
                throw(resJson.error);
            }
            dispatch(pokemonsActions.fetchPokemonsSuccess(resJson))
            return resJson;
        } catch (e) {
            dispatch(pokemonsActions.fetchPokemonsError(e));
        }
    }
)

export const getPokemonDetails = (name) => (
    async dispatch => {
        dispatch(pokemonDetailsActions.fetchPokemonDetailsPending());
        try {
            const res = await fetch(`${URI}pokemon/${name}`, {
                method: 'GET',
                headers
            })
            const resJson = await res.json()
            if (resJson.error) {
                throw(resJson.error);
            }
            dispatch(pokemonDetailsActions.fetchPokemonDetailsSuccess(resJson))
            return resJson;
        } catch (e) {
            dispatch(pokemonDetailsActions.fetchPokemonDetailsError(e));
        }
    }
)
