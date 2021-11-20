import React from 'react'
import Service from './Service'
import './Services.css'
import candle from '../assets/candle.png'
import castle from '../assets/castle.png'
import cat from '../assets/cat.png'
import ghost from '../assets/ghost.png'
import moon from '../assets/moon.png'
import poison from '../assets/poison.png'
import skull from '../assets/skull.png'
import zombie from '../assets/zombie.png'

function Services() {
    return (
        <div className='services-main'>
            <div className="services-main-block">
                <ul className="services-block-1">
                    <Service
                        src={candle}
                        text="Candle"
                    />

                    <Service
                        src={castle}
                        text="Castle"
                    />

                    <Service
                        src={cat}
                        text="Cat"
                    />

                    <Service
                        src={ghost}
                        text="Ghost"
                    />


                </ul>


                <ul className="services-block-2">
                    <Service
                        src={moon}
                        text="Moon"
                    />

                    <Service
                        src={poison}
                        text="Poison"
                    />

                    <Service
                        src={skull}
                        text="Skull"
                    />

                    <Service
                        src={zombie}
                        text="Zombie"
                    />
                </ul>
            </div>
        </div>
    )
}

export default Services
