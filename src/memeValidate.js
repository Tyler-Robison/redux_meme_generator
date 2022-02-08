const memeValidate = values => {
    const errors = {};

    if (!values.top_text) {
        errors.top_text = 'Top Text Required';
    }

    if (!values.bottom_text) {
        errors.bottom_text = 'Bottom Text Required';
    }

    if (!values.url) {
        errors.url = 'Image URL Required';
    }

    return errors;
};

export default memeValidate