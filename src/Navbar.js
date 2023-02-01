import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav>
            <h1>React Demo</h1>
            <div id="nav-links">
                <Link to="/">Home</Link>
                <Link to="/form">Form</Link>
            </div>
        </nav>
    )
}