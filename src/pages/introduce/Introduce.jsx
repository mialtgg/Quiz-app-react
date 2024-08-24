import React, { useState } from 'react'
import './Introduce.css'
import Dropdown from '../../components/dropdown/Dropdown'
import{useNavigate} from 'react-router-dom'

const Introduce = () => {
  const difficulty =["easy","medium","hard"]
  const [difficultyChange, setDifficultyChange ] = useState("")
  const navigate = useNavigate()
  const TOTAL_OUESTİONS =10

  const startQuiz = () =>{
    if(difficultyChange){
      navigate(`/quiz/${difficultyChange}/${TOTAL_OUESTİONS}`)
    }
  }
  return (
    <div className='introduce'>
        <div className="introduce-container">
        <div className="introduce-logo">
            <img src='./mine_logo.png' alt='Mine Logo' />
            <span className='introduce-text'>Enginar Quiz</span>
          </div>
       <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange}/>
       <div onClick={startQuiz} className='introduce-btn'>Hadi Başlayalım</div>
        </div>
    </div>
  )
}

export default Introduce
