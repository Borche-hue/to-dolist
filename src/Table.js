import React, { Component } from 'react';

const TableHeader = () => {
    return (
        <thead>
            <th></th>
            <th>Task:</th>
            <th>Remove Task</th>
        </thead>
    )
}

const TableRow = (props) => {
    const row = props.taskData.map((rows, i) => {
        return (
            <tr key={i}>
                <td>
                    <input className="task-checkbox" type="checkbox"></input>
                </td>
                <td>
                    {rows.tasks}
                </td>
                <td>
                    <button className="removetask-button" onClick={() => props.removeTask(i)}>Remove Task</button>
                </td>
            </tr>
        )
    })
    return <tbody>{row}</tbody>
}


export default class Table extends Component {

    render() {
        const { taskData, removeTask } = this.props
        return (
            <table className="lista-taskovi">
                <TableHeader />
                <TableRow removeTask={removeTask} taskData={taskData} />
            </table>
        )
    }
}