import React from "react";

export default function AnchorTab(props){

    return (
        <button style={{backgroundColor: props.isTabActive ? "#ddd" : "#fff"}}
            onClick={props.setAsActiveTab} >{props.title}</button>
    );

}