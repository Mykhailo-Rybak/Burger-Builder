import React from "react";
import s from './Burger.module.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";


const Burger = (props) => {
    let transformIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey}/>
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, [])
    if (transformIngredients.length === 0) {
        transformIngredients = <p>Peale start adding ingredients!</p>
    }
    return (
        <div className={s.Burger}>
            <BurgerIngredient type='bread-top'/>
            {transformIngredients}
            <BurgerIngredient type='bread-bottom'/>


        </div>
    )
}

export default Burger