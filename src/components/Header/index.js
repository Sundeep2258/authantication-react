import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-sec">
    <div className="header-class">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
        alt="website logo"
        className="logo"
      />
      <ul className="options">
        <Link className="link-path" to="/">
          <li>Home</li>
        </Link>
        <Link className="link-path" to="/products">
          <li>Products</li>
        </Link>
        <Link className="link-path" to="/cart">
          <li>Cart</li>
        </Link>

        <button type="button" className="button-logout">
          Logout
        </button>
      </ul>
    </div>
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
      alt="nav logout"
      className="log-icon"
    />
  </nav>
)

export default Header
