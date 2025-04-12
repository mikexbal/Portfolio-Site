import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
    return (
        <>
            <section id={styles.navbarSection}>
                <div id={styles.navbarContainer}>
                    <ul id={styles.navbarList}>
                        <li> <a href="#about" id={styles.navbarLinks}>About</a> </li>
                        <li> <a href="#experience" id={styles.navbarLinks}>Experience</a> </li>
                        <li> <a href="#projects" id={styles.navbarLinks}>Projects</a> </li>
                        <li> <a href="#tech" id={styles.navbarLinks}>Tech Stack</a> </li>
                    </ul>
                </div>
            </section>
        </>
    )

}
    

export default Navbar;
