import React from "react";
import './MemeForm.css'
import { useFormik } from "formik";
import memeValidate from "./memeValidate";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from 'uuid'


// case "ADD_MEME":
//     return { ...state, memes: [...state.memes, action.payload] };

// useDispatch is a react hook, needed in react-redux

const MemeForm = () => {
    const validate = memeValidate
    const dispatch = useDispatch()
    // const memes = useSelector(store => store.memes)
    const genId = () => uuid()

    const formik = useFormik({
        initialValues: {
            top_text: '',
            bottom_text: '',
            url: ''
        },
        validate,
        onSubmit: values => createMeme(values),
    })

    // updates redux state
    const createMeme = (values) => {
        
        const newMeme = {
            top_text: values.top_text,
            bottom_text: values.bottom_text,
            url: values.url,
            id : genId()
        }

        dispatch({ type: "ADD_MEME", payload: newMeme })
    }

    return (
        <div className="form-container">
            <form onSubmit={formik.handleSubmit}>

                <div>
                    <label htmlFor="top_text">Top Text</label>
                    <input
                        id="top_text"
                        name="top_text"
                        type='text'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.top_text}
                    />
                      {formik.touched.top_text && formik.errors.top_text && (
                        <div>{formik.errors.top_text}</div>
                    )}
                </div>

                <div>
                    <label htmlFor="bottom_text">Bottom Text</label>
                    <input
                        id="bottom_text"
                        name="bottom_text"
                        type='text'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.bottom_text}
                    />
                      {formik.touched.bottom_text && formik.errors.bottom_text && (
                        <div>{formik.errors.bottom_text}</div>
                    )}
                </div>

                <div>
                    <label htmlFor="url">Image URL</label>
                    <input
                        id="url"
                        name="url"
                        type='text'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.url}
                    />
                      {formik.touched.url && formik.errors.url && (
                        <div>{formik.errors.url}</div>
                    )}
                </div>

                <button type="submit">Create Meme</button>
            </form>
        </div>
    )
}

export default MemeForm;