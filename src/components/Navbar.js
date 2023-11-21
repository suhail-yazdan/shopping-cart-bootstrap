import '../styles/navBar.css'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='navbar'>
            <h3 className='appName'><a href= "/">Shopping Cart</a></h3>
            
            <ul className='links-wrapper'>
                <li><a href= "/offers">Offers</a></li>
                <li><a href= "/add-products">Add Products</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar