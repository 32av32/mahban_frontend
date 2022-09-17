import './UserBlock.css'
import {Goods} from "../../../icons/goods";
import {Cart} from "../../../icons/cart";
import {UserProfile} from "../../../icons/user_profile";
import {NavLink} from "react-router-dom";


const UserBlock = () => {
    return (
        <div className={'HeaderMiddle__user-block '}>
            <NavLink className={'HeaderMiddle__user-block-item  orange-hover'} to={'/account'}>
                <UserProfile />
                <div className={'HeaderMiddle__user-block-item-text'}>
                    <p className={'opacity7'}>Войти</p>
                    <p className={'font-weight5'}>Аккаунт</p>
                </div>
            </NavLink>
            <NavLink className={'HeaderMiddle__user-block-item orange-hover'} to={'/favorite'}>
                <Goods />
                <div className={'HeaderMiddle__user-block-item-text'}>
                    <p className={'opacity7'}>Избранное</p>
                    <p className={'font-weight5'}>Список желаний</p>
                </div>
            </NavLink>
            <NavLink className={'HeaderMiddle__user-block-item orange-hover'} to={'/cart'}>
                <Cart />
                <div className={'HeaderMiddle__user-block-item-text'}>
                    <p className={'opacity7'}>Корзина:</p>
                    <p className={'font-weight5'}>$0.00</p>
                </div>
            </NavLink>
        </div>
    )
}

export default UserBlock;