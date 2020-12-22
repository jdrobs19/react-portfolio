import React from 'react';
import profile from '../../assets/img/profile.jpg'


function About() {
    return (
        <>
            <h1>About Me</h1>
            <img src={profile} alt="profile" className="" />
            <p>
                I'm not good at talking about myself. I like to be outdoors, at times, but a majority of my time is spent with my wife and daughter. I play video games and watch movies.
                I'm working on bettering myself both physically and mentally. Currently, developing skills of a full-stack developer using the MERN stack. Enjoy front end work and database work.
            </p>
        </>
    );
}

export default About;