import React from "react";
import PropsTypes from 'prop-types'

import s from './BurgerIngredient.module.css'


class BurgerIngredient extends React.Component {
    render() {
        let ingredient = null;
        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={s.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={s.BreadTop}>
                        <div className={s.Seeds1}></div>
                        <div className={s.Seeds2}></div>
                    </div>
                );
                break;
            case ('meat'):
                ingredient = <div className={s.Meat}></div>;
                break;
            case ('cheese'):
                ingredient = <div className={s.Cheese}></div>;
                break;
            case ('salad'):
                ingredient = <div className={s.Salad}></div>;
                break;
            case ('bacon'):
                ingredient = <div className={s.Bacon}></div>;
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropsTypes.string.isRequired
}

export default BurgerIngredient