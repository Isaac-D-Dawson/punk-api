import './App.css';
import CardContainer from './containers/CardContainer/CardContainer';

import testData from "./data/beerTestData";


console.log(testData)
const App = () => {
    return (
        <main>
            <CardContainer
                beers={testData}
            />
        </main>
    )
};

export default App;
