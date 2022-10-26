import "./CardContainer.scss";
import BeerCard from "../../components/BeerCard/BeerCard";

// import testData from "../../data/beerTestData";

const CardContainer = ({ beers }) => {

    // if (!beers) {
    //     beers = testData;
    // }

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