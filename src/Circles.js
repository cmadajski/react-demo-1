import React from "react"

export default function Circles(props) {
    const [circles, setCircles] = React.useState(props.circles)

    const allCircles = circles.map((circle) => <div className="circle">{circle}</div>)

    function addCircle() {
        setCircles((prevCircles) => [...prevCircles, prevCircles.length + 1])
        console.log(circles)
    }

    function removeCircle() {
        setCircles((prevCircles) => prevCircles.slice(0, -1))
        console.log(circles)
    }

    return (
        <div className="circle-container">
            <div className="circle-controls">
                <button onClick={removeCircle}>-</button>
                <button onClick={addCircle}>+</button>
            </div>
            {allCircles}
        </div>
    )
}