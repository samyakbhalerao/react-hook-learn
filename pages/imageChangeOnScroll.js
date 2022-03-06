import React from "react";
import ImageToggleOnScroll from "../src/imageToggleOnScroll";
const ImageChangeOnScroll = () => {

    return (
        <>
            <div>
                <ImageToggleOnScroll 
                 primaryImage="/images/img1.jpg"
                 secondaryImage="/images/img4.jpg" alt=""/>
                  <br/>
                <ImageToggleOnScroll 
                 primaryImage="/images/img2.jpg" alt=""
                 secondaryImage="/images/img3.jpg"/>
                  <br/>
                <ImageToggleOnScroll 
                 primaryImage="/images/img3.jpg" alt=""
                 secondaryImage="/images/img2.jpg"/>
                  <br/>
                <ImageToggleOnScroll 
                 primaryImage="/images/img4.jpg" alt=""
                 secondaryImage="/images/img1.jpg"/>
            </div>
        </>
    )
}

export default ImageChangeOnScroll;