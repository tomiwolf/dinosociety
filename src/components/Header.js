import Navbar from './Navbar'
import DinoGroupHeader from '../assets/DinoGroupHeader.png'

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <div className="content">
        <h1>Dino Society</h1>
        <p>8,888 unique dinosaurs launch on ETH blockchain!</p>
        <span>Connect your MetaMask wallet then click Mint</span>

        <button>Connect</button>
      </div>

      <div className="dino_group_background">
        <img src={DinoGroupHeader} alt="DinoGroupHeader" />
      </div>
    </div>
  )
}

export default Header
