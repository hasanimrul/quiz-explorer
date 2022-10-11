import React from 'react';
import './Topics.css';

const Topics = ({topic}) => {
    console.log(topic);
    const {name, logo, total} = topic;
    
    
    return (
        <div className='topics-container'>
                <div className='topics'>
                    <img src={logo} alt="" />
                    <h3>Course Name: {name}</h3>
                    <button>Start Quiz</button>
                </div>
        </div>
    );
};

export default Topics;