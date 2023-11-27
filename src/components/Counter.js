import "../styles/counterStyles.css"

export default function Counter(props) {
    return (
      <div className="counter d-flex flex-nowrap align-items-center justify-content-end">
        <div className="mx-1">Quantity:</div>  
        <div className={`${props.product.quantity === 0 ? "bg-warning text-black" : "bg-primary"} badge mx-1 p-2`}>
          {props.product.quantity === 0 ? "Zero": props.product.quantity}
        </div>
        <button className="btn btn-secondary mx-1" onClick={props.onIncrement}>
          +
        </button>
        <button className="btn btn-secondary mx-1" onClick={props.onDecrement}>
          -
        </button>
      </div>
    );
}
