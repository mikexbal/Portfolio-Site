import React from "react";
import styles from './projects.module.css';

function Projects({ data }){
    return (
        <>
            <section id={styles.projectsSection}>
                <h1 className="sectionHeader">Projects.</h1>

                <div id={styles.projectsContainer}>

                    {data.map((item, index) => (
                        <div key={index} id={styles.projectCard}>
                            <h1 id={styles.projectTitle}>{item.name}</h1>
                            <p id={styles.projectDescription}>{item.description}</p>

                            <ul id={styles.projectTechnologies}> 
                                {item.technologies.map((tech, i) => (
                                    <li id={styles.technologyItem} key={i}>{tech}</li>
                                ))}
                            </ul>
                            <div className={styles.buttonGroup}>
                                <button id={styles.aboutButton}>Live Demo</button>
                                <button id={styles.aboutButton}>GitHub</button>
                            </div>
                        </div>
                    ))}


                </div>




            
        
            </section>
        </>
    )
}

export default Projects;