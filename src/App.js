import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

import Nav from './components/nav/Nav'
import ProductsContainer from './components/products/ProductsContainer'
import HeaderTop from "./components/headers/HeaderTop/HeaderTop";
import HeaderMiddle from "./components/headers/HeaderMiddle/HeaderMiddle";
// import Product from "./components/product/Product";
import ProductContainer from "./components/product/ProductContainer";


function App() {
  return (
      <Router>
          <div className={'App-container'}>
              <HeaderTop />
              <HeaderMiddle />
              <Nav />
              <Routes>
                  <Route exact path='/products' element={<ProductsContainer />} />
              </Routes>
              <Routes>
                  <Route exact path='/products/item' element={<ProductContainer />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
