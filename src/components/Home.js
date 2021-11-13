import React from 'react';
import './Home.css'
import pic3nbg from '../MyPics/pic3nbg.png'


const Home = () => {
    return (
        <div className="home-container">
          
            <div className="hero-image">
                <img src={pic3nbg} alt="Hero Pic not displayed" />
            </div>
            <div className="main-section-text">
                <div className="text-button">
                        <p>Hi there!</p>
                        <div className="square"></div>
                </div>
                <div className="about-me">
                    <h2>I am Ash Sharma, I am a Web Developer</h2>
                </div>
                <div className="para-me">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime rem perspiciatis consequatur dignissimos!
                </div>

                <div className="buttons-grp">
                    <button className='hire'>Hire Me <i class="fas fa-sign-out-alt"></i></button>
                    <button className='portfolio'>View Portfolio <i class="fas fa-sign-out-alt"></i></button>
                </div>

                <div className="social-media">
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-twitter"></i>
                 </div>
            </div>
        </div>
    );
};


export default Home;