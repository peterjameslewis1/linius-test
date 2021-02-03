import React from 'react';

const Filter = ({ sortAscending, sortDecending, alphabetical }) => {


    return (
        <div className="filter">
            <label>Sort by</label>
            <select onChange={(e) => {
                switch (e.target.value) {
                    case 'ascending':
                        return sortAscending();
                    case 'decending':
                        return sortDecending();
                    case 'alphabetical':
                        return alphabetical();
                    default:
                        return;
                }
            }
            }>
                <option></option>
                <option value="ascending">Rating (ascending)</option>
                <option value="decending">Rating (decending)</option>
                <option value="alphabetical">alphabetical</option>
            </select>
        </div >
    )
}


export default Filter;