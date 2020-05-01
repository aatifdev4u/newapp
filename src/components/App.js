import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css'
import Form from './Form';
import SearchBar from './SearchBar';
import TaskTable from './TaskTable'
import { useSelector } from 'react-redux'

function App() {
    const taskStore = useSelector((state) => state.taskStore)
    return (
        <div className="container my-4"> 
           <Form/>
           <SearchBar/>
           <TaskTable tasks={taskStore.tasks} searchTerm={taskStore.searchTerm}/>
        </div>
    )
}

export default App
