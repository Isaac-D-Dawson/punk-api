import "./BeerCard.scss";

const BeerCard = ({ beerImg, beerName, beerTag }) => {


    return (
        <div
        className="beer__card"
        >
            <img
                className="beer__card--image"
                src={beerImg}
                alt={`An image of ${beerName}`}
            />
            <h1
                className="beer__card--header"
            >
                {beerName}
            </h1>
            <h2 
                className="beer__card--tagline"
            >
                {beerTag}
            </h2>
            <div
                className="beer__info"
            ></div>
        </div>
    )
}

export default BeerCard;