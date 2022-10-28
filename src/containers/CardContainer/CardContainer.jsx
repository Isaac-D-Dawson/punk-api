import "./CardContainer.scss";
import BeerCard from "../../components/BeerCard/BeerCard";

/**
 * handles creation and arrangement of individual BeerCard components.
 * @beers JSON object returned from the Brewdog API.
 * Objects require all keys required by BeerCard components.
 * 
 * @beerImg String(URL); Image URL for card.
 * @beerName String; Displayed name on card
 * @beerTag String; Displayed tagline on card.
 */
const CardContainer = ({ beers }) => {

    if (beers) {
    return (
        <div className="beer__cards">
            {
                beers.map((beer) => {
                    return (
                        <BeerCard
                            key={beer.id}
                            beerImg={beer.image_url}
                            beerName={beer.name}
                            beerTag={beer.tagline}
                        />
                    )
                })
            }
        </div>
    );
        }
}

export default CardContainer;