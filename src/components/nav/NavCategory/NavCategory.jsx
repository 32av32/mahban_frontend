import './NavCategory.css'

import {MenuIcon} from '../../../icons/menu_icon'
import NavCategoryDropbox from "./NavCategoryDropbox";


const NavCategory = () => {
    return (
        <div className={'Nav__category'}>
            <button className={'Nav__category__button font-weight5'}>
                <MenuIcon/>
                Категории
            </button>

            <NavCategoryDropbox/>
        </div>
    )
}

export default NavCategory;