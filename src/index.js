import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./Navbar"
import Card from "./Card"
import "./index.css"
import "./Navbar.css"
import "./Card.css"

ReactDOM.render(
    <div id="app-container">
        <Navbar />
        <div className="card-container">
            <Card 
                title="Please go away"
                description="Nope, not doing it!"
            />
            <Card 
                title="Herpy derpy"
                description="I like melons..."
            />
            <Card 
                title="Another card 4 u!"
                description="Totally unique description"
            />
        </div>
    </div>,
    document.getElementById("root")
)