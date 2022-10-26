import { useState, useEffect } from 'react';
import './App.css';
import CardContainer from './containers/CardContainer/CardContainer';
// import Button from "./components/Button/Button";


// import testData from "./data/beerTestData";

const App = () => {
    const [beerData, setBeerData] = useState();

    let url = "https://api.punkapi.com/v2/beers/"

    const getBeerData = async () => {
        console.log(url)
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data);
        setBeerData(data);
    };

    // console.log(beerData)

    useEffect(() => {
        getBeerData()
    }, [])

    return (
        <main>
            {/* <Button onClick={getBeerData} label="Update Beer Data"/> */}
            <CardContainer
                beers={beerData}
            />
        </main>
    )
};

export default App;
