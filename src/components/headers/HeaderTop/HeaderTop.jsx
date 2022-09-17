import './HeaderTop.css'
import {NavLink} from "react-router-dom";


const HeaderTop = () => {
    return (
        <div className={'HeaderTop'}>
            <NavLink className={'HeaderTop__link white-link orange-hover'} to={'/contacts'}>Контакты</NavLink>
            <hr className={'thin-hr'} />
            <NavLink className={'HeaderTop__link white-link orange-hover'} to={'/help'}>Помощь</NavLink>
        </div>
    )
}

export default HeaderTop;