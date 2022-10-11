import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';
import './Home.css';

const Home = () => {
    const topics = useLoaderData().data;
    return (
        <div className='home-container'>
            {
                <img className='banner-img' src="http://sitegalleria.com/wp-content/uploads/2019/08/web-development-company-bangalore.jpg" alt="" />
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