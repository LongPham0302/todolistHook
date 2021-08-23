import React, { useState, useEffect } from 'react';
// import { idText } from 'typescript';

function Form(props) {

    const [newTaskItem, setnewTaskItem] = useState({
        task_id: '',
        task_name: '',
        task_level: 0
    })
    function handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name
        setnewTaskItem({ ...newTaskItem, [name]: value })
        console.log([name], value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        let item = {
            id: newTaskItem.task_id,
            name: newTaskItem.task_name,
            level: newTaskItem.task_level
        }
        props.handleSubmit(item);
    }
    useEffect(() => { updateItem(props.itemSelected) }, [props.itemSelecte])

    function updateItem(item) {
        if (item !== null) {
            setnewTaskItem({
                task_id: item.id,
                task_name: item.name,
                task_level: +item.level
            });
        }
    }

    return (
        <div className="col-md-offset-7 col-md-5">
            <form onSubmit={handleSubmit} className="form-inline">
                <div className="form-group">
                    <label className="sr-only" >label</label>
                    <input value={newTaskItem.task_name} onChange={handleChange} type="text" name="task_name" className="form-control" placeholder="Task Name" />
                </div>
                <div className="form-group">
                    <label className="sr-only" >label</label>
                    <select value={newTaskItem.task_level} onChange={handleChange} name="task_level" className="form-control" required="required" >
                        Small
                        <option value={0}>Small</option>
                        <option value={1}>Medium</option>
                        <option value={2}>High</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-default">Cancel</button>
            </form>
        </div>
    )
}

export default Form;