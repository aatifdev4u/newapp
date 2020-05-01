import React, { useState } from 'react'
import { addSearchTerm } from '../_actions/task_actions';
import { useDispatch} from 'react-redux'

function SearchBar() {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(addSearchTerm(searchTerm))
    }

    const handleChange = (e)=>{
        setSearchTerm(e.target.value);
        if(e.target.value === ""){
            dispatch(addSearchTerm(""))
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group row">
                <div class="col-sm-8">
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Search..."
                        onChange={handleChange}
                    />
                </div>
                <div class="col-sm-4">
                    <button type="submit" className="btn btn-primary mb-2">Search</button>
                </div>
            </div>
        </form>
    )
}

export default SearchBar
