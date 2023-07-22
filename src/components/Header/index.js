import './index.css'

const Header = () => (
  <div className="header-background">
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="logo"
        alt="website logo"
      />
    </div>
    <div className="header-background2">
      <ul>
        <li className="para">Home</li>
        <li className="para">Products</li>
        <li className="para">Cart</li>
      </ul>

      <button className="logout" type="button">
        Logout
      </button>
    </div>
  </div>
)

export default Header
