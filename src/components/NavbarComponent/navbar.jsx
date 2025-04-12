import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
    return (
        <>
            <div id={styles.navbarContainer}>
                <ul id={styles.navbarList}>
                    <li> <a href="" id={styles.navbarLinks}>Home</a> </li>
                    <li> <a href="" id={styles.navbarLinks}>Experience</a> </li>
                    <li> <a href="" id={styles.navbarLinks}>Projects</a> </li>
                    <li> <a href="" id={styles.navbarLinks}>Tech Stack</a> </li>
                </ul>
            </div>
        </>
    )

}
    

export default Navbar;
