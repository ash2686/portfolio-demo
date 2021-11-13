import React from 'react';
import logo from '../Assets/logoNew.png'
// import About from './About';
import './Menu.css'
import { Link } from 'react-router-dom'


const Menu = () => {
    return (
        <div className='menu-container'>
            <div className="menu-logo">
                <img src={logo} alt="Image not found" />
            </div>

            <div className="menu-block" >
                <ul>
                  <Link exact to='/'><li className="menu-link" > Home </li></Link>
                  <Link to='/about'><li className="menu-link" > About </li></Link>
                    <li className="menu-link" > Services </li>
                    <li className="menu-link" > Portfolio </li>
                    <li className="menu-link" > Pricing </li>
                    <li className="menu-link" > Blog </li>
                    <li className="menu-link" > Contact </li>
                </ul >
            </div>

        </div>
    );
};

export default Menu;