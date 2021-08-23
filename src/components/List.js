import React from 'react';
import Item from './Item';

function List(props) {

    const items = props.items;
    const ElmItem = items.map((item, index) => {
        return (<Item
            handleDelete={props.handleDelete}
            handelEdit={props.handelEdit}
            key={index} item={item} index={index} />)
    })
    return (
        <div className="panel panel-success">
            <div className="panel-heading">List Task</div>
            <table className="table table-hover ">
                <thead>
                    <tr>
                        <th style={{ width: '10%' }} className="text-center">#</th>
                        <th>Task</th>
                        <th style={{ width: '20%' }} className="text-center">Level</th>
                        <th style={{ width: '20%' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {ElmItem}
                </tbody>
            </table>
        </div>
    );
}

export default List;