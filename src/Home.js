import React from "react"
import Card from "./Card"
import cardData from "./cardData"

const Home = (props) => {

    const allCards = cardData.map(aCard => <Card img={aCard.img} title={aCard.title} id={aCard.id} description={aCard.description} availability={aCard.availability} selected={aCard.selected} />)
    console.log(allCards)

    return (
        <div className="card-container">
            {allCards}
        </div>
    )
}

export default Home;