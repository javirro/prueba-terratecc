import { useState } from 'react'
import logo from '../images/logo.png'
import asideIcon from '../images/asideIcon.png'
import asideIcon2 from '../images/asideIcon2.png'
import asideIcon3 from '../images/asideIcon3.png'
import HoveredAside from './HoveredAside'
import '../styles/asidenavbar.css'

const AsideNavbar = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
    // You can add your custom logic here when the mouse enters the image
  };

  const handleMouseLeave = () => {
    //setIsHovered(false);
    // You can add your custom logic here when the mouse leaves the image
  };
  return (

    <aside className="aside">
      <section className="aside-container">
          <img src={logo} alt="logo" className="aside-img" />
        <article className="icon-container">
          <img src={asideIcon} alt="icon-1" className="aside-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        </article>
        <article  className="icon-container">
          <img src={asideIcon2} alt="icon-2" className="aside-icon"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
        </article>
        <article  className="icon-container">
          <img src={asideIcon3} alt="icon-3" className="aside-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        </article>
      </section>
          {isHovered && <HoveredAside />}
    </aside>

  )
}

export default AsideNavbar
