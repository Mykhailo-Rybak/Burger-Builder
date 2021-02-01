import React from "react";
import s from './DrawerToggle.module.css'

const DrawerToggle = (props) => {
    return (
        <div onClick={props.clicked} className={s.DrawerToggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default DrawerToggle