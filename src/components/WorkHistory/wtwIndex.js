import React from 'react';

function Willis() {
    return (
        <section className="section willis-section">
            <article id="section">
                <div className="section-title">
                    <h2>Willis Towers Watson</h2>
                </div>
                <div className="section-info">
                    <div className="job-position">
                        <h3>Software Developer (Full Stack)</h3>
                        <p className="job-details">Draper, UT | 01/2022 - 02/2026</p>
                        <ul className="job-bullets">
                            <li>Created and supported 200+ SQL stored procedures for carrier application and policy reconciliation, reducing manual reconciliation by 80%.</li>
                            <li>Migrated 75% of SQL stored procedures to a reconciliation service in a C# codebase, collaborating with Stakeholders to define key acceptance criteria, saving ~35% database resources and improving reconciliation accuracy by 90%.</li>
                            <li>Supported internal and external React frontend clients displaying applications and policies of enrolled participants, and internal reconciliation React frontend. Created and updated automated test cases supporting implementation.</li>
                            <li>Updated frontend reconciliation website to use reconciliation service output, improving with new alerting and reporting to improve C# reconciliation by 15%.</li>
                            <li>Implemented 100% support for Group Medicare Advantage policy display for the internal and external websites. Calling microservice APIs to reconcile opt-in file and carrier status file.</li>
                        </ul>
                    </div>
                    <div className="job-position">
                        <h3>Knowledge Management Specialist</h3>
                        <p className="job-details">South Jordan, UT | 08/2014 - 12/2021</p>
                        <ul className="job-bullets">
                            <li>Product Owner of a team of five, created stories, connected with stakeholders, and completed tasks all within department standards and SLAs.</li>
                            <li>Partnered with key departments to update 500+ articles used internally and externally. Managed and updated according to SLA guidelines.</li>
                        </ul>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default Willis;
