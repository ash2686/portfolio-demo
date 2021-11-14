import React from 'react'
import {Link} from 'react-router-dom'
import './Service.css'
import candle from '../Assets/candle.png'

function Service(props) {
    return (
        <div className='main-service'>
            <Link to='/'>
                <li className="main-service-block">
                  <img src={props.src} alt="hello" />
                    <h3 className="msb-text">
                        {props.text}
                    </h3>
                </li>
            </Link>
            
        </div>
    )
}

export default Service
