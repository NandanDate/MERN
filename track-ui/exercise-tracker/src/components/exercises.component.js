import React, { useEffect, useState } from 'react';
import { getexercises } from './services/api';

const Exercises = () => {
    const [exercisesData, setExercisesData] = useState([]);

    useEffect(() => {
        getexercises()
            .then(data => {
                setExercisesData(data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <div className='container-fluid' style={{ width: '80%', alignItems: 'center' }}>
                <table className='table'>
                    <thead style={{ alignContent: 'center' }}>
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exercisesData.map((ele, index) => (
                            <tr key={index}>
                                <td>{ele.username}</td>
                                <td>{ele.description}</td>
                                <td>{ele.duration}</td>
                                <td>{ele.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Exercises;
