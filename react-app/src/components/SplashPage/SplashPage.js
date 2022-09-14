import React from "react";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";
import './SplashPage.css'

function SplashPage() {


    return (
        <>

        <div className="MainSplashPageContainer">
            <div className="TopPartSplash">
                <div className="Column1_splashPage">
                    <img className="LandingPageImg" src='https://abs.twimg.com/sticky/illustrations/lohp_en_850x623.png'
                    />
                    <svg className="birdie" xmlnXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="888" height="444"><g fill="#FFFFFF"><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" fill="#FFFFFF"></path></g></svg>
                </div>
                <div className="Column2_SplashPage">
                    <div className="LoginAndSignup">
                        <div className='BIRDIMGCONTAINER_SplashPage'>
                            <img className='BIRDIMG_SplashPage' src='https://icon-library.com/images/twitter-bird-icon-png/twitter-bird-icon-png-23.jpg'/>
                        </div>
                        <div className="HappeningNowDiv">
                            <div className="HappeningNow">
                            Happening now
                            </div>
                        </div>
                        <div className="Join">
                            Join Twitter today.
                        </div>
                        <div className="BottomPartSplash">
                            <div className="Signup_2938">
                                <div className="SignUpContainer">
                                    <div className="SignUpText_2938">Sign up with email</div>
                                </div>
                            </div>
                            <div className="AlreadyAccount">
                                Already have an account?
                            </div>
                            <div className="Login_2397">
                                <div className="LoginDiv_2397">
                                    <div className="LoginText_2397">Sign in</div>
                                </div>
                                <div className="LoginAsDemo_2397">
                                    <div className="DemoText_2397">Demo user</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="SplashPageFooter">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. </div>
        </div>
        </>
    )
}

export default SplashPage
