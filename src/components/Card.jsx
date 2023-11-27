import React, { useState } from 'react'
import Counter from './Counter'
import "../styles/cardStyles.css"

const Card = (props) => {
  const [cardSelected, setCardSelected] = useState(false)
  
  const getCardClass = () => {
    let cardClass = cardSelected === true ? "selected" : "deselected";
    return cardClass
  }

  const getOverlayState = () => {
    let overlayClass = cardSelected === true ? "overlay show" : "overlay hide";
    return overlayClass;
  };

  return (
    <div className = {`${getCardClass()} card flex-row items-align-center justify-content-between p-3 mb-4 shadow-sm border-lg rounded-4`} onClick={() => setCardSelected(!cardSelected)}>
      <div className='w-50'>
        <h4 className='m-0'> {props.productDetail.name} </h4>
        <p className='m-0'>{props.productDetail.desc}</p>
      </div>

      {cardSelected && <Counter 
        product = {props.productDetail}
        onIncrement={props.onQuantityIncreased}
        onDecrement={props.onQuantityDecreased} 
      />}

    </div>
  )
}

export default Card
