import React from 'react';
const defaultClassBtn = ['btn', 'btn-block']

function Add(props) {

    function HandelAdd() {
        props.HandelAdd();
    }

    const btnClass = props.isShowForm ? [...defaultClassBtn, 'btn-success'] : [...defaultClassBtn, 'btn-info']
    return (
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5" >
            <button onClick={HandelAdd}
                type="button"
                className={btnClass.join(' ')} > {props.isShowForm ? 'Close Task' : 'Add Task'} </button>
        </div>
    );
}

export default Add;