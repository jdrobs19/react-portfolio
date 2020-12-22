import React from 'react';
import Hero from '../../assets/img/header_img.jpg';

const heroImage = {
    backgroundImage: "url(" + Hero + ")"
}

function Header() {
    return(
        <section className="hero" style={heroImage}>
        <div className="subtext">
            <h2>Always a work in progress</h2>
        </div>
    </section>
    );
}

export default Header;