import './Product.css'
import ProductInformation from "./ProductInformation";
import ProductDescription from "./ProductDescription";


const Product = (props) => {
    return (
        <div className={'Product'}>
            <div className={'Product__container'}>
                <ul className={'Product__images'}>
                    {
                        props.images.map(image => <li key={image}><button onClick={() => props.setDisplayedImage(image)}><img alt={'little-img'} src={image} /></button></li>)
                    }
                </ul>
                <div className={'Product__main-image'}>
                    <img alt={'big-img'} src={props.displayedImage}/>
                </div>
                <ProductInformation
                    name={props.name}
                    price={props.price}
                    features={props.features}
                    stock={props.stock}
                    isFavorite={props.isFavorite}

                    productForAdd={props.productForAdd}
                    changeProductForAdd={props.changeProductForAdd}
                    onProductForAddChanged={props.onProductForAddChanged}
                />
            </div>
            <ProductDescription />
        </div>
    )
}

export default Product;