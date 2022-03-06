import React, {useEffect, useState} from "react";

const InputElement = () => {
    const [inputtext, setInputtext] = useState("")
    const [historyList, setHistoryList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout( () => {
            setIsLoading(false)
        }, 2000)
    })
    return(
        isLoading ?
        <label>Loading....</label>
        :
    <>
        <div>
        <input onChange={(e) => {
            setInputtext(e.target.value)
            if(e.target.value.trim().length)
                setHistoryList([...historyList, e.target.value])
            }}
        placeholder="Next input element"/>
        <label>{inputtext}</label>
        <br/>
        <hr></hr>
        <ul>
            {historyList.map(historyItem => <li>{historyItem}</li>)}
        </ul>
        </div>
     </>
     )
};

export default InputElement;