import React from 'react'
import './Pricing.css'
import account from '../assets/account.png'

function Pricing() {
    return (
        <div className="main-pricing-block">
        <div className="main-pricing">
            
            <div className="pricing-box1">
                <h1>Save your<br/><span>money now</span></h1>
                <p className="para1">Lorem ipsum dolor sit amet consectetur, adipisicing edflit. Cupiditate delectus totam  non! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, distinctio vel. </p>
                <p className="para2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sit, qui debitis illo laudantium saepe.</p>
                <div className="pricing-icon">
                    <img src={account} alt="Sorry, Somethig went wrong" />
                </div>

            </div>

            <div className="pricing-right">
                <div className="pricing-right-top">
                    <h1>Start now<br/>your <span>free plan.</span></h1>
                    <p>Are you a corporate?<br/><span>Contact Us</span></p>
                </div>
                <div className="pricing-right-bottom">
                    <div className="pricing-box2">
                        <div className="pricing-box2-top">
                            <h3>Lite</h3>
                            <div className="pricing-box2-top-side">
                            <h4>Free</h4><br/>
                            <h6>with restrictions</h6>
                            </div>
                        </div>
                        <div className="pricing-box2-middle">
                            <div className="pricing-box2-middle-top">
                                <h6>Plan Includes:</h6>
                            </div>
                            <div className="pricing-box2-middle-main">
                                <p>Manage conversation directly from your website</p>
                                <p>Bot without the AI service.</p>
                                <p>Achieved chat for 30 days</p>
                                <p>Free, for always</p>
                            </div>
                        </div>
                        <div className="pricing-box2-bottom">
                                {/* <p>View all the features</p> */}
                                <button>Start 14 days of free Pro Plan</button>
                        </div>
                    </div>

                    <div className="pricing-box3">
                    <div className="pricing-box3-top">
                            <h3>Pro</h3>
                            <div className="pricing-box2-top-side">
                            <h4>$29</h4><br/>
                            <h6>monthly</h6>
                            </div>
                        </div>
                        <div className="pricing-box2-middle">
                            <div className="pricing-box2-middle-top">
                                <h6>Plan Includes:</h6>
                            </div>
                            <div className="pricing-box2-middle-main">
                                <p>Manage conversation directly from your website</p>
                                <p>Bot without the AI service.</p>
                                <p>Achieved chat for 30 days</p>
                                <p>Free, for always</p>
                            </div>
                        </div>
                        <div className="pricing-box3-bottom">
                                {/* <p>View all the features</p> */}
                                <button>Start 14 days of free Pro Plan</button>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
        </div>
    )
}

export default Pricing
