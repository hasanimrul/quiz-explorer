import './AnswerOption.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const AnswerOption = ({option, correctAnswer}) => {
    const handleAnswerToast = () =>{
        if (option === correctAnswer){
             toast('Correct Answer. Good Job!');
        }
        else{
             toast('Wrong Answer. Try again!');
        }
    }
    
    return (
        <div className='answer-option-container'>
        
                <label>
                    <input type="radio" name="answer" id='quiz' onClick={handleAnswerToast}/>
                      {option}
                </label>
                {/* <label for="quiz">{option}</label> */}
            
        </div>
    );
};

export default AnswerOption;