import React from 'react'
import "./Homepage.css";
const Homepage=()=>{
  return (
    <div className="homepage">
        <div className='homepage__top'>
     <div className="homepage__topLeft">

        <img className ="homepage__topLeft-img" src="/imges/twitter_home.png" alt="twitter"/>
     </div>
        <div className="homepage__topRight">
            <img className ="logo" src="" alt="logo"/>
            <h1 className="homepage__topRight-title">Safety is your right !</h1>
            <h2 className="homepage__topRight-subtitle">Join Safety Sahyogi Today</h2>
            <div className="homepage__topRight-btns">
                <button className='primary-button'>
                    Sign up with Google
                </button>
                <button className='primary-button'>
                    Sign up with Apple
                </button>
                <button className='secondary-button'>
                    Sign up with phone number
                </button>
                <p className="homepage__right_policies">
                    By signing up, you agree to the <a href="#">Terms of Services</a> and
                   <a href="#">Privacy Policy</a>,including {" "}
                   <a href="#"> Cookie Use.</a>
                </p>
            </div>
            <div className="homepage__topRight--btns">
               <h2>Already have an account?</h2>
                <button className='primary-button'>
                    Sign in
                </button>
            </div>
        </div>
        </div>
        <footer className='footer'>

        </footer>
    </div>
  );
}

export default Homepage;;
