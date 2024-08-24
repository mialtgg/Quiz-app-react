import React, { useEffect, useState } from 'react'
import './QuestionCard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import soundEffectTime from '../../assets/sounds/tick-tock.mp3'; // Ses dosyasının import introSound from '../../assets/sounds/start.mp3';
const QuestionCard = ({ questionData, score, setScore, count, setCount, modal, setModal}) => {
    const [timer, setTimer] = useState(30)
    const playSoundTime = () => {
        const audio = new Audio(soundEffectTime);
        audio.play();
    };
  
    const approvedChoice = (e) =>{
        const checkAnswer = e.currentTarget.value == questionData[count]?.correct_answer
        if (checkAnswer){
            setScore(score + 100)
        }
        setCount(count + 1)
        if(count == 9)
        setModal(true)
        setTimer(30)
    }
    useEffect(() => {
        // Zamanlayıcıyı başlat
        const interval = setInterval(() => {
            if (timer > 0) {
                setTimer(timer - 1)
                
            }
            if (timer == 0 && count < 10 ) {
                setCount(count + 1 )
                setTimer(30)
            }
            else if(count >=10) 
                {
                    setModal(true) 
                }
             
            
            
        }, 1000)
        return () => clearInterval(interval)
    }, [timer]);

    useEffect(() => {
        
        playSoundTime();
    }, []); 
    return (
        <div className='questionCard'>
           <div className="questionCard-timer">
           <span className="alarm-icon">&#x23F0;</span>
            {timer} 
        </div>
            <div className='questionCard-title'>{count + 1}/10 - {questionData[count]?.question}</div>
            {
                questionData[count]?.answers ? (
                    questionData[count]?.answers.map((answer, i) => (
                        <button onClick={approvedChoice} key={i} value={answer}>{answer}</button>
                    ))
                ) : (
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                    <div className="spinner-border text-succes" role="status">
                        <span className="visually-hidden">Yükleniyor...</span>
                    </div>
                </div>
                )
            }
        </div>
    )
    
}

export default QuestionCard
