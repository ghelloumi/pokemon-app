import {ACTIONS} from "../utils/contants";
import {combineReducers} from "redux";

const initialPokemonsState = {
    pending: false,
    pokemonsRes: {},
    error: null
}

const initialPokemonDetailsState = {
    pending: false,
    pokemonDetailsRes: {},
    error: null
}

const initialFavListState = {
    data: []
}


const pokemonsData = (state = initialPokemonsState, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_POKEMONS_PENDING:
            return {
                ...state,
                pending: true
            }
        case ACTIONS.FETCH_POKEMONS_SUCCESS:
            return {
                ...state,
                pending: false,
                pokemonsRes: action.pokemonsRes
            }
        case ACTIONS.FETCH_POKEMONS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

const pokemonDetailsData = (state = initialPokemonDetailsState, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_POKEMON_DETAILS_PENDING:
            return {
                ...state,
                pending: true
            }
        case ACTIONS.FETCH_POKEMON_DETAILS_SUCCESS:
            return {
                ...state,
                pending: false,
                pokemonDetailsRes: action.pokemonDetailsRes
            }
        case ACTIONS.FETCH_POKEMON_DETAILS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

const favList = (state = initialFavListState, action) => {
    switch (action.type) {
        case ACTIONS.ADD_POKEMON_TO_FAVLIST_ACTION:
            return {
                ...state,
                data: [...state.data, action.name]
            }
        case ACTIONS.REMOVE_POKEMON_TO_FAVLIST_ACTION:
            return {
                ...state,
                data: state.data.filter(name => name !== action.name)
            }
        default:
            return state;
    }
}

const reducers = combineReducers({
    pokemonsData,
    pokemonDetailsData,
    favList
})

export default reducers
