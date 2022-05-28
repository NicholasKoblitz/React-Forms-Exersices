import react, { useState } from "react";
import {v4 as uuid} from 'uuid';

const NewBoxForm = ({addBox}) => {

    const INITIAL_STATE = {
        id: "",
        width: "",
        height: "",
        backGroundColor: ""
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
        addBox(uuid(), formData.width, formData.height, formData.backGroundColor);
        setFormData(INITIAL_STATE);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="width">Box Width</label>
                <input 
                id="width" 
                type="number" 
                name="width" 
                value={formData.width} 
                onChange={handleChange} 
                />
                <label htmlFor="height">Box Height</label>
                <input 
                id="height" 
                type="number" 
                name="height" 
                value={formData.height}
                onChange={handleChange} 
                />
                <label htmlFor="backgroundColor">Box Color</label>
                <input 
                id="backgroundColor" 
                type="text" 
                name="backGroundColor" 
                value={formData.backGroundColor}
                onChange={handleChange} 
                />
                <button>Add Box</button>
            </form>
        </div>
    )
}

export default NewBoxForm;