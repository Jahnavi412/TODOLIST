import React, { useState } from 'react';
import Header from './Header';
import TextBox from './TextBox';
import ToDo from './ToDo';
import AnchorTab from './anchorTab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


export default function ToDoList() {
    
    const [todoList, setTodoList] = useState([]);
    const [activeTab, setActiveTab] = useState('ALL');
    const [mode, setMode] = useState('ADD');
    const [searchText, setSearchText] = useState('');

    const addTodo = newTodo => {
        if(mode === 'ADD'){
            todoList.push({todoText: newTodo, active: true, completed: false});
            setTodoList([...todoList]);
        }else{
            setSearchText(newTodo);
        }
    }

    return (
        <div style={{width: '500px', height: '400px', margin: 'auto', marginTop: '30px', border: '3px solid #ddd'}}>
            <Header title="THINGS TO DO" />
            <div style={{width: '420px', height: '300px', margin: 'auto', overflowY: 'auto', overflowX: 'hidden'}}> 
                <TextBox addTodo={addTodo} placeholder={mode === 'ADD' ? 'Add New' : 'Search'} />
                {todoList.filter(todo => {
                    if(activeTab === "ALL"){
                        return true;
                    }else if(activeTab === "ACTIVE"){
                        return todo.active;
                    }else{
                        return todo.completed;
                    }
                }).filter(todo => {
                    if(mode === 'SEARCH'){
                        return todo.todoText.includes(searchText);
                    }else{
                        return true;
                    }
                }).map((todo, todoIndex) =>
                    <ToDo todo={todo} updateTodo = {(updatedTodo) => {
                        todoList[todoIndex] = updatedTodo;
                        setTodoList([...todoList]);
                    }} />
                )}
            </div>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <div style={{display: 'flex', gap: '5px'}} >
                    <FontAwesomeIcon onClick={()=>setMode('SEARCH') } icon={faMagnifyingGlass} />
                    <FontAwesomeIcon onClick={() => setMode('ADD')} icon={faPlus} />
                </div>
               <span>{todoList.filter(todo => todo.active).length + ' items left'}</span>
               <div style={{display: "flex", gap: '2px'}}>
                    <AnchorTab isTabActive={activeTab === 'ALL'} setAsActiveTab={() => setActiveTab('ALL')} title="All" />
                    <AnchorTab isTabActive={activeTab === 'ACTIVE'} setAsActiveTab={() => setActiveTab('ACTIVE')} title="Active" />
                    <AnchorTab isTabActive={activeTab === 'COMPLETED'} setAsActiveTab={() => setActiveTab('COMPLETED')} title="Completed" />
               </div>
            </div>
        </div>
    );

}