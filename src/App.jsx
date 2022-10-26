import { useState, useEffect } from 'react';
import './App.css';
import CardContainer from './containers/CardContainer/CardContainer';
import NavPanel from './containers/NavPanel/NavPanel';
// import Button from "./components/Button/Button";


// import testData from "./data/beerTestData";

const App = () => {
    const [beerData, setBeerData] = useState();
    const [ searchTerm, setSearchTerm ] = useState("");

    const baseURL = "https://api.punkapi.com/v2/beers/"
    // let [filteredURL, filterURL] = useState(`${baseURL}`);
    let filteredURL = `${baseURL}`;

    const getBeerData = async (url=baseURL) => {
        // console.log(url)
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data);
        setBeerData(data);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value
            // .split(" ").join("_") //He said "_"
        ); 
    };

    // console.log(beerData)

    useEffect(() => {
        if (searchTerm !== "") {
            filteredURL = `${baseURL}?beer_name=${searchTerm}`
        }
        getBeerData(filteredURL);
    }, [searchTerm])

    // useEffect(() => {
    //     console.log("Got beer Data")
    //     console.log(filteredURL)
    //     getBeerData()
    //     console.log(beerData)
    // }, [searchTerm])

    return (
        <main>
            {/* <Button onClick={getBeerData} label="Update Beer Data"/> */}
            <NavPanel
                searchTerm={searchTerm}
                handleInput={handleSearch}
            />
            <CardContainer
                beers={beerData}
            />
        </main>
    )
};

export default App;
