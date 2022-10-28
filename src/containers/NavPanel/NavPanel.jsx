import "./NavPanel.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import Checkbox from "../../components/Checkbox/Checkbox";

const NavPanel = ({ searchTerm, handleSearch, highABV, handleABV, isClassic, handleClassic, highAcid, handleAcid }) => {

    

    return (
        <nav>
            <SearchBox
                label="Search Beer Names: "
                searchTerm={searchTerm}
                handleInput={handleSearch}
            />
            {/* checklist container/Checklist objects */}
            <Checkbox
                checkLabel="High ABV(>6.0%)"
                checkValue={highABV}
                onChange={handleABV}
            />
            <Checkbox
                checkLabel="Classic Range"
                checkValue={isClassic}
                onChange={handleClassic}
            />
            <Checkbox
                checkLabel="Acidic(ph < 4)"
                checkValue={highAcid}
                onChange={handleAcid}
            />
        </nav>
    )
}

export default NavPanel;