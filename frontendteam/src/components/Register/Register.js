import React from 'react'
import './Register.css'
import person from '../../assets/person.jpg'

const Register = () =>{
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
                                <h3>Registration Form</h3>
                            </div>
                            <div className='form-group'>
                                <label>Email</label>
                                <input type='text' placeholder='Enter your Email here'/>
                            </div>
                            <div className='form-group'>
                                <label>Full Name</label>
                                <input type='text' placeholder='Enter your Full Name here'/>
                            </div>
                            <div className='form-group'>
                                <label>Username</label>
                                <input type='text' placeholder='Enter your Ssername here'/>
                            </div>
                            <div className='form-group'>
                                <label>Password</label>
                                <input type='password' placeholder='Enter your Password here'/>
                            </div>
                            <div className='term'>
                                <input type='checkbox'/>
                                By signing up, you agree to <span>Term Of Service</span>
                            </div>
                            <div>
                                <input type='submit' value='Register'/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Register