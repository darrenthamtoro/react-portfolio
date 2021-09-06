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
                        {/* looping through all the projectList
                        {projectList.map((project, index) => {
                            //    console.log(project,)
                            return <li key={index} className={'item' + index}><a href="">{project}</a></li>
                        })} */}
                        <li className='item0'><a href="https://github.com/mrlowther/pet-hub">{projectList[0]}</a></li>
                        <li className='item1'><a href="https://github.com/darrenthamtoro/team-profile">{projectList[1]}</a></li>
                        <li className='item2'><a href="https://github.com/darrenthamtoro/Readme-generator">{projectList[2]}</a></li>
                        <li className='item3'><a href="https://darrenthamtoro.github.io/work-calendar/">{projectList[3]}</a></li>
                        <li className='item4'><a href="https://github.com/darrenthamtoro/note-taker">{projectList[4]}</a></li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Portfolio;