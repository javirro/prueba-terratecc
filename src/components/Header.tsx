import '../styles/header.css'
import twitter from '../images/twitter.png'
import { ethers } from 'ethers'
import { useState } from 'react'

declare global {
  interface Window {
    ethereum: any
  }
}

interface IWalletInfo {
  address?: string
  balance?: string
}
const Header = () => {
  const [walletInfo, setUserWalletInfo] = useState<IWalletInfo>({})
  const connectionHandler = () => {
    if (window.ethereum as any) {
      try {
        window.ethereum
          .request({ method: 'eth_requestAccounts' })
          .then((accounts: string) => {
            accountChangeHandler(accounts[0])
          })
      } catch (error) {
        console.error(error)
      }
    }
  }

  const accountChangeHandler = (address: string) => {
    window.ethereum
      .request({ method: 'eth_getBalance', params: [address, 'latest'] })
      .then((balance: string) => {
        setUserWalletInfo({
          address,
          balance: ethers.formatEther(balance),
        })
      })
  }
  return (
    <header className="header">
      <img src={twitter} alt="twitter-icon" className="header-img" />
      <button className="header-btn" onClick={connectionHandler}>
        {!walletInfo.address ? "CONNECT WALLET" : `${walletInfo?.address?.slice(0,6)}...${walletInfo?.address?.slice(36)}`}
      </button>
    </header>
  )
}

export default Header
