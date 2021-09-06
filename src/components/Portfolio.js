import React, { useState } from 'react';

//Functional Components  - Pure Componenets 
// setHOOKS - helps you retain value or update values

function Portfolio() {
    const [projectList, setProject] = useState(["Pet-Hub", "Team-Profile Generator", "Readme-Generator", "Day Planner", "Note-Taker"]);
    return (
        <div className="container">
            <section id="work" className="page-section">
                <h1>Portfolio </h1>
                <div className="workContainer">
                    <ul className="work-item">
                        {/* looping through all the projectList */}
                        {projectList.map((project, index) => {
                            //    console.log(project,)
                            return <li key={index} className={'item' + index}><a href="">{project}</a></li>
                        })}
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Portfolio;