import "./CardContainer.scss";
import BeerCard from "../../components/BeerCard/BeerCard";

const CardContainer = ({ beers }) => {

    const beerCards = beers.map((beer) => {
        return <BeerCard
                key={beer.id}
                beerImg={beer.image_url}
                beerName={beer.name}
                beerTag={beer.tagline}
            />
        
    })

    return (
        <div className="beer__cards">
            {beerCards}
        </div>
    );
}

export default CardContainer;