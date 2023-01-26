import React from "react"
import openai_logo from "./openai_logo.png"

export default function Card() {
    return (
        <div className="card">
            <img className="card-img" src={openai_logo} />
            <p className="card-title">Hello world</p>
            <p className="card-description">This is a generic description.</p>
        </div>
    )
}