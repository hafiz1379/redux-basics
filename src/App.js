import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { calculateTotal } from './features/card/cartSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
