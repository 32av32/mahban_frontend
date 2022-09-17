import {NavLink} from "react-router-dom";
import './NavCategoryDropbox.css'

const NavCategoryDropbox = () => {
    return (
        <div className={'Nav__category__dropbox'}>
            <NavLink className={'orange-hover'} to={'/categories/all_categories'}>Все категории</NavLink>
            <NavLink className={'orange-hover'} to={'/categories/drinks'}>Напитки</NavLink>
            <NavLink className={'orange-hover'} to={'/categories/candies'}>Сладости</NavLink>
            <NavLink className={'orange-hover'} to={'/categories/ice_creams'}>Мороженное</NavLink>
        </div>
    )
}

export default NavCategoryDropbox;