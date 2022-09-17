import {connect} from 'react-redux';

import Products from "./Products";
import {getProducts} from "../store/selectors/products_selector";


const ProductsContainer = (props) => {
    return <Products { ...props } />
}

const stateToProps = (state) => ({
    products: getProducts(state),
})

export default connect(stateToProps)(ProductsContainer);