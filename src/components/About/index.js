import React, { useEffect, useRef } from 'react';
import profile from '../../assets/img/profile.jpg'
import resume from '../../assets/img/resume.pdf';
import Willis from '../WorkHistory/wtwIndex';
import AmericaFirst from '../WorkHistory/americaFirstIndex';


function About() {
    const aboutSectionRef = useRef(null);
    const willisSectionRef = useRef(null);
    const americaFirstSectionRef = useRef(null);

    useEffect(() => {
        const experienceSections = [willisSectionRef.current, americaFirstSectionRef.current].filter(Boolean);

        if (!('IntersectionObserver' in window)) {
            experienceSections.forEach((section) => section.classList.add('is-visible'));
            return undefined;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle('is-visible', entry.isIntersecting);
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

        experienceSections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <section id="about" className="section about-section" ref={aboutSectionRef} aria-labelledby="about-title">
                <img src={profile} alt="Jordan Roberts" className="profile-img"/>
                <article id="section">
                    <div className="section-title">
                        <h2 id="about-title">Professional Summary</h2>
                    </div>
                    <div className="section-info">
                        <div className="summary-kicker">A little about my work</div>
                        <p>
                           As a Software Developer at Willis Towers Watson since 2022, I focus on using my technical ability to deliver impactful solutions. My ability in tools such as GitHub Copilot, Microsoft Azure, and Microsoft SQL Server supports the development and optimization of software projects.
                            <br/><br/>
                            With over four years of experience in software development, I am committed to contributing to innovative technology solutions that meet organizational goals. I aim to continuously advance my technical skills and support a collaborative approach to problem-solving.
                        </p>
                    </div>
                </article>
            </section>
            <section id="skills" className="section skills-section" aria-labelledby="skills-title">
                <article>
                    <div className="section-title">
                        <h2 id="skills-title">Core Skills</h2>
                    </div>
                    <div className="skills-grid">
                        <div className="skill-group">
                            <p className="skill-group-label">Frontend</p>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>TypeScript</li>
                            </ul>
                        </div>
                        <div className="skill-group">
                            <p className="skill-group-label">Backend &amp; Cloud</p>
                            <ul>
                                <li>C#</li>
                                <li>Python</li>
                                <li>Azure (App Insights/CosmosDB)</li>
                                <li>Jest/XUnit testing</li>
                            </ul>
                        </div>
                        <div className="skill-group">
                            <p className="skill-group-label">Data &amp; Delivery</p>
                            <ul>
                                <li>SQL Server</li>
                                <li>MongoDB</li>
                                <li>GitHub Copilot</li>
                                <li>CI/CD</li>
                            </ul>
                        </div>
                    </div>
                </article>
            </section>
            <div id="experience" className="experience-section" ref={willisSectionRef}>
                <Willis />
            </div>
            <div id="earlier-experience" className="experience-section" ref={americaFirstSectionRef}>
                <AmericaFirst />
            </div>
            <div className="resume-cta">
                <p className="resume-link"><a href={resume} download="resume.pdf" target="_blank" rel="noopener noreferrer">View full resume <span aria-hidden="true">↗</span></a></p>
            </div>
        </>
    );
}

export default About;

