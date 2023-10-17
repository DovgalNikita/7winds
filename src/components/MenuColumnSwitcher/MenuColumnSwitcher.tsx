import React, {FC} from "react";
import styles from "./MenuColumnSwitcher.module.scss";
import ArrowDown from "../../assets/SVGs/ArrowDown";

const MenuColumnSwitcher: FC = () => {
    return(
        <div className={styles.block}>
            <div className={styles.textBlock}>
                <div className={styles.title}>Название проекта</div>
                <div className={styles.abbr}>Аббревиатура</div>
            </div>
            <div className={styles.switchButton}><ArrowDown color=""/></div>
        </div>
    );
};

export default MenuColumnSwitcher;