import "./NavPanel.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useState } from "react";

const NavPanel = ( {searchTerm, handleInput} ) => {


    return (
        <nav>
            <SearchBox
                label="Search Beer Names: "
                searchTerm={searchTerm}
                handleInput={handleInput}
            />
            {/* checklist container/Checklist objects */}
        </nav>
    )
}

export default NavPanel;