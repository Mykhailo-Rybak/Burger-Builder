import React from 'react';
import s from './SideDrawer.module.css'
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = (props) => {

    let attachedClasses = [s.SideDrawer, s.Close]
    if (props.open) {
        attachedClasses = [s.SideDrawer, s.Open]
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={s.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    )
}

export default SideDrawer