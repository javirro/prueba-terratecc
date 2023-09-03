import '../styles/mainSection.css'
import centraLimg from '../images/centralImg.png'
import networksInfo from '../data/networks.json'
import NetworkItem, { INetworkItem } from './NetworkItem'

const MainSection = () => {
  const networks: INetworkItem[] = networksInfo
  return (
    <section className="main-section">
      <section className="chains-dashboard-container">
        <h2 className='chains-text'>CHAINS DASHBOARD</h2>
        <img src={centraLimg} alt="chains dashboard" className='img-chains' />
      </section>

      <section className="delots-container">
        <h3 className="delots-text">DELOTS</h3>
        <div className="networks-grid">
          {networks.map((network) => (
            <NetworkItem network={network} key={network.name} />
          ))}
        </div>
      </section>
    </section>
  )
}

export default MainSection
