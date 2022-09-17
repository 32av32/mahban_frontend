import './ProductsItem.css'
import RatingArea from './RatingArea'
import {NavLink} from "react-router-dom";


const ProductsItem = (props) => {
    return (
        <div className={'Products__goods_container__item'}>
            <NavLink className={'orange-hover'} to={'/products/item'}>
                <img alt={'product'} src={props.image}/>
                <p className={'Products__goods_container__item__title font-weight5'}>{props.name}</p>
            </NavLink>
            <p className={'opacity7'}>{props.price}</p>
            <RatingArea />
            <button className={'orange-button'}>Добавить в корзину</button>
        </div>
    )
}

export default ProductsItem;