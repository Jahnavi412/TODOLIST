import React, { useState } from "react";

export default function TextBox(props){

    const [value, setValue] = useState("");

    const onChangeHandler = (event) => {
        setValue(event.target.value);
    }

    const onKeyPressHandler = event => {
        if(event.keyCode === 13){
            props.addTodo(value);
            setValue("");
            event.stopPropagation();
        }
    }

    return (
        <input type="text" value={value} placeholder={props.placeholder} onChange={onChangeHandler} onKeyDown={onKeyPressHandler} style={{width:'95%', padding: '5px'}} />
    );
}