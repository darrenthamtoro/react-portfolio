import React, {useState} from 'react';

//Functional Components  - Pure Componenets 
// setHOOKS - helps you retain value or update values

function Portfolio() {
    const [projectList, setProject] = useState(["Pet-Hub", "Team-Profile Generator", "Readme-Generator", "Day Planner", "Note-Taker"]);
    return (
        <section id="work" className="page-section">
           <ul>Details Here: 

               <li><a href="">{projectList[0]}</a></li>
               <li>{projectList[1]}</li>
               <li>{projectList[2]}</li>
           {/* {projectList.map((project, index) =>{ */}
            
           {/* })} */}
           </ul>
        </section>
    )
}

export default Portfolio;