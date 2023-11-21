import "./styles/offers.css"

const Offers = () => {
  return (
    <div>
        <div className="offers-container">
            <div className="offer-one-container">
                <div className="offer-one">
                <div className="circle">
                    <span>£50</span>
                </div>
                <div className="bottom">
                    <h1>Title</h1>
                    <p>Description</p>
                    <span>sub</span>
                </div>
                </div>
                <a href="/" className="offerLink">Click me</a>
            </div>
            <div className="offer-two-container">
                <div className="offer-two">
                <div className="circle">
                    <span>£150</span>
                </div>
                <div className="bottom">
                    <h1>Title</h1>
                    <p>Description</p>
                    <span>sub</span>
                </div>
                </div>
                <a href="/" className="offerLink">Click me</a>
            </div>
            <div className="offer-three-container">
                <div className="offer-three">
                <div className="circle">
                    <span>£200</span>
                </div>
                <div className="bottom">
                    <h1>Title</h1>
                    <p>Description</p>
                    <span>sub</span>
                </div>
                </div>
                <a href="/" className="offerLink">Click me</a>
            </div>
            </div>
    </div>
  )
}

export default Offers