import React from 'react';
import Project from '../Project';

import bgImg1 from '../../assets/img/run-buddy.png';
import bgImg2 from '../../assets/img/mood-music.png';
import bgImg3 from '../../assets/img/placeholder-2.jpg';
import bgImg4 from '../../assets/img/placeholder-3.jpg';

function Portfolio() {

  const projects = [
    {
      name: 'Run Buddy',
      url: 'https://jdrobs19.github.io/run-buddy/',
      bgStyle: {
        backgroundImage: "url( " + bgImg1 + ")"
      },
      id: 1
    },
    {
      name: 'Mood Music',
      url: 'https://jdrobs19.github.io/music-mood/',
      bgStyle: {
        backgroundImage: "url( " + bgImg2 + ")"
      },
      id: 2
    },
    {
      name: 'Casuals LFG',
      url: 'https://casuals-lfg.herokuapp.com/',
      bgStyle: {
        backgroundImage: "url( " + bgImg3 + ")"
      },
      id: 3
    },
    {
      name: 'Dino Store',
      url: 'https://limitless-refuge-02623.herokuapp.com/',
      bgStyle: {
        backgroundImage: "url( " + bgImg4 + ")"
      },
      id: 4
    }
  ];

  return (
    <section className="section">
      <article id="work">
        <div className="section-title">
          <h2>Portfolio</h2>
        </div>
        <div className="section-info work">
          {projects.map(project => (
            <Project {...project}
              key={project.id}
            />
          ))}
        </div>
      </article>
    </section>
  )
}

export default Portfolio;