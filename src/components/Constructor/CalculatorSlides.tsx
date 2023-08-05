import React from "react";
import {firstLetterCapitalize} from "utils";
import images, {ImagesKey} from "../images";
import CalculatorSlide, {CalculatorSlideTypes} from "./CalculatorSlide";
import {useAppSelector} from "hooks/reduxHooks";

const CalculatorSlides = () => {
    const slides = useAppSelector(state => state.calculator.slides);
    const slideDisabled = useAppSelector(state => state.calculator.disabled);
    const keysArray = Object.keys(slides) as CalculatorSlideTypes[];

    return (
        <>
            {
                keysArray.map((slide, index) => (
                    <CalculatorSlide
                        key={index}
                        icon={images["Image" + firstLetterCapitalize(slide) as ImagesKey]}
                        disabled={slide === slideDisabled}
                        type={slide}
                    />
                ))
            }
        </>
    );
};

export default CalculatorSlides;