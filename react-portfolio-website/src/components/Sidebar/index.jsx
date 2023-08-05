import './index.scss'
import { useState } from 'react'
// import LogoS from '../../assets/images/badd.png'
// import LogoSubtitle from '../../assets/images/jb-lines.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  // faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  // faFileArrowUp,
  // faFileArrowDown,  
  faBook,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import { Image } from 'react-bootstrap'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="nav-bar">
      <Link className="logo" to="/" onClick={() => setShowNav(false)}>
        {/* <img src={LogoS} alt="Logo" /> */}
        <Image 
          className="sub-logo" 
          src="https://joeybonneville.com/app/img/jb-lines.png" 
          alt="joeyB" 
        />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/projects"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>        
        {/* <NavLink
          activeclassname="active"
          className="login-link"
          to="/projects-2"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faFileArrowDown} color="#4d4d4e" />
        </NavLink>            */}
        {/* <NavLink
          activeclassname="active"
          className="login-link"
          to="/dashboard"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faFileArrowUp} color="#4d4d4e" />
        </NavLink>         */}
        <NavLink
          activeclassname="active"
          className="skills-link"
          to="/skills"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faBook} color="#4d4d4e" />
        </NavLink>  
        <NavLink
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>              
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className="close-icon"
        />
      </nav>

      {/* Social Links */}
      <ul>
      <li>
          <a
            href="https://github.com/granam180"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>        
        <li>
          <a
            href="https://www.linkedin.com/in/joeybonneville/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        {/* <li>
          <a href="https://instagram.com/joey_bonneville"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>         */}
        {/* <li>
          <a
            href="https://www.youtube.com/channel/UCJoTrzLEBzA9Wj3cJjYkbcA"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li> */}
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  )
}

export default Sidebar
