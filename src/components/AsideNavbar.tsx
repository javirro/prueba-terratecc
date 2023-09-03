import logo from '../images/logo.png'
import asideIcon from '../images/asideIcon.png'
import asideIcon2 from '../images/asideIcon2.png'
import asideIcon3 from '../images/asideIcon3.png'
import '../styles/asidenavbar.css'

const AsideNavbar = () => {
  return (
    <aside className="aside">
      <section className="aside-container">
          <img src={logo} alt="logo" className="aside-img" />
        <article className="icon-container">
          <img src={asideIcon} alt="icon-1" className="aside-icon" />
        </article>
        <article  className="icon-container">
          <img src={asideIcon2} alt="icon-2" className="aside-icon" />
        </article>
        <article  className="icon-container">
          <img src={asideIcon3} alt="icon-3" className="aside-icon" />
        </article>
      </section>
    </aside>
  )
}

export default AsideNavbar
