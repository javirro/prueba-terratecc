import '../styles/header.css'
import twitter from '../images/twitter.png'
const Header = () => {
  return (
    <header className="header">
      <img src={twitter} alt="twitter-icon" className='header-img' />
      <button className="header-btn"> CONNECT WALLET </button>
    </header>
  )
}

export default Header
