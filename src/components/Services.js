import React from 'react'
import Service from './Service'
import './Services.css'
import candle from '../Assets/candle.png'
import castle from '../Assets/castle.png'
import cat from '../Assets/cat.png'
import ghost from '../Assets/ghost.png'
import moon from '../Assets/moon.png'
import poison from '../Assets/poison.png'
import skull from '../Assets/skull.png'
import zombie from '../Assets/zombie.png'

function Services() {
    return (
        <div className='services-main'>
            <ul className="services-block">
                <Service 
                src={candle} 
                text= "Candle"
                />

                <Service 
                src={castle} 
                text= "Castle"
                />

                <Service 
                src={cat} 
                text= "Cat"
                />

                <Service 
                src={ghost} 
                text= "Ghost"
                />

                
            </ul>  
          

            <ul>
                <Service 
                src={moon} 
                text= "Moon"
                />

                <Service 
                src={poison} 
                text= "Poison"
                />

                <Service 
                src={skull} 
                text= "Skull"
                />

                <Service 
                src={zombie} 
                text= "Zombie"
                />
            </ul>          
        </div>
    )
}

export default Services
