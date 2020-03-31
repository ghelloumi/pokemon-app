import React, {useEffect, useState} from 'react';
import Modal from "../atoms/Modal";
import PokemonDetails from "../organisms/PokemonDetails";
import Image from "../atoms/Image";
import {ALTS, IMAGES} from "../../utils/contants";
import {useDispatch, useSelector} from "react-redux";
import {pokemonsFavListActions} from "../../redux/actions";
import {saveFavList} from "../../utils/helpers";

const PokemonCard = ({pokemon}) => {
    const [modal, setModal] = useState(false)
    const {name} = pokemon
    const favList = useSelector(state => state.favList);

    useEffect(() => {
        saveFavList(favList)
    }, [favList])

    const handleCardClick = (e) => {
        if (e.target.tagName.toUpperCase() !== "IMG") {
            setModal(true)
        }
    }

    const dispatch = useDispatch()

    const handleFavClick = () => {
        dispatch(favList.data.find(e => e === name) ?
            pokemonsFavListActions.removePokementFromFavList(name) :
            pokemonsFavListActions.addPokemonToFavListAction(name))
    }


    return (
        <div className="pokemon__card" onClick={handleCardClick}>
            <span>{pokemon.name}</span>
            <Image src={IMAGES.favIcon} alt={ALTS.ADD_TO_FAVORY}
                   opacity={favList.data.find(e => e === name) ? 0.7 : 0.2}
                   onClick={handleFavClick}/>
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
