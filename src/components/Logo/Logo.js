import React from 'react';
import s from './Logo.module.css'
import burgerLogo from '../../assets/images/burger-logo.png'

const Logo = (props) => {
    return (
        <div className={s.Logo} style={{height: props.height}}>
            <img src={burgerLogo} alt="Burger Builder"/>
        </div>
    )
}

export default Logo