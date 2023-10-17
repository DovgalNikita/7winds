import React, {FC} from "react";
import styles from "./HeaderMenu.module.scss";
import classNames from "classnames";

const HeaderMenu:FC = () => {
    return(
        <ul className={styles.menu}>
            <li className={classNames(styles.li,styles.active)}>Просмотр</li>
            <li className={styles.li}>Управление</li>
        </ul>
    );
};

export default HeaderMenu;