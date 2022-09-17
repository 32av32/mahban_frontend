import './HeaderMiddle.css'
import SearchForm from "./SearchForm";
import UserBlock from "./UserBlock";
import {NavLink} from "react-router-dom";


const HeaderMiddle = () => {
    return (
        <div className={'HeaderMiddle'}>
            <div>
                <NavLink to={'/'}>
                    <img src={'main_logo_ico.png'} alt={'logo'}/>
                </NavLink>
            </div>
            <SearchForm />
            <UserBlock />
        </div>
    )
}

export default HeaderMiddle;