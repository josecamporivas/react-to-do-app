import React from "react";
//import plusPng from "../images/plus.png"
import plusSvg from "../images/svg/bx-plus.svg";
import '../styles/taskForm.css'

export default class TaskForm extends React.Component{
    render(){
        return (
            <div className="taskForm">
                <label id="labelTaskName" htmlFor="taskName">Add a new task</label>
                <input id="taskName" type="text"/>
                <button id="buttonTaskSubmit"><img src={plusSvg}/></button>
            </div>
        )
    }
}