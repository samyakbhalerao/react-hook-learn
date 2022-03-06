import React from "react";
import ImageToggleOnMouseHover from "../src/ImageToggleOnMouseHover";
const ImageChangeOnMouseHover = () => {

    return (
        <>
            <div>
                <ImageToggleOnMouseHover 
                 primaryImage="/images/img1.jpg"
                 secondaryImage="/images/img3.jpg" alt=""/> <br/>
                <ImageToggleOnMouseHover 
                 primaryImage="/images/img2.jpg" alt=""
                 secondaryImage="/images/img4.jpg"/>
            </div>
        </>
    )
}

export default ImageChangeOnMouseHover;