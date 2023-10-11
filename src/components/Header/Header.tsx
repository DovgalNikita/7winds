import React, {FC} from "react";
import styles from "./Header.module.scss";
import BackIcon from "../../assets/SVGs/BackIcon";
import MenuIcon from "../../assets/SVGs/MenuIcon";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

const Header:FC = () => {
    return(
        <header className={styles.header}>
            <div className={styles.content}>
                <div className={styles.hotButtons}>
                    <div className={styles.iconButton}><MenuIcon color="#A1A1AA"/></div>
                    <div className={styles.iconButton}><BackIcon color="#A1A1AA"/></div>
                </div>
                <HeaderMenu />
            </div>
        </header>
    );
};

export default Header;