import React, {FC} from "react";
import styles from "./MenuColumnItem.module.scss";
import MenuColumnIcon from "../../assets/SVGs/MenuColumnIcon";
import classNames from "classnames";

const MenuColumnItem: FC<MenuColumnItem> = ({title, isActivated}) => {
    return(
        <div className={isActivated?classNames(styles.block,styles.active):styles.block}>
            <div className={styles.content}>
                <div className={styles.icon}><MenuColumnIcon color=""/></div>
                <div className={styles.title}>{title}</div>
            </div>
        </div>
    );
};

export default MenuColumnItem;