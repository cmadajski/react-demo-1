import React, { useState } from "react"
import "./Slideshow.css"



const Slideshow = (props) => {

    const [allImgData, setAllImgData] = useState(props.imgData)
    const [currImgId, setCurrImgId] = useState(props.start)
    const numImgs = Object.keys(allImgData).length

    const currImgData = allImgData[currImgId]

    const nextImg = () => {
        setCurrImgId((prevId) => prevId === numImgs ? 1 : prevId + 1)

    }

    const prevImg = () => {
        setCurrImgId((prevId) => prevId === 1 ? numImgs : prevId - 1)
    }

    const logKey = (event) => {
        if (event.key === "ArrowRight") {
            nextImg()
        } else if (event.key === "ArrowLeft") {
            prevImg()
        } else {
            
        }
    }

    return (
        <div className="slideshow-container" tabIndex={0} onKeyDown={logKey}>
            <div className="current-img-container">
                <div className="arrow arrow--backward" onClick={prevImg}>&larr;</div>
                <div className="arrow arrow--forward" onClick={nextImg}>&rarr;</div>
                <img className="current-img" src={currImgData.src} />
                <p className="caption">{currImgData.caption}</p>
            </div>
        </div>
    )
}


export default Slideshow;