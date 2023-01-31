import React from "react"
import Navbar from "./Navbar"
import Card from "./Card"
import Clock from "./Clock"
import Counter from "./Counter"
import Circles from "./Circles"
import TestForm from "./TestForm"
import cardData from "./cardData"
import "./index.css"
import "./Navbar.css"
import "./Card.css"
import "./Clock.css"
import "./Counter.css"
import "./Circles.css"
import "./TestForm.css"

const allCards = cardData.map(aCard => <Card img={aCard.img} title={aCard.title} description={aCard.description} availability={aCard.availability} selected={aCard.selected} />)
const now = new Date()
const circles = [1, 2, 3]

export default function App(props) {
    return (
        <div id="app-container">
        <Navbar />
        <div className="card-container">
            {allCards}
        </div>
        <Clock now={now} />
        <Counter num={0} />
        <Circles circles={circles} />
        <TestForm />
    </div>
    )
}