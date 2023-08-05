import styles from "./index.module.scss";
import React from "react";
import { v4 as uuid } from "uuid";

export type LinkType = {
    info: {
        text?: string
        textSeparate?: string[]
    }
    href: string
    icon?: React.ComponentType
}

const Links = ({links}: { links: LinkType[] }) => {
    return (
        <div className={styles.links}>
            {
                links.map(link => {
                    const Icon = link.icon;
                    const text = link.info.text;
                    const textSeparate = link.info.textSeparate;

                    return (
                        <a key={uuid()} target="_blank" rel="noreferrer" href={link.href}>
                            {
                                Icon ? <span className={styles.icon}><Icon/></span> : null
                            }

                            {text}

                            {
                                textSeparate
                                    ? <span className={styles.separate}>
                                        {textSeparate.map(text => <span key={uuid()}>{text}</span>)}
                                    </span>
                                    : null
                            }
                        </a>
                    )
                })
            }
        </div>
    );
};

export default Links;