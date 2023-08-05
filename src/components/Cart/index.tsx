import React, {useEffect, useRef, useState} from "react";
import styles from "./index.module.scss";
import {IconChevron, IconClose, IconSeed} from "../icons";
import images, {ImagesKey} from "components/images";
import {useAppDispatch, useAppSelector} from "hooks/reduxHooks";
import {CalculatorSlideTypes} from "../Constructor/CalculatorSlide";
import {firstLetterCapitalize} from "utils";
import {deleteProduct} from "slices/cartSlice";
import {v4 as uuid} from "uuid";

const Cart = () => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);
    const slides = useAppSelector(state => state.calculator.slides);
    const products = useAppSelector(state => state.cart.products);
    const totalProducts = useAppSelector(state => state.cart.totalProducts);
    const totalPrice = useAppSelector(state => state.cart.totalPrice);
    const keysArray = Object.keys(slides) as CalculatorSlideTypes[];

    const dispatch = useAppDispatch();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpened(false);
            }
        };

        window.addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpened(!isOpened);
    };

    return (
        <div ref={ref}>
            <button
                onClick={toggleDropdown}
                className={[styles.details, isOpened ? styles.opened : "", "text-menu"].join(" ")}
            >
                details
                <IconChevron/>
            </button>

            {
                isOpened && <div className={[styles.cart, "text-small"].join(" ")}>
                    {
                        totalProducts !== 0
                            ? <>
                                <table className={styles.table}>
                                    <thead>
                                    <tr>
                                        <th style={{fontSize: 0}}>Icon</th>
                                        {
                                            keysArray.map(item => (
                                                <th key={uuid()}>
                                                    <img
                                                        src={images["Image" + firstLetterCapitalize(item) + "Small" as ImagesKey]}
                                                        alt={item}
                                                    />
                                                </th>
                                            ))
                                        }
                                        <th style={{fontSize: 0}}>Weight</th>
                                        <th style={{fontSize: 0}}>Price</th>
                                        <th style={{fontSize: 0}}>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        products.map(product => {
                                            const slidesKeys = Object.keys(product.slides) as CalculatorSlideTypes[];

                                            return <tr key={uuid()}>
                                                <td>
                                                    <span className={styles.icon}><IconSeed/></span>
                                                </td>
                                                {
                                                    slidesKeys.map(key => <td key={uuid()}>
                                                        <span className={styles.percent}>{product.slides[key]}%</span>
                                                    </td>)
                                                }
                                                <td style={{textAlign: "right"}}>{product.package.value} kg</td>
                                                <td style={{textAlign: "right"}}>{product.price}€</td>
                                                <td style={{
                                                    display: "flex",
                                                    justifyContent: "flex-end",
                                                }}>
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            dispatch(deleteProduct({id: product.id}));
                                                        }}
                                                        className={styles.delete}
                                                    >
                                                        delete
                                                        <IconClose/>
                                                    </button>
                                                </td>
                                            </tr>
                                        })
                                    }
                                    </tbody>
                                </table>

                                <div className={styles.bottom}>
                                    <span className={styles.total}>
                                        <span className="text-menu">total:</span>
                                        <span className="text-small">{totalPrice}€</span>
                                    </span>
                                    <a className="button button--small text-menu" href="/">checkout</a>
                                </div>
                            </>
                            : <p className={[styles.empty, "text-menu"].join(" ")}>Cart is Empty!</p>
                    }
                </div>
            }
        </div>
    );
};

export default Cart;