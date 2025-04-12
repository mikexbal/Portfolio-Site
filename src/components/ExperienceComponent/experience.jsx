import React from "react";
import styles from "./experience.module.css";

function Experience({ data }) {
    return (
        <>
        <section id={styles.experienceSection}>
            <h1 className="sectionHeader">Experience.</h1>
                
                {data.map((item, index) => (
                    <div key={index} id={styles.experienceCard}>
                        <div id={styles.experienceHeader}>
                            <h1>{item.company}</h1>
                            <p id={styles.experienceDate}>{item.date}</p>
                        </div>

                        <h3 id={styles.experienceRole}>{item.role}</h3>
                        <h5 id={styles.experienceResponsibilities}>Responsibilities: </h5>

                        <ul>
                            {item.responsibilities.map((res, i) => (
                                <li id={styles.listItem} key={i}>{res}</li>
                            ))}
                        </ul>
                    </div>


                ))}
            </section>
        </>
    );
}

export default Experience;
