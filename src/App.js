import React, { useEffect, useState, useMemo } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import { orderBy as fucorderBy, filter, includes, remove, reject } from 'lodash';
const { v4: uuidv4 } = require('uuid');
function App() {
    const [items, SetItems] = useState([])
    const [isShowForm, SetisShowForm] = useState(false)
    const [strSearch, SetstrSearch] = useState('')
    const [orderBy, SetorderBy] = useState('name')
    const [orderDir, SetorderDir] = useState('asc')
    const [itemSelected, SetitemSelected] = useState(null)

    useEffect(() => {
        let initItemFormStorage = JSON.parse(localStorage.getItem('tasks')) || [];
        SetItems(initItemFormStorage)
    }, [])
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(items))
    }, [items])
    function handleToggleForm() {
        SetisShowForm(!isShowForm)
        SetitemSelected(null)
    }
    function HandelSearch(value) {
        SetstrSearch(value)
    }
    const handleSort = (orderBy, orderDir) => {
        SetorderBy(orderBy);
        SetorderDir(orderDir);
    }
    function handleDelete(id) {
        const newItems = [...items]
        remove(newItems, (item) => {
            return item.id === id
        })
        SetItems(newItems)
    }
    function handleSubmit(item) {
        let id = null;
        let NewItem = [...items]
        if (item.id !== '') {
            NewItem = reject(NewItem, { id: item.id });
            id = item.id;
        }
        else {
            id = uuidv4();
        }
        SetItems([...NewItem, { id: id, name: item.name, level: +item.level }])
        SetisShowForm(false)
    }
    function handelEdit(item) {
        SetisShowForm(true)
        SetitemSelected(item)
    }
    function closeForm() {
        SetisShowForm(false)
    }
    const itemsAfterFitter = useMemo(() => {

        return filter(items || [], (item) => {
            return includes(item.name.toLowerCase(), strSearch.toLowerCase());
        });
    }, [items, strSearch])

    const itemsAfterSort = useMemo(() => {
        return fucorderBy(itemsAfterFitter, [orderBy], [orderDir]);


    }, [itemsAfterFitter, orderBy, orderDir])
    return (
        <div>
            <Title />
            <Control
                onclickAdd={handleToggleForm}
                isShowForm={isShowForm}
                HandelSearch={HandelSearch}
                orderBy={orderBy}
                orderDir={orderDir}
                handleSort={handleSort} />
            <div className="row">
                {isShowForm && (<Form
                    itemSelected={itemSelected}
                    handleSubmit={handleSubmit}
                    onClickCancel={closeForm}
                />)}
            </div>

            <List items={itemsAfterSort}
                handleDelete={handleDelete}
                handelEdit={handelEdit}
            />
        </div>
    );

}

export default App;