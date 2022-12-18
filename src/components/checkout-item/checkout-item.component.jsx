import './checkout-item.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import {
  deleteItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from '../../store/cart/cart.action';

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);

  const clearItem = () => dispatch(deleteItemFromCart(cartItems, cartItem));
  const incrementItem = () => dispatch(addItemToCart(cartItems, cartItem));
  const decrementItem = () => dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decrementItem}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={incrementItem}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
