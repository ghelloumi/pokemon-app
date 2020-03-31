import React, {useState} from 'react';
import Modal from "../atoms/Modal";
import PokemonDetails from "../organisms/PokemonDetails";

const PokemonCard = ({pokemon}) => {
    const [modal, setModal] = useState(false)
    const {name, url} = pokemon
    return (
        <div className="pokemon__card" onClick={() => setModal(true)}>
            {name}
            {modal && <Modal close={() => setModal(false)}>
                <span>
                    {name}
                </span>
                <PokemonDetails pokemonName={name}/>
            </Modal>}
        </div>
    );
}

export default PokemonCard;
