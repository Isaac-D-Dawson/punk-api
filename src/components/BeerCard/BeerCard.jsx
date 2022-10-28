import "./BeerCard.scss";

/**
 * Generates a card element displaying provided beer info.
 * @beerImg String(URL); Image URL for card.
 * @beerName String; Displayed name on card
 * @beerTag String; Displayed tagline on card.
 */
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
            <div className="beer__card--data">
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
        </div>
    )
}

export default BeerCard;