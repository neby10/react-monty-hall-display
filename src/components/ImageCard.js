import React from 'react';

function ImageCard() {

    const imageCardContainerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }

    return (
        <div className='ImageCard' style={imageCardContainerStyle}>
            <img 
                className='ImageCard-image' 
                src='images/goat-car-door-image.jpeg' 
                alt='goat car door' />
        </div>
    )
}

export default ImageCard;