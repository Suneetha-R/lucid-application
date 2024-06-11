import {Link, withRouter} from 'react-router-dom'
import {ImHome} from 'react-icons/im'
import {FiLogOut, FiSun} from 'react-icons/fi'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import ContextChanges from '../Context/ContextChange'
import './index.css'

const websiteLogo =
  'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/navbar-logo-img.png'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <ContextChanges.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme} = value

        const onClickThemeChange = () => {
          toggleTheme()
        }

        const bgColor = isDarkTheme ? 'dark-bg' : 'light-bg'

        const themeImage = isDarkTheme ? <FiSun /> : <FaMoon />
        return (
          <nav className={`nav-container ${bgColor}`}>
            <ul className="header-ul-container">
              <li className="logo-container">
                <Link className="link" to="/">
                  <img className="logo" src={websiteLogo} alt="website logo" />
                </Link>
              </li>
              <li className="home-jobs-container">
                <Link className="link" to="/">
                  <ImHome className="home-icon" />
                  <h1 className="nav-text">Home</h1>
                </Link>
                <Link className="link" to="/profile">
                  <h1 className="nav-text">Profile</h1>
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  data-testid="theme"
                  className="theme-change-button"
                  onClick={onClickThemeChange}
                >
                  {themeImage}
                </button>
              </li>
              <li>
                <FiLogOut className="home-icon" onClick={onClickLogout} />
                <button
                  type="button"
                  className="btn-logout"
                  onClick={onClickLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        )
      }}
    </ContextChanges.Consumer>
  )
}

export default withRouter(Header)
