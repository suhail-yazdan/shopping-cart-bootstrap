import { useState } from "react"
import "./styles/addProducts.css"

const AddProducts = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with the form data, such as sending it to an API
    console.log('Product Name:', productName);
    console.log('Product Description:', productDescription);
    console.log('Product Price:', productPrice);
    // Reset the form fields if needed
    setProductName('');
    setProductDescription('');
    setProductPrice('');
  };

  return (
    <div className="add-products-container">
      <div className="input-card">
        <div className="card_title">
          <h1>Add a Product</h1>
        </div>

        <div className="form">
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              value={productName} 
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Product Name" 
            />

            <textarea
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              placeholder="Product Description"
              rows="4"
            />

            <input 
              type="text" 
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)} 
              placeholder="Price"
            />

            <button type="submit">Add Your Product</button>
          </form>
        </div>

        <div className="card_terms">
            <input type="checkbox" name="" id="terms" /> <span>I have read and agree to the <a href="/">Terms of Service</a></span>
        </div>
      </div>
      {/* <div className="container-products">
<div className="input-card">
  <div className="card_title">
    <h1>Add a Product</h1>
  </div>
  <div className="form">
  <form action="/register" method="post">
    <input type="text" name="username" id="username" placeholder="Product Name" />
    <input type="email" name="email" placeholder="Email" id="email" />
    <input type="password" name="password" placeholder="Password" id="password" />
    <button>Sign Up</button>
    </form>
  </div>
  <div className="card_terms">
      <input type="checkbox" name="" id="terms" /> <span>I have read and agree to the <a href="/">Terms of Service</a></span>
  </div>
</div>
</div> */}
    </div>
  )
}

export default AddProducts



