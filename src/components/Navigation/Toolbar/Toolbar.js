import React from 'react';
import s from './Toolbar.module.css'
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = (props) => {
    return (
        <header className={s.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked}/>
            <div className={s.Logo}>
                <Logo />
            </div>

            <nav className={s.DesktopOnly}>
                <NavigationItems/>
            </nav>
        </header>
    )
}

export default Toolbar