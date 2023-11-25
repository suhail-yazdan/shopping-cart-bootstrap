import { useState } from "react";
import "../styles/cartStyles.css"

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Cart = (props) => {
  const [displayCart, setDisplayCart] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function showCart() {
    setDisplayCart(!displayCart);
  }

  return (
    <>
    <div className="cart d-flex align-items-center justify-content-center" onClick={handleShow}>
      <h3>
        My Cart
        <sup className="text-danger"> {props.selectedProducts.reduce((total, product) => total + product.quantity, 0)}</sup>
      </h3>

      {displayCart && 
        <div className="popup">
          <ul>
            {props.selectedProducts.map(item =>(                            
              <li key={item.pid}>
                {item.quantity ? `${item.name}: ${item.quantity}` : ""}
              </li>
            ))}
          </ul>
        </div>
      }
    </div>

    <Modal show={show} onHide={handleClose} dialogClassName="cart-modal">
      <Modal.Header closeButton>
        <Modal.Title>Items in Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-box">
          <ul className="list-group list-group-flush">
            {props.selectedProducts.map(item =>(                            
              <li key={item.pid} className="list-group-item">
                {item.quantity ? `${item.name}: ${item.quantity}` : ""}
              </li>
            ))}
          </ul>
        </div>  
      </Modal.Body>
      <Modal.Footer>
        <Button className="custom-button" variant="custom" onClick={handleClose}>
          Close
        </Button>
        <Button className="custom-button" variant="custom" onClick={handleClose}>
          Proceed
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default Cart
