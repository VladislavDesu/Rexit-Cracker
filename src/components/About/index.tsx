import React from "react";
import styles from "./index.module.scss";
import images from "components/images";
import {IconLogo} from "../icons";
import Constructor from "../Constructor";

const {ImageCracker} = images;

const About = () => {
    return (
        <div className={styles.about}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.top}>
                        <img src={ImageCracker} alt="Cracker"/>

                        <div className={styles.block}>
                            <h2 className="title2">about cracker</h2>

                            <div className={styles.info}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit.
                                </p>
                                <IconLogo/>
                            </div>
                        </div>
                    </div>

                    <Constructor/>
                </div>
            </div>
        </div>
    );
};

export default About;