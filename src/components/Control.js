import React, { useEffect, useState } from 'react';
import Search from './Search';
import Sort from './Sort';
import Add from './Add';

function Control(props) {

    function HandelAdd() {
        props.onclickAdd();
    }
    let isShowForm = props.isShowForm
    let { orderBy, orderDir, HandelSearch, handleSort } = props

    return (
        <div className="row">
            <Search HandelSearchGo={HandelSearch} />

            <Sort orderBy={orderBy}
                orderDir={orderDir}
                handleSort={handleSort} />

            <Add HandelAdd={HandelAdd}
                isShowForm={isShowForm} />
        </div>

    );

}

export default Control;