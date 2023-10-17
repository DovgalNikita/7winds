import React,{ FC, useState } from "react";
import styles from "./ContentColumnItem.module.scss";
import Document from "../../assets/SVGs/Document";
import TrashFill from "../../assets/SVGs/TrashFill";

const ContentColumnItem: FC<IContentColumnItem> = ({
    selector,
    rowName, 
    salary, 
    equipmentCosts, 
    overheads, 
    estimatedProfit
}) => {

    const [visibleTrash, isVisibleTrash] = useState(false);

    return(
        <div className={styles.block}>
            <div className={styles.level}>
                <div className={styles.block}>
                    <div className={styles.content} onMouseEnter={()=>isVisibleTrash(true)} onMouseLeave={()=>isVisibleTrash(false)}>
                        <div className={selector}><Document color=""/></div>
                        {visibleTrash?<div><TrashFill color=""/></div>:null}
                    </div>
                </div>
            </div>
            <div className={styles.rowName}><p>{rowName}</p></div>
            <div className={styles.salary}><p>{salary.toLocaleString()}</p></div>
            <div className={styles.equipmentCosts}><p>{equipmentCosts.toLocaleString()}</p></div>
            <div className={styles.overheads}><p>{overheads.toLocaleString()}</p></div>
            <div className={styles.estimatedProfit}><p>{estimatedProfit.toLocaleString()}</p></div>
        </div>
    );
};

export default ContentColumnItem;