import React from 'react';
import resume from '../../assets/img/resume.pdf';

function Resume() {
   return (
      <section>
         <h2>Resume</h2> 
         <iframe src={resume} title='Resume' type='application/pdf' width='100%' height='100%' />
      </section>
   );
}

export default Resume;