import React from 'react';

function ImageCard() {

    const imageCardContainerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red"
    }

    return (
        <div className='ImageCard' style={imageCardContainerStyle}>
            <img 
                className='ImageCard-image' 
                src='images/goat-car-door-image.jpeg' 
                alt='goat car image' />
        </div>
    )
}

export default ImageCard;