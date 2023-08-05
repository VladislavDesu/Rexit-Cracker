import React from "react";
import styles from "./index.module.scss";
import {IconAddress, IconFacebook, IconInstagram, IconPhone, IconPinterest, IconShare} from "../icons";
import Socials, {SocialType} from "./Socials";

const socials: SocialType[] = [
    {
        icon: IconPhone,
        title: "phone",
        links: [
            {
                info: {text: "+48 (987) 345 - 6789"},
                href: "tel:+48 (987) 345 - 6789"
            }
        ]
    },
    {
        icon: IconAddress,
        title: "address",
        links: [
            {
                info: {textSeparate: ["Cracker Inc.", "10 Cloverfield Lane", "Berlin IL 10928, Germany"]},
                href: "https://goo.gl/maps/MiZ7WmZh5pe7mFAP6"
            }
        ]
    },
    {
        icon: IconShare,
        title: "share",
        links: [
            {
                icon: IconPinterest,
                info: {text: "pinterest.com"},
                href: "https://www.pinterest.com/"
            },
            {
                icon: IconFacebook,
                info: {text: "facebook.com"},
                href: "https://www.facebook.com/"
            },
            {
                icon: IconInstagram,
                info: {text: "instagram.com"},
                href: "https://www.instagram.com/"
            }
        ]
    }
];

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <Socials socials={socials}/>
            </div>
        </footer>
    );
};

export default Footer;

