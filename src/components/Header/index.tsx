import React, {useState} from "react";
import {IconLogo, IconSeed} from "components/icons";
import styles from "./index.module.scss";
import {useAppSelector} from "hooks/reduxHooks";
import Cart from "../Cart";

const Header = () => {
    const [isOpened, setIsOpened] = useState(false);

    const cart = useAppSelector(state => state.cart);

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.wrapper}>
                    <a className={styles.logo} href="/">
                        <IconLogo/>
                    </a>

                    <div className={[styles.list, "text-menu"].join(" ")}>
                        <div className={styles.cart}>
                            <IconSeed/>
                            {
                                cart.totalProducts !== 0 && <span className={styles.counter}>
                                    {cart.totalProducts >= 100 ? `99` : cart.totalProducts}
                                </span>
                            }
                        </div>

                        <div className={styles.total}>
                            <span>total:</span>
                            <span>{cart.totalPrice}€</span>
                        </div>

                        <Cart/>

                        <button
                            onClick={() => setIsOpened(!isOpened)}
                            className={[styles.buttonMenu, isOpened ? styles.opened : ""].join(" ")}
                        >
                            menu
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>

                <div className={[styles.navigation, isOpened ? styles.opened : "", "text-menu"].join(" ")}>
                    <div className="container">
                        <nav>
                            <a className={styles.active} href="/">home</a>
                            <a href="/">about us</a>
                            <a href="/">contacts us</a>
                            <a href="/">checkout</a>
                            <a href="/">account</a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;