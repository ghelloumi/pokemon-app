import logo from "../assets/logo.png"
import loader from "../assets/loader.gif"
import imageNotFound from "../assets/imageNotFound.png"
import close from "../assets/close.jpg"

export const ACTIONS = {
    FETCH_POKEMONS_PENDING: 'FETCH_POKEMONS_PENDING',
    FETCH_POKEMONS_SUCCESS: 'FETCH_POKEMONS_SUCCESS',
    FETCH_POKEMONS_ERROR: 'FETCH_POKEMONS_ERROR',
    FETCH_POKEMON_DETAILS_PENDING: 'FETCH_POKEMON_DETAILS_PENDING',
    FETCH_POKEMON_DETAILS_SUCCESS: 'FETCH_POKEMON_DETAILS_SUCCESS',
    FETCH_POKEMON_DETAILS_ERROR: 'FETCH_POKEMON_DETAILS_ERROR'
}

export const TEXTS = {
    APP_TITLE: "Pokemon App",
    SPECIE: "Specie",
    TYPES: "Types",
    HEIGHT: "Height",
    WEIGHT: "Weight",
    STATS: "Stats",
    ORDER: "Order",
    ABILITIES: "Abilities",
    EXPERIENCE: "Experience",
}

export const ALTS = {
    LOGO_ALT: "Logo picture for the app",
    LOADING_ALT: "Loader animation",
    POKEMON_CARD_ALT: "Pokemon Poster",
    CLOSE_MODEL_ALT: "Close the model button",
}

export const IMAGES = {
    logo, imageNotFound, loader, close
}
