import React, {useEffect, useRef, useState} from "react";
import {IconChevron} from "../icons";
import styles from "./index.module.scss";
import {useAppDispatch, useAppSelector} from "hooks/reduxHooks";
import {setPackage} from "slices/calculatorSlice";
import {v4 as uuid} from "uuid";

const Dropdown = () => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const ref = useRef<HTMLButtonElement>(null);
    const packages = useAppSelector(state => state.packages);
    const currentPackage = useAppSelector(state => state.calculator.package);
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
        <div className={[styles.dropdown, isOpened ? styles.opened : ""].join(" ")}>
            <button ref={ref} onClick={toggleDropdown} className={styles.button}>
                {currentPackage ? currentPackage.label : "choose your pack"}
                <IconChevron/>
            </button>

            {
                isOpened && <ul className={[styles.list, isOpened ? styles.opened : ""].join(" ")}>
                    {
                        packages.list.map(item =>
                            <li key={uuid()}>
                                <button
                                    onClick={() => {
                                        dispatch(setPackage(item));
                                    }}
                                    className={[styles.opt, "text-menu"].join(" ")}
                                >{item.label}</button>
                            </li>
                        )
                    }
                </ul>
            }
        </div>
    );
};

export default Dropdown;