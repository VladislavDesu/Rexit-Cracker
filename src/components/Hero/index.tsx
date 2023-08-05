import React from "react";
import styles from "./index.module.scss";

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.info}>
                        <div className={styles.block}>
                            <h1 className={["title1", styles.title].join(" ")}>mostly tastes with freshes</h1>
                            <p className={styles.text}>
                                Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation.
                            </p>
                        </div>
                    </div>

                    <a className={[styles.link, "button"].join(" ")} href="/">taste it</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;