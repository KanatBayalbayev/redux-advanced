import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import StatusBarMessage from "./components/UI/StatusBarMessage";
import { sendCartData, getCartData } from "./store/cart-slice";

let isInitialState = true;

function App() {
  const isCartVisible = useSelector((state) => state.main.isCartVisible);
  const cart = useSelector((state) => state.cart);
  const statusMessage = useSelector((state) => state.main.statusMessage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartData());
  }, []);

  useEffect(() => {
    if (isInitialState) {
      isInitialState = false;
      return;
    }
    if (cart.isCartChanged) {
      dispatch(sendCartData(cart));
    }
  }, [cart]);
  return (
    <>
      {statusMessage && (
        <StatusBarMessage
          status={statusMessage.status}
          message={statusMessage.message}
          title={statusMessage.title}
        />
      )}
      <Layout>
        {isCartVisible && <Cart />}

        <Products />
      </Layout>
    </>
  );
}

export default App;
