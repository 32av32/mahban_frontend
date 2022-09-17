import React from "react";
import './ProductInformation.css'
import {HeartIco} from "../../icons/heart_ico";


const ProductInformation = (props) => {
    const {name, price, stock, features } = {...props};

    return (
        <div className={'Product-information'}>
            <p className={'Product-information__title'}>{name}</p>
            <p className={'Product-information__price'}>{price}</p>
            <div className={'Product-information__features'}>
                <ul>
                    {features.map(parameter => <li key={parameter}>{parameter}</li>)}
                </ul>
            </div>
            <div className={'Product-information__stock'}>
                Осталось: <span>{stock} на складе</span>
            </div>
            <div className={'Product-information-quantity'}>
                <div className={'Product-information__cart-plus-minus'}>
                    <button onClick={ () => props.changeProductForAdd('remove', props.productForAdd) }>-</button>
                    <input type='text' value={props.productForAdd} onChange={props.onProductForAddChanged}/>
                    <button onClick={ () => props.changeProductForAdd('add', props.productForAdd) }>+</button>
                </div>
                <button className={'orange-button'}>Добавить в корзину</button>
            </div>
            <div className={'Product-information__favorite orange-hover opacity7'}>
                <HeartIco />
                Добавить в избранное
            </div>
        </div>
    )
}

export default ProductInformation;