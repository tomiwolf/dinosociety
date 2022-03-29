// Import Social Icons
import { AiFillInstagram } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { SiDiscord } from 'react-icons/si'

import OpenseaFooterIcon from '../assets/OpenseaFooterIcon.png'

const Footer = () => {
  return (
    <div className="footer container_padding_x">
      <div className="text">
        <h1>Dino Society</h1>

        <div className="social_links">
          <a href="http://Instagram.com/dinosocietynft " target={'_blank'}>
            <div className="icon_container">
              <AiFillInstagram className="icon" />
            </div>
          </a>
          <a href="http://Twitter.com/dinosocietynft" target={'_blank'}>
            <div className="icon_container">
              <BsTwitter className="icon" />
            </div>
          </a>

          <a>
            <div className="img_container">
              <img src={OpenseaFooterIcon} alt="OpenseaFooterIcon" />
            </div>
          </a>

          <a href="https://discord.gg/8sZuAR6HKC" target={'_blank'}>
            <div className="icon_container">
              <SiDiscord className="icon" />
            </div>
          </a>
        </div>

        <p>Verified Smart Contract:</p>
      </div>

      <p>©2022 DINO SOCIETY | All right reserved</p>
    </div>
  )
}

export default Footer
