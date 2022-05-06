import React, { useState, useContext } from 'react';
import ApiContext from '../../../contexts/ApiContext';
import SearchContext from '../../../contexts/SearchContext';


function DropDownFilter() {

    const {filteredBeach, setFilteredBeach} = useContext(SearchContext);
    const {beachesInfo} = useContext(ApiContext)

    const handleFilter = (e) => {
        if (e.target.value === 'All beaches') {
            setFilteredBeach('')
        } else {setFilteredBeach(e.target.value);}
        
      };

    return (
        <div>
            <select onChange={handleFilter}>
                <option>
                    All beaches
                </option>
                {beachesInfo.map((beach) => (
                    <option>
                        {beach.name}
                    </option>
                ))}
                
            </select>
        </div>
    )

}

export default DropDownFilter