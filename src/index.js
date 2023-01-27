import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./Navbar"
import Card from "./Card"
import Clock from "./Clock"
import Counter from "./Counter"
import cardData from "./cardData"
import "./index.css"
import "./Navbar.css"
import "./Card.css"
import "./Clock.css"
import "./Counter.css"

const allCards = cardData.map(aCard => <Card img={aCard.img} title={aCard.title} description={aCard.description} availability={aCard.availability} />)
const now = new Date()

ReactDOM.render(
    <div id="app-container">
        <Navbar />
        <div className="card-container">
            {allCards}
        </div>
        <Clock now={now} />
        <Counter num={0} />
    </div>,
    document.getElementById("root")
)