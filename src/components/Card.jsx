import React, { useState } from 'react'
import Counter from './Counter'
import "../styles/cardStyles.css"

const Card = (props) => {
  const [cardSelected, setCardSelected] = useState(false)
  
  const getCardClass = () => {
    let cardClass = cardSelected === true ? "card selected" : "card deselected";
    return cardClass
  }

  const getOverlayState = () => {
    let overlayClass = cardSelected === true ? "overlay show" : "overlay hide";
    return overlayClass;
  };

  return (
    <div className = {`${getCardClass()} `} onClick={() => setCardSelected(!cardSelected)}>
      <div>
        <h4 className='m-0'> {props.productDetail.name} </h4>
        <p className='m-0'>{props.productDetail.desc}</p>
      </div>
      <div className={getOverlayState()}>
        <Counter 
          product = {props.productDetail}
          onIncrement={props.onQuantityIncreased}
          onDecrement={props.onQuantityDecreased} 
          />
      </div>
    </div>
  )
}

export default Card
