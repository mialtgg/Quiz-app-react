import React, { useEffect, useState } from 'react'


const QuestionCard = ({ questionData, score, setScore, count, setCount, modal, setModal}) => {
    const [timer, setTimer] = useState(30)
    const approvedChoice = (e) =>{
        const checkAnswer = e.currentTarget.value == questionData[count]?.correct_answer
        if (checkAnswer){
            setScore(score + 100)
        }
        setCount(count + 1)
        if(count == 9)
        setModal(true)
        
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
    return (
        <div className='questionCard'>
            <div className='questionCard-timer'>{timer}</div>
            <div className='questionCard-title'>{count + 1}/10 - {questionData[count]?.question}</div>
            {
                questionData[count]?.answers ? (
                    questionData[count]?.answers.map((answer, i) => (
                        <button onClick={approvedChoice} key={i} value={answer}>{answer}</button>
                    ))
                ) : (
                    <p>Yükleniyor...</p> // Veriler gelmeden önce gösterilecek bir mesaj
                )
            }
        </div>
    )
    
}

export default QuestionCard
