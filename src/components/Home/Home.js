import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';
import './Home.css';

const Home = () => {
    const topics = useLoaderData().data;
    return (
        <div className='home-container'>
            {
                <img className='banner-img' src="https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1567070991/1567070990.jpg" alt="" />
            }
            <div className='topics-conatiner'>
                {
                    topics.map(topic => <Topics key={topic.id} topic = {topic}></Topics>)
                }
            </div>
        </div>
    );
};

export default Home;