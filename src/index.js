import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./Navbar"
import Card from "./Card"
import cardData from "./cardData"
import "./index.css"
import "./Navbar.css"
import "./Card.css"

const allCards = cardData.map(aCard => <Card title={aCard.title} description={aCard.description} />)

ReactDOM.render(
    <div id="app-container">
        <Navbar />
        <div className="card-container">
            {allCards}
        </div>
    </div>,
    document.getElementById("root")
)