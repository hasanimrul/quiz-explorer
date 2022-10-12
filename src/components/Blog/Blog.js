import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-container'>
            <h2 >BLog</h2>
            <div className='blog-content'>
                <h3>How does react router works?</h3>
                <p>Answer: React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>

                <h3>How does context API works?</h3>
                <p>Answer: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>

                <h3>What is useRef?</h3>
                <p>Answer: The useRef Hook allows us to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. Essentially, useRef is like a “box” that can hold a mutable value in its current property. If we pass a ref object to React with ref=myRef, React will set its .current property to the corresponding DOM node whenever that node changes.</p>
            </div>
        </div>
    );
};

export default Blog;