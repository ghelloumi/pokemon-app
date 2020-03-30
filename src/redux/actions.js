import {ACTIONS} from "../utils/contants";

// Pokemons Actions
export const pokemonsActions = {
    fetchPokemonsPending: () => {
        return {
            type: ACTIONS.FETCH_POKEMONS_PENDING
        }
    },
    fetchPokemonsSuccess: (pokemonsRes) => {
        return {
            type: ACTIONS.FETCH_POKEMONS_SUCCESS,
            pokemonsRes
        }
    },
    fetchPokemonsError: (error) => {
        return {
            type: ACTIONS.FETCH_POKEMONS_ERROR,
            error
        }
    }
}

// Pokemons Details Actions
export const pokemonDetailsActions = {
    fetchPokemonDetailsPending: () => {
        return {
            type: ACTIONS.FETCH_POKEMON_DETAILS_PENDING
        }
    },
    fetchPokemonDetailsSuccess: (pokemonDetailsRes) => {
        return {
            type: ACTIONS.FETCH_POKEMON_DETAILS_SUCCESS,
            pokemonDetailsRes
        }
    },
    fetchPokemonDetailsError: (error) => {
        return {
            type: ACTIONS.FETCH_POKEMON_DETAILS_ERROR,
            error
        }
    }
}
