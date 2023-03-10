import React from "react"

export default function Counter(props) {
    const [num, setNum] = React.useState(props.num)

    function incrementNum() {
        setNum((prevNum) => prevNum + 1)
    }

    function decrementNum() {
        setNum((prevNum) => prevNum - 1)
    }

    return (
        <div className="counter">
            <div className="counter--decrease" onClick={decrementNum}>-</div>
            <div className="counter--number">{num}</div>
            <div className="counter--increase" onClick={incrementNum}>+</div>
        </div>
    )
}