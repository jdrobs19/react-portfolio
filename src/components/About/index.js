import React from 'react';
import profile from '../../assets/img/profile.jpg'


function About() {
    return (
        <section className="section">
            <article id="section">
                <div className="section-title">
                    <h2>About Me</h2>
                </div>
                <div className="section-info">
                    <p>
                        I'm not good at talking about myself. I like to be outdoors, at times, but a majority of my time is spent with my wife and daughter. I play video games and watch movies.
                        I'm working on bettering myself both physically and mentally. Currently, developing skills of a full-stack developer using the MERN stack. Enjoy front end work and database work.
                    </p>
                </div>
            </article>
            <img src={profile} alt="profile" className="profile-img"/>
        </section>
    );
}

export default About;

