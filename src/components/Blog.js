import React from 'react'
import './Blog.css'
import bg from '../assets/linksBg.jpg'


function Blog() {
    return (
        <div className='main-blog'>
            <div className="blog-top">
                <div className="blog-left">
                    <div className="blog-top-text">Coder</div>
                    <div className="logo-container">

                        <div className="blog-logo"></div>
                        <div className="logo-text"><p>Written by</p><br /><h4>Ash Sharma</h4></div>
                        <div className="logo-date">November 26, 2018</div>
                    </div>

                    <div className="left-main-text"><h1>World famous<br /> Website Developer</h1></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi aut assumenda fugit, nostrum voluptatum quo!</p>
                    <div className="blog-left-button">
                    <button>Continue Reading</button>
                    </div>
                </div>

                <div className="blog-right">
                    <img src={bg} alt="Server failed" />
                </div>
            </div>

            <div className="blog-bottom">
                <h2>I'm a <span className="bold">Web Designer</span> from <span className="country"><h2>India</h2></span>, I am in love with Coding, it is officially my life</h2>
            </div>


        </div>
    )
}

export default Blog
