import "./styles/offers.css"

const Offers = () => {
  return (
    <div>
        <div className="offers-container d-flex vh-100 justify-content-center align-items-center">
            <div className="d-flex flex-column align-items-center mx-3">
                <div className="offer position-relative rounded-4">
                    <div className="price-tag position-absolute rounded-circle d-flex justify-content-center align-items-center">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div>Rs.150</div> <div>Off</div>
                        </div>
                    </div>

                    <div className="offer-image rounded-4 overflow-hidden">
                        <img 
                            className="img-fluid w-100 h-100"
                            src="https://images.pexels.com/photos/919453/pexels-photo-919453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                    </div>

                    <div className="offer-details p-3 mt-3">
                        <h3>Title</h3>
                        <p>Lorem ipsum dollor set a met Lorem ipsum dollor </p>
                    </div>
                </div>

                <a href="/" className="offerLink d-flex justify-content-center align-items-center mt-3 rounded-pill">Grab the offer</a>
            </div>

            <div className="d-flex flex-column align-items-center mx-3">
                <div className="offer position-relative rounded-4">
                    <div className="price-tag position-absolute rounded-circle d-flex justify-content-center align-items-center">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div>Rs.150</div> <div>Off</div>
                        </div>
                    </div>

                    <div className="offer-image rounded-4 overflow-hidden">
                        <img 
                            className="img-fluid w-100 h-100"
                            src="https://images.pexels.com/photos/919453/pexels-photo-919453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                    </div>

                    <div className="offer-details p-3 mt-3">
                        <h3>Title</h3>
                        <p>Lorem ipsum dollor set a met Lorem ipsum dollor </p>
                    </div>
                </div>

                <a href="/" className="offerLink d-flex justify-content-center align-items-center mt-3 rounded-pill">Grab the offer</a>
            </div>

            <div className="d-flex flex-column align-items-center mx-3">
                <div className="offer position-relative rounded-4">
                    <div className="price-tag position-absolute rounded-circle d-flex justify-content-center align-items-center">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div>Rs.150</div> <div>Off</div>
                        </div>
                    </div>

                    <div className="offer-image rounded-4 overflow-hidden">
                        <img 
                            className="img-fluid w-100 h-100"
                            src="https://images.pexels.com/photos/919453/pexels-photo-919453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                    </div>

                    <div className="offer-details p-3 mt-3">
                        <h3>Title</h3>
                        <p>Lorem ipsum dollor set a met Lorem ipsum dollor </p>
                    </div>
                </div>

                <a href="/" className="offerLink d-flex justify-content-center align-items-center mt-3 rounded-pill">Grab the offer</a>
            </div>

            {/* <div className="offer-two-container">
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
            </div> */}
        </div>
    </div>
  )
}

export default Offers