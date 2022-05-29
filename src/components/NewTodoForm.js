import React, {useState} from "react";
import {v4 as uuid} from 'uuid';

const NewTodoForm = ({ addTodo }) => {

    const INITIAL_STATE = {
        id: "",
        todo: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(uuid(), formData.todo);
        setFormData(INITIAL_STATE);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="todo">New Todo</label>
                <input 
                type="text" 
                name="todo" 
                placeholder="NewTodo"
                value={formData.todo}
                onChange={handleChange}
                />
                <button>Add Todo</button>
            </form>
            
        </div>
    )
}

export default NewTodoForm;