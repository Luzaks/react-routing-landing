import React, { useState } from 'react';
import hero from '../assets/images/hero.svg';
import { Link, useHistory} from 'react-router-dom';

const Main = () => {

    const [joined, setJoined] =useState('');
    const history = useHistory();

    const join = (ev) => {
        ev.preventDefault();
        if (joined !== '') {
            let today = new Date();
            let date = today.getFullYear()+'-'+(today.getMonth()+1) + '-' + today.getDate();
            history.push(`/thanks/${joined}`, date);
        }
    };

    return (
        <React.Fragment>
            <header>
                <img src={hero} alt="background"/>
                <div>
                    <h1>I am building this webpage.</h1>
                    <p>LorenjnscojnF AKNCQ QPFSJWDV lasfwrg erg aF ftj ils sg hk sdveh  ergbtyj ewdf etjn sadfvytrkfnbsornb sp</p>
                    <Link to="/contact">Get in touch</Link>
                </div>
            </header>
            <main>
                <section className="services">
                    <h2>Why we should work together?</h2>
                    <div className="service-container">
                        <div className="service-card service-one">

                        </div>
                        <div className="service-description">
                            <h3>SEO Friendly Apps.</h3>
                            <div>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>

                        </div>
                    </div>
                </section>
                <section className="services">
                    <div className="service-container">
                        <div className="service-card service-two">

                        </div>
                        <div className="service-description">
                            <h3>Clean and faster code.</h3>
                            <div>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>

                        </div>
                    </div>
                </section>
                <section className="services">
                    <div className="service-container">
                        <div className="service-card service-three">

                        </div>
                        <div className="service-description">
                            <h3>Support 24 / 7 </h3>
                            <div>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>

                        </div>
                    </div>
                </section>
                <section>
                    <h2>Join our newwletter to get the latest tends.</h2>
                    <form onSubmit={join} className="newsletter">
                        <input type="email" placeholder="Your email goes here" onChange={(ev) => setJoined(ev.target.value)} />
                        <input type="submit" value="Join now!"/>
                    </form>
                </section>
            </main>
        </React.Fragment>
    )
};

export default Main;