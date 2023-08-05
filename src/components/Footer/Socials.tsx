import styles from "./index.module.scss";
import React from "react";
import Links, {LinkType} from "./Links";
import { v4 as uuid } from "uuid";

export type SocialType = {
    icon: React.ComponentType
    title: string
    links: LinkType[]
}

const Socials = ({socials}: { socials: SocialType[] }) => {
    return (
        <ul className={styles.list}>
            {
                socials.map(item => {
                    const Icon = item.icon;

                    return (
                        <li key={uuid()}>
                            <Icon/>

                            <div className={styles.block}>
                                <h3 className="text-menu">{item.title}</h3>

                                <Links links={item.links}/>
                            </div>
                        </li>
                    )
                })

            }
        </ul>
    );
};

export default Socials;