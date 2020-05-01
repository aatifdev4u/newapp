import React from 'react'

function TaskTable({tasks, searchTerm}) {
    let renderTask = [];
    let filteredTask = [];

    if(tasks.length == 0){
        return null;
    }else{
        tasks.sort((a, b)=>{
            let task1 = a.duration.includes('hr') ? parseInt(a.duration.split('hr')[0])*60 : a.duration.split('min')[0];
            let task2 = b.duration.includes('hr') ? parseInt(b.duration.split('hr')[0])*60 : b.duration.split('min')[0];

            if (task1 < task2) {
                return 1;
            }
            if (task1 > task2) {
                return -1;
            }
            return 0;
        })
    }

    const renderTaskList = (resultTask)=>{
        renderTask = resultTask.length > 0 && resultTask.map((task)=>{

            return (
                <tr>
                    <td>{task.taskName}</td>
                    <td>{task.taskLevel}</td>
                    <td>{task.duration}</td>
                </tr>
            )
        })
    }

    if(searchTerm){
        filteredTask = tasks.filter((task)=>{
            return task.taskName.indexOf(searchTerm) > -1 
        })
        renderTaskList(filteredTask)
    }else{
        renderTaskList(tasks)
    }
   
    return (
        <table class="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>Task Name</th>
                    <th>Difficulty Level</th>
                    <th>Estimated Time</th>
                </tr>
                </thead>
                <tbody>
                {renderTask}
                </tbody>
        </table>
    )
}

export default TaskTable
