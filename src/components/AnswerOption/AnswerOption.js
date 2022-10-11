import React, { useId } from 'react';
import './AnswerOption.css';

const AnswerOption = ({option, questions}) => {
    const id = useId();
    
    return (
        <div className='answer-option-container'>
        
                <input type="radio" name="answer" id={id + 'quiz'} />
                <label for="quiz">{option}</label>
            
        </div>
    );
};

export default AnswerOption;