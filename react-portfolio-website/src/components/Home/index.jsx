import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { Audio } from 'react-loader-spinner'
// import LogoTitle from '../../assets/images/img1.png'
// import Logo from './Logo'
import './index.scss'
import { Image } from 'react-bootstrap'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [isLoading, setIsLoading] = useState(true);
  const [spinnerVisible, setSpinnerVisible] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);



  const greetArray = ["i", "'m", " ", "J", "o", "e", " ", "H", "u", "t", "c", "h", "i", "n", "s", '.']
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
  }, []);

  useEffect(() => {
    // Simulating a loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (isLoading) {
      setSpinnerVisible(true);
    }
  }, [isLoading]);

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

            <a href="https://joeybonneville.com/app/" target="_blank" rel="noreferrer">
              <Image
                src="https://joeybonneville.com/app/img/img1.png"
                alt="JavaScript Developer Name, Web Developer Name"
                target="_blank"
                className="logo"
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
          <div className="flat-button-wrapper">
            <Link 
              to="/projects" 
                className="flat-button"
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
            >
              Projects
              <div className="spinner-container">
                {spinnerVisible && (
                  <Audio
                    height="20"
                    width="20"
                    color={isButtonHovered ? "#000000" : "#ffd700"}
                    ariaLabel="audio-loading"
                    wrapperStyle={{ opacity: "0.4", display: "inline" }}
                    wrapperClass="wrapper-class"
                    visible={true}
                  />
                  // <Rings
                  //   height="20"
                  //   width="20"
                  //     color="#ffd700"
                  //   radius="5"
                  //   wrapperStyle={{ opacity: "0.6", display: "inline" }}
                  //   wrapperClass="wrapper-class"
                  //   visible={true}
                  //   ariaLabel="rings-loading"
                  // />
                )}
              </div>
            </Link>
          </div>
        </div>

        {/* <Logo /> */}
          
      </div>
      {/* <Loader type="ball-scale-multiple" class="loader-container" /> */}
      <Loader type="ball-scale-multiple" />
      {/* <Loader type="pacman" /> */}

    </>
  )
}

export default Home
