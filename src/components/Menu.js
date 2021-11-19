import React from 'react';
import logo from '../assets/logoNew.png'
// import About from './About';
import './Menu.css'
import { Link } from 'react-router-dom'


const Menu = () => {
    return (
        <div className='menu-container'>
            <div className="menu-logo">
              <Link to='/'><img src={logo} alt="Image not found" /></Link>
                
            </div>

            <div className="menu-block" >
                <ul>
                  <Link exact to='/'><li className="menu-link" > Home </li></Link>
                  <Link to='/about'><li className="menu-link" > About </li></Link>
                  <Link to='/services'><li className="menu-link" > Services </li></Link>
                  <Link to='/pricing'><li className="menu-link" > Pricing </li></Link>
                  <Link to='/blog'><li className="menu-link" > Blog </li></Link>
                   <Link to='/contact'><li className="menu-link" > Contact </li></Link>
                    {/* <li className="menu-link" > Portfolio </li> */}
                </ul >
            </div>

        </div>
    );
};

export default Menu;