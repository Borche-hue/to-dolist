import React, { Component } from 'react';


export default class AddTask extends Component {
    
    initialState = {
        tasks: '',
    }

    state = this.initialState

    handleChange = (event) => { 
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        if(!this.state.tasks){
            alert('Please enter a task!')
            return false
        }

        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }
    
    render(){
        const { tasks } = this.state

        return(
            <form className="form-addtotask">
                <label htmlFor="addTaskLabel">Add task</label>
                <input 
                className="addtask-input"
                type="text"
                name="tasks"
                value={tasks} 
                onChange={this.handleChange}></input>
                <button 
                 className="addtask-button"
                 value="submit"
                 type="button" 
                 onClick={this.submitForm}>Add Task </button>
            </form>
        )
    }
}