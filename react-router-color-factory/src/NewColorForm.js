import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from "react-router-dom";
import { useFormFields } from "./hooks/useFormFields";


const NewColorForm = ({ addHexCode }) => {
    const INITIAL_STATE = { hex: '#0000ff' }
    const [formData, handleChange, resetFormData] = useFormFields(INITIAL_STATE);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        addHexCode({ ...formData, id:uuid() });
        resetFormData();
        navigate('/colors');
    }

    return (
    <div style={{margin: '2rem'}}>
        <form aria-label="new-color-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="hex">Select a Color: </label>
                <input
                    aria-label="hex-input"
                    id="hex"
                    type="color"
                    name="hex"
                    required
                    value={formData.hex}
                    onChange={handleChange}
                />
            </div>
        <button className='btn'>Add Color</button>
        </form>
        <Link 
            className="btn cancel"
            to={'/colors'}>
                Cancel
        </Link>
    </div>
    )
}

export default NewColorForm;