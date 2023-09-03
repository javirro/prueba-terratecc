import rightArrow from '../images/rightArrow.png'
import chart from '../images/chart.png'
import '../styles/networkItem.css'

export interface INetworkItem {
  name: string
  jackpot: string
  tickets: string
  ticketsPercentage: string
  token: string
  networkName: string
}
const NetworkItem = ({ network }: { network: INetworkItem }) => {
  return (
    <div className="network-item-container">
      <span className="network-name">{network?.name}</span>
      <div className="tickets-container">
        <article className="tickets-individual">
          <span className="jackpot-title">
            Jackpot amount ({network?.token})
          </span>
          <span className="tickets"> {network?.jackpot}</span>
        </article>
        <article className="tickets-individual bl">
          <span className="jackpot-title">Tickets available</span>
          <article className="tickets-available-info">
            <span className="tickets-available-text"> {network?.tickets}</span>
            <img src={chart} alt="chart-percetange" className="arrow-img" />
            <span className="tickets-percentage">
              {network?.ticketsPercentage}
            </span>
          </article>
        </article>
      </div>
      <div className="go-to-container">
        <span>Go to {network?.networkName} DeLot</span>
        <img src={rightArrow} alt="right-arrow" className="arrow-img" />
      </div>
    </div>
  )
}

export default NetworkItem
