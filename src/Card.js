import React from "react"

export default function Card(props) {
    const [currentAvailability, setAvailability] = React.useState(props.availability)

    function changeAvailability() {
        if (currentAvailability === "Available") {
            setAvailability("Not Available")
        } else {
            setAvailability("Available")
        }
    }
    return (
        <div className="card" onClick={changeAvailability}>
            <img className="card-img" src={props.img} />
            <p className="card-title">{props.title}</p>
            <p className="card-description">{props.description}</p>
            <p className="card-availability">{currentAvailability}</p>
        </div>
    )
}