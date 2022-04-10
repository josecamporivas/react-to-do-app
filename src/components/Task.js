import React from "react";
import checkSvg from '../images/svg/bx-check.svg'
import deleteSvg from '../images/svg/bx-x.svg'
import '../styles/task.css'

export default class Task extends React.Component{
    render(){
        return (
            <div className="containerTask">
            <div className="task">
                <h3 className="titleTask">{this.props.task.name}</h3>
                <div className="buttons">
                    <button className="buttonDoneTask"><img src={checkSvg}></img></button>
                    <button className="buttonDeleteTask"><img src={deleteSvg}></img></button>
                </div>
            </div>
            </div>
        )
    }
}