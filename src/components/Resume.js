import React from 'react';


function Resume() {
    return (
        <div className="container">
            <section id="resume" className="page-section">
                <h1>Resume </h1>

                {/* <a href="">Click Here to Download!!</a> */}
                <ul className="resume-info"> 
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <nav>
                    <a href="file:///Users/darrenthamtoro/Downloads/Updated%20resume.pdf">Resume</a>
                    </nav>
                </ul>
            </section>
        </div>
    )
}

export default Resume;