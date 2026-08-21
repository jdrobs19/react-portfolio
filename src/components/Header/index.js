import React from 'react';
import Hero from '../../assets/img/header_img.jpg';

const heroImage = {
    backgroundImage: "url(" + Hero + ")"
}

function Header() {
    return(
        <section className="hero" style={heroImage} aria-labelledby="hero-heading">
            <div className="hero-content">
                <p className="eyebrow">Software developer · Utah</p>
            <h2 id="hero-heading">Building useful things<br /><em>with thoughtful code.</em></h2>
                <p className="hero-copy">Full-stack developer focused on clear systems, better user experiences, and measurable results.</p>
            </div>
            <span className="hero-index">01 <span>/</span> 02</span>
    </section>
    );
}

export default Header;