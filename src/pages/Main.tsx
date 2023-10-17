import React, {FC} from "react";
import styles from "./main.module.scss";
import Header from "../components/Header/Header";
import MenuColomn from "../components/MenuColomn/MenuColomn";
import ContentColumn from "../components/ContentColumn/ContentColumn";

const Main: FC = () => {
    return(
        <div className={styles.mainPage}>
            <Header />
            <div className={styles.content}>
                <MenuColomn />
                <ContentColumn />
            </div>
        </div>
    );
};

export default Main;
