import { Route } from 'react-router-dom';
import Home from "./home/Home";
import Login from "./login/Login";
import SignUp from "./signup/SignUp";
import CustomerService from './customer-service/CustomerServices'
import Seemore from './seemore/Seemore';
import Products from './products/Products';
import ProductInfo from './product-info/ProductInfo';

const Routes = () => {
  return (
    <>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/login">
          <Login/>
      </Route>
      <Route path="/signup">
          <SignUp/>
      </Route>
      <Route path="/customer-service">
        <CustomerService />
      </Route>
      <Route exact path="/seemore">
        <Seemore />
      </Route>
      <Route exact path="/seemore/products">
        <Products />
      </Route>
      <Route path="/seemore/products/:productId">
        <ProductInfo />
      </Route>
    </>
  )
}

export default Routes