import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';
import './Home.css';

const Home = () => {
    const topics = useLoaderData().data;
    return (
        <div className='home-container'>
            {
                <img className='banner-img' src="https://www.tech-wonders.com/wp-content/uploads/2018/06/educational-technology-impact-learning.jpg" alt="" />
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