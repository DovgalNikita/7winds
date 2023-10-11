import React, {FC} from "react";
import styles from "./main.module.scss";
import Header from "../components/Header/Header";

const Main: FC = () => {
    return(
        <div className={styles.mainPage}>
            <Header />
        </div>
    );
};

export default Main;
