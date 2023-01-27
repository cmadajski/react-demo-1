import React from "react"

export default function Clock(props) {
    return (
        <div className="clock">
            <p className="clock-time">{props.now.getHours()}:{props.now.getMinutes()}</p>
        </div>
    )
}