import React from "react";
import styles from "./about.module.css";


function About({ data }) {
    return (

        <>
            <div id={styles.introduction}>
                <h1>{data.name}</h1>
                <h3>{data.jobTitle}</h3>
                <p>{data.bio}</p>

                <div className={styles.buttonGroup}>
                    <button id={styles.aboutButton}>Contact Me</button>
                    <button id={styles.aboutButton}>My Work &#8594;</button>
                </div>
            </div>

        </>
    )
  }
  
export default About;