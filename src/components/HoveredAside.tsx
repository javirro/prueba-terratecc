import { useState } from 'react'
import dashboardImg from '../images/dashboard.png'
import asideNetworks from '../data/asideNetworks.json'
import asideStables from '../data/asideStableCoin.json'
import asidePool from '../data/poolsAside.json'
import arrow from '../images/arrow-down.png'
import '../styles/hoveredAside.css'

const HoveredAside = () => {
  const [showChainsDropDown, setShowChainsDropDown] = useState<boolean>(true)
  const [showStablesDropDown, setShowStablesDropDown] = useState<boolean>(true)
  const [showPoolsDropDown, setShowPoolsDropDown] = useState<boolean>(true)

  const arrowClickChains = () => {
    setShowChainsDropDown(!showChainsDropDown)
  }

  const arrowClickStables = () => {
    setShowStablesDropDown(!showStablesDropDown)
  }

  const arrowClickPools = () => {
    setShowPoolsDropDown(!showPoolsDropDown)
  }
  return (
    <section className="info-aside-container">
      <div className="delot-title-container">
        <h3 className="delot-title">DeLot</h3>
      </div>
      <div className="chains-aside">
         <article className="chains-title-line">
          <img src={dashboardImg} alt="dashboard"  className='dashboard-img'/>
          <span className="title-drop">Chains dashboard</span>
          <img
            src={arrow}
            alt="arrow"
            className={showChainsDropDown ? 'arrow-img' : 'arrow-img-inverse'}
            onClick={arrowClickChains}
          />
        </article>
        {showChainsDropDown && (
          <ul>
            {asideNetworks.map((net) => (
              <li key={net} className="list-text">
                {net} DeLot
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="chains-aside">
        <article className="chains-title-line">
          <img src={dashboardImg} alt="dashboard" className='dashboard-img'/>
          <span className="title-drop">Stablecoins dashboard </span>
          <img
            src={arrow}
            alt="arrow"
            className={showStablesDropDown ? 'arrow-img' : 'arrow-img-inverse'}
            onClick={arrowClickStables}
          />
        </article>
        {showStablesDropDown && (
          <ul>
            {asideStables.map((coin) => (
              <li key={coin} className="list-text">
                {coin} DeLot
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="chains-aside">
        <article className="chains-title-line">
          <img src={dashboardImg} alt="dashboard" className='dashboard-img' />
          <span className="title-drop">Pools dashboard</span>
          <img
            src={arrow}
            alt="arrow"
            className={showStablesDropDown ? 'arrow-img' : 'arrow-img-inverse'}
            onClick={arrowClickPools}
          />
        </article>
        {showPoolsDropDown && (
          <ul>
            {asidePool.map((pool) => (
              <li key={pool} className="list-text">
                {pool}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default HoveredAside
