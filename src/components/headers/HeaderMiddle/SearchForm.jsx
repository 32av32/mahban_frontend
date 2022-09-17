import './SearchForm.css'
import {SearchIco} from "../../../icons/search_ico";
import {DropDownIco} from "../../../icons/dropdown_ico";


const SearchForm = () => {
    return (
        <div>
            <form action={'get'} className={'HeaderMiddle__search-form'}>
                <div className={'HeaderMiddle__search-form__category'}>
                    <div className={'HeaderMiddle__search-form__category__dropdown'}>
                        <span>Все категории</span>
                        <DropDownIco/>
                    </div>
                    <div className={'HeaderMiddle__search-form__category__dropbox'}>
                        <span className={'orange-hover'}>Все категории</span>
                        <span className={'orange-hover'}>Напитки</span>
                        <span className={'orange-hover'}>Сладости</span>
                        <span className={'orange-hover'}>Мороженное</span>
                    </div>
                </div>
                <input className={'HeaderMiddle__search-form__textfield'} type={'text'} placeholder={'Search'}/>
                <button type={'submit'} className={'HeaderMiddle__search-form__submit'}>
                    <SearchIco/>
                </button>
            </form>
        </div>
    )
}

export default SearchForm;