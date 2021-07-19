import React from 'react';

const GifItem = ({image}) => {
    return (
        <><img src={image.gif} alt={image.title} /></>
    );
}
 
export default GifItem;