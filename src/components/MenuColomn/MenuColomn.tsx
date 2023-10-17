import React, {FC} from "react";
import styles from "./MenuColomn.module.scss";
import MenuColumnSwitcher from "../MenuColumnSwitcher/MenuColumnSwitcher";
import MenuColumnItem from "../MenuColumnItem/MenuColumnItem";

const data = [
    {title:"По проекту"},
    {title:"Объекты"},
    {title:"РД"},
    {title:"МТО"},
    {title:"СМР",isActivated:true},
    {title:"График"},
    {title:"МиМ"},
    {title:"Рабочие"},
    {title:"Капвложения"},
    {title:"Бюджет"},
    {title:"Финансирование"},
    {title:"Панорамы"},
    {title:"Камеры"},
    {title:"Поручения"},
    {title:"Контрагент"}
];

const MenuColomn: FC = () => {
    return(
        <div className={styles.block}>
            <MenuColumnSwitcher />
            {
                data.map(({title,isActivated})=><MenuColumnItem key={title} title={title} isActivated={isActivated}/>)
            }
        </div>
    );
}

export default MenuColomn;