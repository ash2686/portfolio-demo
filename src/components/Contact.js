import React from 'react'
import './Contact.css'
import address from '../assets/address.png'
import phone from '../assets/phone.png'
import email from '../assets/email.png'
import tie from '../assets/tie.jpg'

const contact = () => {
    return (
        <div className='contact-main'>
            <div className="contact-image">
                    <img src={tie} alt="Tie not Loaded" />
            </div>

            <div className="contact-content">
                <div className="contact-top">
                    <h1>CONTACT INFO</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae in tenetur recusandae maxime saepe illum!</p>
                </div>

                <div className="contact-icons">
                        <div className="contact-address">
                            <img src={address} alt="Address not found" />
                            <h3>ADDRESS</h3>
                            {/* <h4>101 Queen Street, <br />Auckland</h4> */}
                            <h4>101 Hello Street, <br />Plaza</h4>
                        </div>

                        <div className="contact-phone">
                        <img src={phone} alt="Phone not found" />
                            <h3>PHONE</h3>
                            <h4>11-2233-4455</h4>
                        </div>

                        <div className="contact-email">
                        <img src={email} alt="Email not found" />
                            <h3>EMAIL</h3>
                            <h4>webdesign@heart</h4>
                        </div>
                </div>
            </div>


        </div>
    )
}

export default contact
