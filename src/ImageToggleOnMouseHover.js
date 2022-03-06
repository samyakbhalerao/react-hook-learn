import React, { useRef } from "react";

const ImageToggleOnMouseHover = ({primaryImage, secondaryImage}) => {
    const imageRef = useRef(null)
    return (
        <>
        <img src={primaryImage}
        onMouseOver={(e) => {
            imageRef.current.src = secondaryImage;
        }} onMouseOut={(e) => {
            imageRef.current .src = primaryImage;
        }}
        style={{width:'200px', height:'100px'}} 
            alt="Lets React" ref={imageRef}/>
            </>
    )
}

export default ImageToggleOnMouseHover;