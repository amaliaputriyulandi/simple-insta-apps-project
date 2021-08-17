import React from 'react'
import '../Register/Register.css'
import person from '../../assets/person.jpg'
import playstore from '../../assets/playstore.png'
import appstore from '../../assets/appstore.png'
import { useHistory } from 'react-router'


const Login = () =>{
    const history = useHistory()

    const handleSignUp = () =>{
        history.push('/')
    }
    return(
        <div>
            <div className='background'></div>
            <div className='container'>
                <div className='box'>
                    <div className='img-container'>
                        <img src={person} alt='person.jpg'/>                        
                    </div>
                    <div className='form-container'>
                        <form className='regist-form'>
                            <div>
                                <h3>Login Form</h3>
                            </div>
                            <div className='form-group'>
                                <label>Email</label>
                                <input type='text' placeholder='Enter your Email here'/>
                            </div>
                            <div className='form-group'>
                                <label>Password</label>
                                <input type='password' placeholder='Enter your Password here'/>
                            </div>
                            <div>
                                <input type='submit' value='Sign In'/>
                            </div>
                            <div className='confirm'>
                                Don't have an Account? <span onClick={handleSignUp}>Sign Up</span>
                            </div>
                            <div className='download'>
                                Get our App.
                                <div className='download-icon'>
                                    <img src={appstore} alt='appstore'/>
                                    <img src={playstore} alt='playstore'/>
                                </div>
                            </div>
                        </form> 
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login