import React from 'react';
import './App.css';

//components
import Title from './components/Title';
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';

//sample of tasks
import TasksJSON from './sample/tasks.json'

export default class App extends React.Component{

  state = {
    tasks: TasksJSON,
  }


  render() {
    return (
      <div className="App">
        <Title/>
        <TaskForm taskAdded={this.taskAdded} />
        <br/>
        <Tasks tasks={this.state.tasks} taskDone={this.taskDone} taskDeleted={this.taskDeleted} />
      </div>
    )
  }
}