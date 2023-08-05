import React from "react";
import styles from "./index.module.scss";
import Calculator from "./Calculator";
import {useAppSelector} from "hooks/reduxHooks";

const Constructor = () => {
    const currentValue = useAppSelector(state => state.calculator.currentPrice);

    return (
        <div className={styles.constructor}>
            <div className={styles.top}>
                <h2 className="title2">cracker constructor</h2>
                <p className={[styles.current, "title3"].join(" ")}>
                    <span>Current Value:</span>
                    <span>{currentValue}€</span>
                </p>
            </div>

            <Calculator/>
        </div>
    );
};

export default Constructor;