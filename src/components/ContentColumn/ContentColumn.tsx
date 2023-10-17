import React, {FC} from "react";
import styles from "./ContentColumn.module.scss";
import ContentColumnItem from "../ContentColumnItem/ContentColumnItem";
// import ConnectElements from "react-connect-elements";

const ContentColumn: FC = () => {
    return(
        <div className={styles.block}>

            <div className={styles.titleBlock}>
                <div className={styles.title}>Строительно-монтажные работы</div>
            </div>
            <div id="#elements" className={styles.content}>

                <div className={styles.tableHead}>
                    <div className={styles.level}><p>Уровень</p></div>
                    <div className={styles.rowName}><p>Наименование работ</p></div>
                    <div className={styles.salary}><p>Основная з/п</p></div>
                    <div className={styles.equipmentCosts}><p>Оборудование</p></div>
                    <div className={styles.overheads}><p>Накладные расходы</p></div>
                    <div className={styles.estimatedProfit}><p>Сметная прибыль</p></div>
                </div>


                <ContentColumnItem selector="element1" rowName="Южная площадка" salary={20348} equipmentCosts={1750} overheads={108.07} estimatedProfit={1209122.5}/>
                <ContentColumnItem selector="element2" rowName="Южная площадка" salary={20348} equipmentCosts={1750} overheads={108.07} estimatedProfit={1209122.5}/>

                

                {/* <ConnectElements 
                    color="red"
                    selector="#elements"
                    elements={[
                        {from:".element1", to:".element2"}
                    ]}
                /> */}
            </div>
        </div>
    );
};

export default ContentColumn;