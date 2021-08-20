import React, { useState } from 'react'
import './Register.css'
import person from '../../assets/person.jpg'
import check from '../../assets/check.png'
import playstore from '../../assets/playstore.png'
import appstore from '../../assets/appstore.png'
import { useHistory } from 'react-router'
import { register } from '../../Services/User'
import Modal from 'react-modal'


const Register = () =>{
    const history = useHistory()
    const [disabled, setDisabled] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [username, setUsername]=useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [modalTogle, setModalTogle] = useState(false)
    const customStyles = {
        overlay:{
            background:'rgba(0, 0, 0, 0)',   
        },        
    
        content: {
          fontFamily: 'Sora , sans-serif',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
    }

    const handleSignIn = () =>{
        history.push('/Login')
    }

    const handleCB = () =>{
        setDisabled(!disabled)
        
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setIsLoading(true)
        register(email, username, password)
            .then((response)=>{
              //  console.log(response)
                setIsLoading(false)
                response.statusCode === 201 && setModalTogle(true)
            })
            .catch((error)=>{
              //  console.log(error)
                setIsLoading(false)
                alert(error)
            })
    }
    //console.log(disabled)

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
                                <h3>Registration Form</h3>
                            </div>
                            <div className='form-group'>
                                <label>Email</label>
                                <input type='text' placeholder='Enter your Email here' onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                            <div className='form-group'>
                                <label>Full Name</label>
                                <input type='text' placeholder='Enter your Full Name here'/>
                            </div>
                            <div className='form-group'>
                                <label>Username</label>
                                <input type='text' placeholder='Enter your Username here' onChange={(e)=>setUsername(e.target.value)}/>
                            </div>
                            <div className='form-group'>
                                <label>Password</label>
                                <input type='password' placeholder='Enter your Password here' onChange={(e)=>setPassword(e.target.value)}/>
                            </div>
                            <div className='term'>
                                <input type='checkbox' onClick={handleCB}/>
                                By signing up, you agree to <span>Term Of Service</span>
                            </div>
                            <div>
                                {
                                    isLoading ? <button className='btn_load' disabled='true'>Registering <span className='fa fa-circle-o-notch fa-spin'></span></button> :
                                    <input type='submit' value='Register' disabled={disabled}/>
                                }
                            </div>
                            <div className='confirm'>
                                Already have an Account? <span onClick={handleSignIn}>Sign In</span>
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
            <Modal
                isOpen={modalTogle}
                // onRequestClose={closeModal}
                style={customStyles}
            >
                <div>
                    <div style={{display:'flex', alignItems:'center'}}><h3 style={{marginRight:'5px'}}>Register Succes</h3><img height='32px' width='32px' src={check} alt='success-icon'/></div>
                    <div><button onClick={handleSignIn} className='btn'>OK</button></div>
                </div>
            </Modal>
        </div>

    )
}

export default Register