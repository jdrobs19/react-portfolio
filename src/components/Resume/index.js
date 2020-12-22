import React from 'react';
import resume from '../../assets/img/resume.pdf';

function Resume() {
   return (

      <section className="section">
         <article id="section">
         <div className="section-title">
            <h2>Resume</h2>
         </div>
         <div className="section-info ">
            <p><a href={resume} download="resume.pdf" target="_blank" rel="noopener noreferrer">View my resume</a></p>
         </div>
         </article>
      </section >
   );
}

export default Resume;