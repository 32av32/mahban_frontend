import './Products.css'
import ProductsItem from "./ProductsItem/ProductsItem";


const Products = (props) => {
    return (
        <div className={'Products'}>
            <div className={'Products__goods_container'}>
                { props.products.map(product => <ProductsItem
                    name={product.name}
                    price={product.price}
                    image={product.image}
                />)}
            </div>
        </div>
    )
}

export default Products;