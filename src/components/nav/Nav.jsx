import './Nav.css'
import {NavLink} from "react-router-dom";

import NavCategory from "./NavCategory/NavCategory";


const Nav = () => {
    return (
        <nav className={'Nav'}>
            <NavCategory />
            <hr className={'thin-hr'}/>
            <ul className={'Nav__container'}>
                <li>
                    <NavLink className={'font-weight5 white-link orange-hover'} to={'/products'}>Товары</NavLink>
                </li>
                <li>
                    <NavLink className={'font-weight5 white-link orange-hover'} to={'/company'}>Компании</NavLink>
                </li>
                <li>
                    <NavLink className={'font-weight5 white-link orange-hover'} to={'/profile'}>Профиль</NavLink>
                </li>
                <li>
                    <NavLink className={'font-weight5 white-link orange-hover'} to={'/about_us'}>О нас</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;