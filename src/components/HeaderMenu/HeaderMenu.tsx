import React, {FC} from "react";
import styles from "./HeaderMenu.module.scss";

const HeaderMenu:FC = () => {
    return(
        <ul className={styles.menu}>
            <li className={styles.li}>Просмотр</li>
            <li className={styles.li}>Управление</li>
        </ul>
    );
};

export default HeaderMenu;