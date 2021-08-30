import './App.css';
import React, { Component } from 'react';
import Table from './Table';
import AddTask from './AddTask';



export default class App extends Component {
  state = {
    tasks: [],
  }

  removeTask = (index) => {
    const { tasks } = this.state

    this.setState({
      tasks: tasks.filter((props, i) => {
        return i !== index
      })
    })
  }

  handleSubmit = (task) => {
    this.setState({ tasks: [...this.state.tasks, task] })
  }

  render() {
    const { tasks } = this.state
    return (
      <div className="container">
        <h1>TO-DO LIST:</h1>
        <Table removeTask={this.removeTask} taskData={tasks} />
        <AddTask handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

