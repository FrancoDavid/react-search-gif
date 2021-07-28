import React from 'react';
import PropTypes from 'prop-types';

const GifItem = ({image}) => {
    return (
        <><img src={image.gif} alt={image.title} /></>
    );
}

GifItem.prototype = {
    image: {
        title: PropTypes.string.isRequired,
        gif: PropTypes.string.isRequired
    }
}
 
export default GifItem;