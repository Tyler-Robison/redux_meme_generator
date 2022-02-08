import React from "react";
import './Meme.css'
import { useDispatch } from "react-redux";

const Meme = ({ top_text, bottom_text, url, id }) => {

    const dispatch = useDispatch()

    const deleteSelf = (id) => {
        dispatch({ type: 'REMOVE_MEME', payload: id })
    }

    return (
        <div onClick={() => deleteSelf(id)} className="indiv-meme">
            <p className="img-top-text">{top_text}</p>
            <p className="img-bottom-text">{bottom_text}</p>
            <img className="meme-img" src={url} alt='meme'></img>
        </div>
    )
}

export default Meme;