import { useState } from "react";

export const useFormFields = (initialState) => {
    const [formData, setFormData] = useState(initialState);

    const handleChange = e => {
      const { value, name } = e.target;
      setFormData(formData => ({
        ...formData,
        [name]: value
      }))
    }

    const resetFormData = () => {
      setFormData(initialState)
    }

    return [formData, handleChange, resetFormData];
}