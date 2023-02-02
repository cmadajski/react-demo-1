import React from "react"
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Template from "./Template"
import Home from "./Home"
import TestForm from "./TestForm"
import Slideshow from "./Slideshow"
import { imgData } from "./imgData"
import "./App.css"

const App = (props) => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Template />}>
                    <Route index element={<Home />} />
                    <Route path="form" element={<TestForm />} />
                    <Route path="slideshow" element={<Slideshow imgData={imgData} start={1} />}></Route>
                    <Route path="*" />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;