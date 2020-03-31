import React, {useState} from 'react'
import PokemonCard from "../molecules/PokemonCard";
import {useSelector} from "react-redux";
import Modal from "../atoms/Modal";

const FavouritePokemons = () => {
    const favList = useSelector(state => state.favList);
    const [modal, setModal] = useState(false)

    console.log(modal)

    return (
        <div className="favPok">
            <button onClick={() => setModal(true)}>
                Favourite Pokemons List
                {modal && <Modal close={() => setModal(false)}>
                    <div className="pokemons__list">
                        {favList.data.map((name, i) => (
                            <PokemonCard key={i} pokemon={{name}}/>
                        ))}
                    </div>
                </Modal>}
            </button>
        </div>
    )
}

export default FavouritePokemons
