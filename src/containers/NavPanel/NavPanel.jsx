import "./NavPanel.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import Checkbox from "../../components/Checkbox/Checkbox";

/**
 * Wrapper component for Search and Checkbox components. Currently set up to explicitly handle one searchbox and three Cehckboxes.
 * @label String; sets displayed label for search.
 * @searchTerm Variable; I/O for user search. Accessible by user.
 * @checkLabel String; display name of box and BEM --flag. Set per checkbox.
 * @checkValue Variable; used for reading checkbox state. Set per checkbox.
 * @onChange Function; Used to set checkValue. set per checkbox.
 */
const NavPanel = ({ searchTerm, handleSearch, highABV, handleABV, isClassic, handleClassic, highAcid, handleAcid }) => {

    return (
        <nav>
            <SearchBox
                label="Search Beer Names: "
                searchTerm={searchTerm}
                handleInput={handleSearch}
            />
            {/* checklist container/Checklist objects */}
            {/* I'd preffer these in some kind of wrapper, but attempts to do so have so far bene unsuccessful. */}
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