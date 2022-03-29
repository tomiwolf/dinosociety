import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

// Import Social Icons
import { AiFillInstagram } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { SiDiscord } from 'react-icons/si'
import OpenseaIcon from '../assets/OpenseaIcon.png'

// Hamburger MEnu
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  const [showSmallScreenMenu, setShowSmallScreenMenu] = useState(false)

  useEffect(() => {
    if (showSmallScreenMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [showSmallScreenMenu])

  return (
    <div className="custom_navbar container_padding_x">
      <div className="logo">Dino Society</div>

      <div className="section_links">
        <ul>
          <li>
            <Link
              className="link"
              to="story"
              spy={true}
              smooth={true}
              offset={50}
              duration={200}
            >
              Story
            </Link>
          </li>

          <li>
            <Link
              className="link"
              to="roadmap"
              spy={true}
              smooth={true}
              offset={50}
              duration={200}
            >
              roadmap
            </Link>
          </li>

          <li>
            <Link
              className="link"
              to="showcase"
              spy={true}
              smooth={true}
              offset={50}
              duration={200}
            >
              ShowCase
            </Link>
          </li>

          <li>
            <Link
              className="link"
              to="team"
              spy={true}
              smooth={true}
              offset={50}
              duration={200}
            >
              team
            </Link>
          </li>

          <li>
            <Link
              className="link"
              to="faq"
              spy={true}
              smooth={true}
              offset={50}
              duration={200}
            >
              faq
            </Link>
          </li>

          <li>
            <Link
              className="link"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={200}
            >
              contact
            </Link>
          </li>
        </ul>
      </div>

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
        <a href="" target={'_blank'}>
          <div className="icon_container">
            <SiDiscord className="icon" />
          </div>
        </a>
        <div className="icon_container">
          <img src={OpenseaIcon} alt="OpenseaIcon" />
        </div>
      </div>

      <div className="hamburger_menu">
        {showSmallScreenMenu ? (
          <div className="icon" onClick={() => setShowSmallScreenMenu(false)}>
            {' '}
            X{' '}
          </div>
        ) : (
          <GiHamburgerMenu
            className="icon"
            onClick={() => setShowSmallScreenMenu(true)}
          />
        )}
      </div>

      {showSmallScreenMenu && (
        <div className="mobile_sidebar">
          <ul>
            <li>
              <Link
                className="link"
                to="story"
                spy={true}
                smooth={true}
                offset={50}
                duration={200}
                onClick={() => setShowSmallScreenMenu(false)}
              >
                Story
              </Link>
            </li>

            <li>
              <Link
                className="link"
                to="roadmap"
                spy={true}
                smooth={true}
                offset={50}
                duration={200}
                onClick={() => setShowSmallScreenMenu(false)}
              >
                roadmap
              </Link>
            </li>

            <li>
              <Link
                className="link"
                to="showcase"
                spy={true}
                smooth={true}
                offset={50}
                duration={200}
                onClick={() => setShowSmallScreenMenu(false)}
              >
                ShowCase
              </Link>
            </li>

            <li>
              <Link
                className="link"
                to="team"
                spy={true}
                smooth={true}
                offset={50}
                duration={200}
                onClick={() => setShowSmallScreenMenu(false)}
              >
                team
              </Link>
            </li>

            <li>
              <Link
                className="link"
                to="faq"
                spy={true}
                smooth={true}
                offset={50}
                duration={200}
                onClick={() => setShowSmallScreenMenu(false)}
              >
                faq
              </Link>
            </li>

            <li>
              <Link
                className="link"
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={200}
                onClick={() => setShowSmallScreenMenu(false)}
              >
                contact
              </Link>
            </li>

            <li>
              <div className="sm_social_links">
                <a
                  href="http://Instagram.com/dinosocietynft "
                  target={'_blank'}
                >
                  <div className="icon_container">
                    <AiFillInstagram className="icon" />
                  </div>
                </a>
                <a href="http://Twitter.com/dinosocietynft" target={'_blank'}>
                  <div className="icon_container">
                    <BsTwitter className="icon" />
                  </div>
                </a>
                <a href="" target={'_blank'}>
                  <div className="icon_container">
                    <SiDiscord className="icon" />
                  </div>
                </a>
                <div className="icon_container">
                  <img src={OpenseaIcon} alt="OpenseaIcon" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
