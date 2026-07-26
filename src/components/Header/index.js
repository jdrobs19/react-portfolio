import React from 'react';
import Hero from '../../assets/img/header_img.jpg';

const heroImage = {
    backgroundImage: "url(" + Hero + ")"
}

function Header() {
    return(
        <section className="hero" style={heroImage}>
    </section>
    );
}

export default Header;