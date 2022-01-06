import React, {useState} from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import './Form.css'
import Login from './Login'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'





const Form = () => {
    const [isSubmitted, setIsSubmitted]=useState(false);
    function submitForm(){
        setIsSubmitted(true);
    }
    return (
        <div className="form-container">
            {!isSubmitted ? (
                <Login submitForm={submitForm} />
                ) : (
                <FormSuccess/>
            )}
            <div className="form-content-left">
            <img src="img/img-1.svg" alt="spaceship" className='form-img'/>
        </div>
                    
        </div>
    )
}

export default Form
