import React from 'react';
import './Modal.css';
import { FaSadTear, FaCrown, FaFistRaised, FaTrophy } from 'react-icons/fa'; // İkonları import et

const Modal = ({ score }) => {

  const getMessage = () => {
    if (score < 500) {
      return "Sen olgunlaşmamış bir enginarsın, vitamine ihtiyacın var!";
    } else if (score >= 500 && score < 1000) {
      return "Sen enginarların kralını yerinden etmeye meraklısın!";
    } else if (score = 1000) {
      return "Sen gerçek bir enginarsın!";
    } else {
      return "Sonuç yok!";
    }
  }

  const getIcon = () => {
    if (score < 500) {
      return <FaSadTear className='modal-icon' />; 
    } else if (score >= 500 && score < 1000) {
      return <FaFistRaised className='modal-icon' />; 
    } else if (score >= 1000) {
      return <FaTrophy className='modal-icon' />; 
    }
  }

  return (
    <div className='modal'>
      <div className='icon'>{getIcon()}</div>
      <div className='modal-title'> Score : {score} </div>
      
      {/* Koşullu olarak doğru ikonu göster */}
      
      
      <div className='modal-message'>{getMessage()}</div>
      <div onClick={() => window.location = "/"} className='modal-btn'> Try Again</div>
    </div>
  )
}

export default Modal;
