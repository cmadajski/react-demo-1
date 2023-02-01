import React from "react"
import "./Card.css"

export default function Card(props) {
    const [currentAvailability, setAvailability] = React.useState(props.availability)
    const [selected, setSelected] = React.useState(props.selected)

    function changeSelected() {
        setSelected((prevValue) => !prevValue)
    }


    const cardStyle = {
        backgroundColor: selected ? "green" : "white"
    }

    const selectStyle = {
        backgroundColor: selected ? "green" : "white"
    }

    return (
        <div className="card" onClick={changeSelected}>
            <img className="card-img" src={props.img} />
            <div className="select-box" style={selectStyle}></div>
            <p className="card-title">{props.title}</p>
            <p className="card-description">{props.description}</p>
            <p className="card-availability">{currentAvailability}</p>
        </div>
    )
}