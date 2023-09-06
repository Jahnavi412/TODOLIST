import React from "react";

export default function ToDo (props){

    const changeHandler = event => {
        props.updateTodo({...props.todo, completed: event.target.checked, active: !event.target.checked});
    }

    return(
        <div style={{textAlign: 'left', marginTop: '10px', borderBottom: '1px solid #eee'}}>
            <input type="checkbox" checked={props.todo.completed} onChange={changeHandler} />
            <span style={props.todo.completed ? {'textDecoration': 'line-through'} : {}} >{props.todo.todoText}</span>
        </div>
    );
}