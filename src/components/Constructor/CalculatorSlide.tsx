import React, {ChangeEvent} from "react";
import styles from "./index.module.scss";
import {calculate} from "slices/calculatorSlice";
import {useAppDispatch, useAppSelector} from "hooks/reduxHooks";

type CalculatorSlideProps = {
    icon: string,
    type: CalculatorSlideTypes
    disabled?: boolean
}

export type CalculatorSlideTypes = "wheat" | "sesame" | "corn" | "soybean"

const CalculatorSlide = ({type, icon, disabled}: CalculatorSlideProps) => {
    const slides = useAppSelector(state => state.calculator.slides);
    const maxValue = useAppSelector(state => state.calculator.max);
    const dispatch = useAppDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(calculate({type, value: Number(e.target.value)}));
    };

    return (
        <div className={styles.slide}>
            <img className={styles.image} src={icon} alt={type}/>
            <input disabled={disabled} className={[styles.progress, styles[type]].join(" ")} onChange={handleChange} type="range" min="0" max={maxValue} value={slides[type]} step="1"/>
            <span className={[styles.percent, "title3"].join(" ")}>{slides[type]}%</span>
        </div>
    );
};

export default CalculatorSlide;