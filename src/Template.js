import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import "./Navbar.css"

const Template = (props) => {
    return (
        <div className="template">
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Template;