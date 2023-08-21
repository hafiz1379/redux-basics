import CartItem from './CartItem';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { clearCart } from '../features/card/cartSlice';

export default function CartContainer() {
  const { amount, cartItems, total } = useSelector((store) => store.cart);
  console.log('Amount', amount);
  const dispatch = useDispatch();

  return (
    <section className="cart">
      <header>
        <h2>Your bag</h2>
        {amount === 0 && <h4 className="empty-cart">is currently empty</h4>}
      </header>
      {amount === 0 || (
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
      )}
      {amount === 0 || (
        <footer>
          <hr />
          <div className="cart-total">
            <h4>
              Total: <span>{total.toFixed(2)}</span>
            </h4>
          </div>
          <button
            className="btn clear-btn"
            onClick={() => dispatch(clearCart())}
          >
            Clear cart
          </button>
        </footer>
      )}
    </section>
  );
}
