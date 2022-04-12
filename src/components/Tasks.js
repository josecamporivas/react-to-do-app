import React from "react";
import Task from './Task.js'

export default class Tasks extends React.Component{
    render(){
        return (
            <div className="tasks">
                {this.props.tasks.map(e => <Task key={e.id} task={e} taskDone={this.props.taskDone} taskDeleted={this.props.taskDeleted} />)}
            </div>
        )
    }
}