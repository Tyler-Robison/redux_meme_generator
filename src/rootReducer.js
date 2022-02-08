const INITIAL_STATE = { memes: [] };

const removeMeme = (memeArray, id) => {
    return memeArray.filter(meme => meme.id !== id)
}

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        // action.payload is the new meme
        // dispatch({ type: "ADD_MEME", payload: newMeme })
        case "ADD_MEME":
            return { ...state, memes: [...state.memes, action.payload] };

        // action.payload is the meme id
        // dispatch({ type: 'REMOVE_MEME', payload: id })
        case "REMOVE_MEME":
          return { ...state, memes: removeMeme(state.memes, action.payload) };

        default:
            return state;
    }
}

export default rootReducer;

