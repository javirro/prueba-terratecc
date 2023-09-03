import logo from '../images/logo.png'
import '../styles/footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <section className="grid-footer">
        <img src={logo} alt="logo delot" />
        <div className="two-colums-grid">
          <ul>
            <li>About Defi</li>
            <li>Whitepaper</li>
            <li>Documentation</li>
          </ul>
          <ul>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Audits</li>
          </ul>
        </div>
      </section>
      <div className="reserved-container">
      <span className="reserved">DeLot © 2023 • All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer
