import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { addTask } from '../_actions/task_actions'

function Form() {
    const dispatch = useDispatch();
    const [taskPayload, setTaskPayload] = useState({})
    const [warningMsg, setWarningMsg] = useState('')


    const handleChange =(e)=>{
        let { name, value } = e.target;

        setTaskPayload({...taskPayload, ...{[name]: value}} )
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(Object.values(taskPayload).length < 3 || (Object.values(taskPayload).some((item)=> item === ""))){
            setWarningMsg('Please Fill all the fields');
        }else{
            console.log('Passses');
            dispatch(addTask(taskPayload))
            setTaskPayload('');
            setWarningMsg('');

        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div class="form-group row">
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Task Name</label>
                    <div class="col-sm-4">
                        <input
                            type="text"
                            name="taskName"
                            class="form-control"
                            placeholder="Enter Task Name"
                            onChange={handleChange}
                            value={taskPayload.taskName || ''}
                        />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Difficulty Level</label>
                    <div class="col-sm-4">
                        <select
                            class="form-control"
                            placeholder="Difficulty level"
                            name="taskLevel"
                            onChange={handleChange}
                            value={taskPayload.taskLevel || ''}
                        >
                            <option selected>Select Level...</option>
                            <option value="easy">easy</option>
                            <option value="difficult">difficult</option>
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Estimated Time</label>
                    <div class="col-sm-4">
                    <input
                            type="text"
                            name="duration"
                            class="form-control"
                            placeholder="e.g 2hr or 120mins"
                            onChange={handleChange}
                            value={taskPayload.duration || ''}
                        />
                    </div>
                </div>
                {
                    warningMsg && <div className="warning-msg">{warningMsg}</div>
                }
                <div className="form-group row">
                    <button type="submit" className="btn btn-primary col-sm-2 offset-sm-4">Submit</button>
                </div>
            </form>            
        </div>
    )
}

export default Form
