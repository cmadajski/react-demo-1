import React from "react"
import openai_logo from "./openai_logo.png"

export default function Card(props) {
    return (
        <div className="card">
            <img className="card-img" src={openai_logo} />
            <p className="card-title">{props.title}</p>
            <p className="card-description">{props.description}</p>
        </div>
    )
}