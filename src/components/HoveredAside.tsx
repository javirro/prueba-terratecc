import dashboardImg from '../images/dashboard.png'
import asideNetworks from '../data/asideNetworks.json'
import asideStables from '../data/asideStableCoin.json'
import '../styles/hoveredAside.css'
const HoveredAside = () => {
  return (
    <section className="info-aside-container">
      <div className="delot-title-container">
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
      <div className="chains-aside">
        <article className="chains-title-line">
          <img src={dashboardImg} alt="dashboard" />
          <span>Stable coins dashboard</span>
        </article>
        <ul>
          {asideStables.map((coin) => (
            <li key={coin} className="list-text">
              {coin} Delot
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default HoveredAside
