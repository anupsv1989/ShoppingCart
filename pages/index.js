import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../redux/rootSaga";
import rootReducer from "../redux/rootReducer";
import CartPage from "./list";
import { Provider } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

export default function basePage() {
  return (
    <Provider store={store}>
      <Header />

      <Layout>
        <CartPage />
      </Layout>
      <Footer />
    </Provider>
  )
}
