import React from "react";
//import plusPng from "../images/plus.png"
import plusSvg from "../images/svg/bx-plus.svg"

export default class TaskForm extends React.Component{
    render(){
        return (
            <div>
                TaskForm
                <button style={{backgroundColor: 'red'}} ><img src={plusSvg}/></button>
            </div>
        )
    }
}