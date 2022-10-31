import { useState, useEffect } from 'react';
import './App.scss';
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

    const handleFilter = (event) => {
        setSearchTerm(event.target.value
            // .split(" ").join("_") //He said "_"
        ); 
    };

    //Set one of these for each checkbox.
    const [highABV, setABV ] = useState(false);

    const handleABV = () => {
        // console.log(!highABV);
        setABV(!highABV);
    }

    const [isClassic, setClassic ] = useState(false);

    const handleClassic = () => {
        // console.log(!isClassic);
        setClassic(!isClassic);
    }

    const [highAcid, setAcid ] = useState(false);

    const handleAcid = () => {
        // console.log(!highAcid);
        setAcid(!highAcid);
    }

    // console.log(beerData)

    useEffect(() => {
        let filterData = []
        let filteredURL = baseURL;
        if (searchTerm !== "") {
            filterData.push(`beer_name=${searchTerm}`)
        }
        if (highABV) {
            filterData.push(`abv_gt=6`);
        }
        if(isClassic) {
            filterData.push(`brewed_before=01-2010`)
        }
        if(highAcid) {
            filterData.push(`ibu_gt=4`)
        }

        if (filterData.length >= 1) {
            filteredURL += `?${filterData[0]}`;
        }
        if (filterData.length >= 2) {
            // console.log(filterData.slice(1))
            filteredURL += filterData.slice(1).reduce((result, current) => {
                console.log([result, current])
                return result += `&${current}`;
            }, "")
        }
        console.log(filteredURL)
        getBeerData(filteredURL);
    }, [searchTerm, highABV, isClassic, highAcid])

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
                handleSearch={handleFilter}
                highABV={highABV}
                handleABV={handleABV}
                isClassic={isClassic}
                handleClassic={handleClassic}
                highAcid={highAcid}
                handleAcid={handleAcid}
            />
            <CardContainer
                beers={beerData}
            />
        </main>
    )
};

export default App;
