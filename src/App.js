import React from "react"
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Template from "./Template"
import Home from "./Home"
import "./App.css"


//const now = new Date()
//const circles = [1, 2, 3]

export default function App(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Template />}>
                    <Route index element={<Home />} />
                    <Route path="form" />
                    <Route path="*" />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}