import React from "react";
import { useSelector } from "react-redux";
import Meme from "./Meme";
import './MemeContainer.css'

const MemeContainer = () => {
    // dispatch will be needed for removing memes

    const memes = useSelector(store => store.memes)
 

    console.log('meme container', memes)

    return (
        <div className="meme-container">
            {memes.map(meme => {
                return <Meme
                    top_text={meme.top_text}
                    bottom_text={meme.bottom_text}
                    url={meme.url}
                    id={meme.id}
                    key={meme.id}
                />
            })}
        </div>
    )
}

export default MemeContainer;