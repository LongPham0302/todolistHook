import React from 'react';

function Item(props) {

    function showLevel(level) {
        let elmLevel = <span className="label label-default">Small</span>;

        if (level === 1) {
            elmLevel = <span className="label label-info">Medium</span>;
        }
        else if (level === 2) {
            elmLevel = <span className="label label-danger">Hight</span>;
        }
        return elmLevel;
    }
    function handleDelete(id) {
        props.handleDelete(id)
    }
    function handelEdit(item) {
        props.handelEdit(item)
    }
    const { item, index } = props;
    return (
        <tr>
            <td className="text-center">{index + 1}</td>
            <td>{item.name}</td>
            <td className="text-center">{showLevel(item.level)}</td>
            <td>
                <button onClick={() => handelEdit(item)} type="button" className="btn btn-warning">Edit</button>
                <button onClick={() => { handleDelete(item.id) }} type="button" className="btn btn-danger">Delete</button>
            </td>
        </tr>
    );
}

export default Item;