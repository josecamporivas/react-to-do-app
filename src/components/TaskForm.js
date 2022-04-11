import React from "react";
//import plusPng from "../images/plus.png"
import plusSvg from "../images/svg/bx-plus.svg";
import '../styles/taskForm.css'

export default class TaskForm extends React.Component{
    state = {
        taskName: ''
    }

    inputRef = React.createRef()
    
    onChange = (e) => {
        this.setState({
            taskName: e.target.value
        })

        /* console.log(this.state) */
    }

    onSubmit = (e) => {
        this.props.taskAdded(this.state.taskName)
        this.inputRef.current.value = ''
        this.onChange({
            target: {
                value: ''
            }
        })
        e.preventDefault();
    }

    render(){
        return (
            <form className="taskForm" onSubmit={this.onSubmit}>
                <label id="labelTaskName" htmlFor="taskName">Add a new task</label>
                <input ref={this.inputRef} id="taskName" type="text" onChange={this.onChange} />
                <button id="buttonTaskSubmit" type='submit' >
                    <img src={plusSvg}/>
                </button>
            </form>
        )
    }
}