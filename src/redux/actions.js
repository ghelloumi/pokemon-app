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

// Add Pokemon to favList
export const pokemonsFavListActions = {
    addPokemonToFavListAction: (name) => {
        return {
            type: ACTIONS.ADD_POKEMON_TO_FAVLIST_ACTION,
            name
        }
    },
    removePokementFromFavList: (name) => {
        return {
            type: ACTIONS.REMOVE_POKEMON_TO_FAVLIST_ACTION,
            name
        }
    }
}
