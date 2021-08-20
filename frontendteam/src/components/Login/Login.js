import React, { useState } from 'react'
import '../Register/Register.css'
import person from '../../assets/person.jpg'
import playstore from '../../assets/playstore.png'
import appstore from '../../assets/appstore.png'
import { useHistory } from 'react-router'
import { login } from '../../Services/User'


const Login = () =>{
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSignUp = () =>{
        history.push('/')
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsLoading(true)
        const stroe = window.localStorage
        login(email, password)
            .then((response)=>{
                setIsLoading(false)
                stroe.setItem('token',response.token)
                alert(response.message)
            })
            .catch((error)=>{
                console.log(error)
                setIsLoading(false)
                alert(error)  
            })
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
                        <form className='regist-form' onSubmit={handleSubmit}>
                            <div>
                                <h3>Login Form</h3>
                            </div>
                            <div className='form-group'>
                                <label>Email</label>
                                <input type='text' placeholder='Enter your Email here' onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                            <div className='form-group'>
                                <label>Password</label>
                                <input type='password' placeholder='Enter your Password here' onChange={(e)=>setPassword(e.target.value)}/>
                            </div>
                            <div>
                                {
                                     isLoading ? <button className='btn_load' disabled='true'>Signing In <span className='fa fa-circle-o-notch fa-spin'></span></button> :
                                        <input type='submit' value='Sign In'/>      
                                }
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