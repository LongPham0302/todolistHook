import React, { useState } from 'react';

function Search(props) {

    const [strSearch, SetstrSearch] = useState('')

    function handleChange(event) {
        SetstrSearch(event.target.value)
    }
    function handleSearch() {
        props.HandelSearchGo(strSearch)
    }
    function handleClear() {
        SetstrSearch(" ")
        props.HandelSearchGo('')
    }

    return (
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="input-group">
                <input value={strSearch} onChange={handleChange} type="text" className="form-control" />
                <span className="input-group-btn">
                    <button onClick={handleSearch} className="btn btn-info" type="button">Go!</button>
                    <button onClick={handleClear} className="btn btn-sccuess" type="button">Clear!</button>

                </span>
            </div>
        </div>
    );

}

export default Search;