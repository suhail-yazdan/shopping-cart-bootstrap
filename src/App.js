import { useState } from 'react';
import './App.css';
import Card from "./components/Card";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([
    {
      pid: 1,
      name: "Strawberry Shake",
      desc: "Finest Strawberries, Milk, Sugar",
      price: 149,
      quantity: 0
    },
    {
      pid: 2,
      name: "Chocolate Fantasy",
      desc: "Brownie with chocolate sauce topped with Vanilla Ice cream",
      price: 249,
      quantity: 0
    },
    {
      pid: 3,
      name: "Mediterranean Delight",
      desc: "Nuts and Dates from the soils of Algeria",
      price: 329,
      quantity: 0
    }
  ])

  const handleQuantityIncreased = (prod, e) =>{
    e.stopPropagation();
    let sProducts = [...products];
    const ind = sProducts.indexOf(prod);
    if(sProducts[ind].quantity >= 0 && sProducts[ind].quantity < 10 ) sProducts[ind].quantity++;
    setProducts(sProducts)
  }

  const handleQuantityDecreased = (prod, e) =>{
    e.stopPropagation();
    let sProducts = [...products];
    const ind = sProducts.indexOf(prod);
    if(sProducts[ind].quantity > 0) sProducts[ind].quantity--;
    setProducts(sProducts)
  }
  

  return (
    <div className='main-container'>
      <header className='header' style={{"marginTop": "40px"}}>
        <div className='container d-flex justify-content-end align-items-center'>
            <Cart selectedProducts={products} />
        </div>
      </header>

      <main>
        <div className="container">
          <div className='row'>
            <div className='col-8 offset-2'>
              {products.map((product) => (
                <Card
                  key = {product.pid}
                  productDetail = {product}
                  onQuantityIncreased = {e => handleQuantityIncreased(product, e)}
                  onQuantityDecreased = {e => handleQuantityDecreased(product, e)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
