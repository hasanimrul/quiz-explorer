import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Topics.css';

const Topics = ({topic}) => {
    console.log(topic);
    const {name, logo, id} = topic;
    
    
    return (
        <div className='topics-container'>
                <div className='topics'>
                    <img src={logo} alt="" />
                    <h3>Course Name: {name}</h3>
                    <Link to= {`/quiz/${id}`}>
                    <button>Start Quiz <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon></button>
                    </Link>
                </div>
        </div>
    );
};

export default Topics;