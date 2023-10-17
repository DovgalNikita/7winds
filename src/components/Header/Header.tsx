import React, {FC, useState} from "react";
import styles from "./Header.module.scss";
import BackIcon from "../../assets/SVGs/BackIcon";
import MenuIcon from "../../assets/SVGs/MenuIcon";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

const Header:FC = () => {

    const [iMenu,setIMenu] = useState<boolean>(false);
    const [iBack,setIBack] = useState<boolean>(false);

    return(
        <header className={styles.header}>
            <div className={styles.content}>
                <div className={styles.hotButtons}>
                    {iMenu
                        ?<div className={styles.iconButton} onMouseOver={()=>setIMenu(true)} onMouseLeave={()=>setIMenu(false)}><MenuIcon color="#FFFFFF"/></div>
                        :<div className={styles.iconButton} onMouseOver={()=>setIMenu(true)} onMouseLeave={()=>setIMenu(false)}><MenuIcon color="#A1A1AA"/></div>
                    }
                    {iBack
                        ?<div className={styles.iconButton} onMouseOver={()=>setIBack(true)} onMouseLeave={()=>setIBack(false)}><BackIcon color="#FFFFFF"/></div>
                        :<div className={styles.iconButton} onMouseOver={()=>setIBack(true)} onMouseLeave={()=>setIBack(false)}><BackIcon color="#A1A1AA"/></div>
                    }
                    
                </div>
                <HeaderMenu />
            </div>
        </header>
    );
};

export default Header;