import dashboardImg from '../images/dashboard.png'
import asideNetworks from '../data/asideNetworks.json'
import '../styles/hoveredAside.css'
const HoveredAside = () => {
  return (
    <section className="info-aside-container">
      <div>
        <h3 className="delot-title">DeLot</h3>
      </div>
      <div className="chains-aside">
        <article className="chains-title-line">
          <img src={dashboardImg} alt="dashboard" />
          <span>Chains dashboard</span>
        </article>
        <ul>
          {asideNetworks.map((net) => (
            <li key={net} className="list-text">
              {net} Delot
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default HoveredAside
