import React, { useState } from 'react';

const CreateUsers = () => {
    const [formData, setFormData] = useState({
        username: '',
        age: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // You can perform further actions with the form data here
        console.log(formData);
        // Reset the form fields after submission if needed
        setFormData({
            username: '',
            age: ''
        });
    };

    return (
        <div>
            <h2>Create Exercises</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreateUsers;
