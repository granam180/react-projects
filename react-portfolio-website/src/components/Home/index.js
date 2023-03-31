import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/img1.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  // const nameArray = [' ', 'a', 's', 's']
  const greetArray = ["i", "'m", " ", "J", "o", "e", " ", "H", "u", "t", "c", "h", "i", "n", "s", '.' ]
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'a',
    'p',
    '(t)',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _10`}>i</span>
            <span className={`${letterClass} _11`}>,</span>
            <span className={`${letterClass} _12`}> </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={greetArray}
              idx={15}
            />   
            {/* Welcome to Bonneville Development & Design */}
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span className={`${letterClass} _15`}> </span>
            <span className={`${letterClass} _16`}>a</span>
            <span className={`${letterClass} _17`}> </span>
            <span className={`${letterClass} _18`}>p</span>
            <span className={`${letterClass} _19`}>r</span>
            <span className={`${letterClass} _20`}>e</span>
            <span className={`${letterClass} _21`}>t</span>
            <span className={`${letterClass} _22`}>t</span>
            <span className={`${letterClass} _23`}>y</span>

            <a href="https://joeybonneville.com/whois-joey-bonneville/" target="_blank" rel="noreferrer">
              <img
                src={LogoTitle}
                alt="JavaScript Developer Name, Web Developer Name"
                target="_blank"
              />
            </a>
            {/* <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            /> */}
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={18}
            />
          </h1>
          <h2>Front End Developer / JavaScript Explorer / Disruptor</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
