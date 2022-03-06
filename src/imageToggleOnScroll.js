import React, { useEffect, useRef, useState } from "react";

const ImageToggleOnScroll = ({primaryImage, secondaryImage}) => {

    const imageRef = useRef(null)
    const[isLoading, setIsLoading] = useState(true)

    const isInView = () => {
        const rect = imageRef.current.getBoundingClientRect()
        return rect.top >=0 && rect.bottom <= window.innerHeight;
    }

    const [inView, setInView] = useState(false)

    useEffect(() => {
        // Component mounting done so disable loading flag
        setIsLoading(false)
        // Check if image is in view initially and set its value
        setInView(isInView())
        // This will get executed when component will get mount
        window.addEventListener('scroll', scrollHandler)
        return () => {
            // It will remove event listner before component unmount
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    const scrollHandler = () => {
        setInView(isInView())
    }
    return (
      
            <img 
            style={{width:'400px', height:'300px', boxShadow: inView? '0 6px 20px rgb(0 0 0 / 0.3)' : 'none'}} 
            src={isLoading ? 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==' :primaryImage}
            ref={imageRef}
            alt="Lets React"    
            />
       
    )
}

export default ImageToggleOnScroll;