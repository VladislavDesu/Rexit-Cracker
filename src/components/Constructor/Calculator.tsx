import React from "react";
import styles from "./index.module.scss";
import images from "../images";
import Dropdown from "../Dropdown";
import {IconPlus} from "../icons";
import CalculatorSlides from "./CalculatorSlides";
import {useAppDispatch, useAppSelector} from "hooks/reduxHooks";
import {reset} from "slices/calculatorSlice";
import {addToCart} from "slices/cartSlice";
import {v4 as uuid} from "uuid";

const {ImagePackage} = images;

const Calculator = () => {
    const currentPackage = useAppSelector(state => state.calculator.package);
    const calculatorSlides = useAppSelector(state => state.calculator.slides);
    const currentPrice = useAppSelector(state => state.calculator.currentPrice);
    const dispatch = useAppDispatch();

    const handleAddToCart = () => {
        if (currentPackage) {
            const product = {
                id: uuid(),
                slides: calculatorSlides,
                package: currentPackage,
                price: currentPrice,
            };

            dispatch(addToCart(product));
            dispatch(reset());
        }
    };

    return (
        <div className={styles.calculator}>
            <CalculatorSlides/>

            <div className={styles.package}>
                <img className={styles.image} src={ImagePackage} alt="package"/>

                <Dropdown/>

                <button onClick={handleAddToCart} disabled={!currentPackage} className={[styles.buttonCart, "text-button"].join(" ")}>
                    <span>add to cart</span>
                    <IconPlus/>
                </button>
            </div>
        </div>
    );
};

export default Calculator;