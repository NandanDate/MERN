import React, { useEffect, useState } from 'react';
import { addUsers, getUsers } from './services/api';

const CreateUsers = () => {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    useEffect(() => {
        getUsers()
            .then(data => setUsers(data))
            .catch(err => console.log(err));
    }, []);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            username: username,
            age: age,
        };

        try {
            const result = await addUsers(user);
            console.log(result, "submit result");
            // Perform any additional actions after successful submission
        } catch (error) {
            console.error('Error submitting user:', error);
        }
    };

    return (
        <div className='container' style={{ width: '40%' }}>
            <h3>Create Users</h3>
            <br />
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Username</label><br />
                    <input
                        type='text'
                        required
                        className='form-control'
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div className='form-group'>
                    <label>Age</label><br />
                    <input
                        type='number'
                        required
                        className='form-control'
                        value={age}
                        onChange={handleAgeChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreateUsers;
