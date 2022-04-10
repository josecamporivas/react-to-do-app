import React from "react";
import TasksJSON from '../sample/tasks.json'
import Task from './Task.js'

export default class Tasks extends React.Component{

    state = {
        tasks: TasksJSON,
    }

    render(){
        return (
            <div>
                {this.state.tasks.map(e => <Task key={e.id} task={e}/>)}
            </div>
        )
    }
}