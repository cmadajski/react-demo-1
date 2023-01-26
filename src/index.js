import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./Navbar"
import Card from "./Card"
import indexStyle from "./index.css"
import navbarStyle from "./Navbar.css"
import cardStyle from "./Card.css"

ReactDOM.render(
    <div id="app-container">
        <Navbar />
        <div className="card-container">
            <Card />
            <Card />
            <Card />
        </div>
    </div>,
    document.getElementById("root")
)