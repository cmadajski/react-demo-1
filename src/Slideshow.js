import React, { useState } from "react"
import "./Slideshow.css"



const Slideshow = (props) => {

    const [allImgData, setAllImgData] = useState(props.imgData)
    const [currImgId, setCurrImgId] = useState(props.start)

    const currImgData = allImgData[currImgId]


    return (
        <div className="slideshow-container">
            <div className="current-img-container">
                <img className="current-img" src={currImgData.src} />
                <p className="caption">{currImgData.caption}</p>
            </div>
        </div>
    )
}


export default Slideshow;