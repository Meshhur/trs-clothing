import { useDispatch } from 'react-redux';
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button'

import "./ProductCard.scss"
import { addItemToCart } from '../../store/cart/cart.reducer';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch()
    const { name, price, imageUrl } = product;

    const addProductToCart = () => {
        return dispatch(addItemToCart(product))
    }

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button
                buttonType={BUTTON_TYPE_CLASSES.inverted}
                onClick={addProductToCart}
            >
                Add to card
            </Button>
        </div>
    )
}

export default ProductCard