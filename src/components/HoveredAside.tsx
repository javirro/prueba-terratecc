import dashboardImg from '../images/dashboard.png'
import '../styles/hoveredAside.css'
const HoveredAside = () => {
  return (
    <aside className="hovered-aside">
      <section className="info-aside-container">
        <div className="chains-aside">
          <article className="chains-title-line">
            <img src={dashboardImg} alt="dashboard"/>
            <span>Chains dashboard</span>
          </article>
        </div>
      </section>
    </aside>
  )
}

export default HoveredAside
