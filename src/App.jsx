import { useState, useEffect } from 'react';
import './App.css';
import CardContainer from './containers/CardContainer/CardContainer';
import NavPanel from './containers/NavPanel/NavPanel';
// import Button from "./components/Button/Button";


// import testData from "./data/beerTestData";

const App = () => {
    const [beerData, setBeerData] = useState();

    const baseURL = "https://api.punkapi.com/v2/beers/"
    let filteredURL = `${baseURL}[]`; 

    const getBeerData = async () => {
        // console.log(url)
        const res = await fetch(filteredURL);
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
            <NavPanel />
            <CardContainer
                beers={beerData}
            />
        </main>
    )
};

export default App;
