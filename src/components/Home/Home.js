import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';
import './Home.css';

const Home = () => {
    const topics = useLoaderData().data;
    return (
        <div className='home-container'>
            {
                topics.map(topic => <Topics key={topic.id} topic = {topic}></Topics>)
            }
        </div>
    );
};

export default Home;