import React from "react";
import checkSvg from '../images/svg/bx-check.svg'
import deleteSvg from '../images/svg/bx-x.svg'
import '../styles/task.css'

export default class Task extends React.Component{

    

    StyleCompleted(){
        return {
            color: this.props.task.done? "#A0A0A0": "black",    //if its done the task will have color grey and crossed out
            textDecoration: this.props.task.done? "line-through": "none"
        }
    }

    render(){
        return (
            <div className="containerTask">
                <div className="task">
                    <h3 className="titleTask" style={this.StyleCompleted()}>{this.props.task.name}</h3>
                    <div className="buttons">
                        <button className="buttonDoneTask" onClick={this.props.taskDone.bind(this, this.props.task.id)}><img src={checkSvg}></img></button>
                        <button className="buttonDeleteTask" onClick={this.props.taskDeleted.bind(this, this.props.task.id)}><img src={deleteSvg}></img></button>
                    </div>
                </div>
            </div>
        )
    }
}