import React, { useEffect, useRef, useState } from 'react';
import profile from '../../assets/img/profile.jpg'
import resume from '../../assets/img/resume.pdf';
import Willis from '../WorkHistory/wtwIndex';
import AmericaFirst from '../WorkHistory/americaFirstIndex';


function About() {
    const aboutSectionRef = useRef(null);
    const willisSectionRef = useRef(null);
    const americaFirstSectionRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Get header height to account for sticky nav
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 80;
        const effectiveViewportHeight = window.innerHeight - headerHeight;

        // Update About section fade-out
        if (aboutSectionRef.current) {
            const aboutTop = aboutSectionRef.current.offsetTop;
            const fadeStart = aboutTop;
            const fadeEnd = aboutTop + 150;
            const opacity = Math.max(0, 1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart));
            aboutSectionRef.current.style.opacity = opacity;
            aboutSectionRef.current.style.pointerEvents = opacity > 0.01 ? 'auto' : 'none';
        }

        // Update Willis section fade-in
        if (willisSectionRef.current) {
            const willisTop = willisSectionRef.current.offsetTop;
            const fadeStart = willisTop - effectiveViewportHeight / 2;
            const fadeEnd = willisTop + 150;
            const opacity = Math.max(0, Math.min(1, (scrollPosition - fadeStart) / (fadeEnd - fadeStart)));
            willisSectionRef.current.style.opacity = opacity;
            willisSectionRef.current.style.pointerEvents = opacity > 0.01 ? 'auto' : 'none';
        }

        // Update America First section fade-in
        if (americaFirstSectionRef.current) {
            const americaFirstTop = americaFirstSectionRef.current.offsetTop;
            const fadeStart = americaFirstTop - effectiveViewportHeight * 0.75;
            const fadeEnd = americaFirstTop - effectiveViewportHeight * 0.25;
            const opacity = Math.max(0, Math.min(1, (scrollPosition - fadeStart) / (fadeEnd - fadeStart)));
            americaFirstSectionRef.current.style.opacity = opacity;
            americaFirstSectionRef.current.style.pointerEvents = opacity > 0.01 ? 'auto' : 'none';
        }
    }, [scrollPosition]);

    return (
        <>
            <section className="section about-section" ref={aboutSectionRef} style={{ transition: 'opacity 0.3s ease' }}>
                <img src={profile} alt="profile" className="profile-img"/>
                <article id="section">
                    <div className="section-title">
                        <h2>Professional Summary</h2>
                    </div>
                    <div className="section-info">
                        <p>
                           As a Software Developer at Willis Towers Watson since 2022, I focus on using my technical ability to deliver impactful solutions. My ability in tools such as GitHub Copilot, Microsoft Azure, and Microsoft SQL Server supports the development and optimization of software projects.
                            <br/><br/>
                            With over four years of experience in software development, I am committed to contributing to innovative technology solutions that meet organizational goals. I aim to continuously advance my technical skills and support a collaborative approach to problem-solving.
                        </p>
                    </div>
                </article>
            </section>
            <div ref={willisSectionRef} style={{ opacity: 0, transition: 'opacity 0.3s ease', minHeight: '80vh' }}>
                <Willis />
            </div>
            <div ref={americaFirstSectionRef} style={{ opacity: 0, transition: 'opacity 0.3s ease', minHeight: '60vh' }}>
                <AmericaFirst />
            </div>
            <div style={{ padding: '40px 0', textAlign: 'center' }}>
                <p className="resume-link"><a href={resume} download="resume.pdf" target="_blank" rel="noopener noreferrer">View full resume</a></p>
            </div>
        </>
    );
}

export default About;

