import React from "react";
import {connect} from 'react-redux';
import Product from "./Product";
import {getProduct} from "../store/selectors/product_selector";


const ProductContainer = props => {
    const [productForAdd, setProductForAdd] = React.useState(1);
    const [displayedImage, setDisplayedImage] = React.useState(props.product.images[0]);

    const changeProductForAdd = (operation, value) => {
        switch (operation){
            case 'add':
                if (productForAdd <= props.product.stock)
                    setProductForAdd(val => val += 1)
                break;
            case 'remove':
                if (productForAdd > 1)
                    setProductForAdd(val => val -= 1)
                break;
            default:
                console.log('use add or remove operation')
        }
    }

    const onProductForAddChanged = (e) => {
        setProductForAdd(e.target.value)
    }


    return <Product productForAdd={productForAdd}
                    changeProductForAdd={changeProductForAdd}
                    onProductForAddChanged={onProductForAddChanged}
                    displayedImage={displayedImage}
                    setDisplayedImage={setDisplayedImage}
                    { ...props.product } />
}

const stateToProps = state => ({
    product: getProduct(state),
})

export default connect(stateToProps)(ProductContainer);