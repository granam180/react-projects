import { useEffect, useState } from 'react'
import {
  faGitAlt,
  faSass,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SiMapbox, SiPowerbi } from 'react-icons/si'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          Greetings, my name is Joe Hutchins, also known as Joey Bonneville or joeyB for short. I have been dedicated to Front-End development for over a decade, consistently pursuing knowledge in Full-Stack application development. As a highly motivated and driven front-end developer, I am seeking a position within an established IT company or start-up. My goal is to work on diverse and challenging projects utilizing the latest technologies available to meet the needs of the business.
          </p>
          <p>
          I recently completed a 15-month contract as a Web App Developer at a rapid-protyping start-up company, Maxwell Design Group (MDG). During my tenure, I worked collaboratively with a team of talented creative directors and developers, gaining invaluable experience in the field. Currently, I am focused on further refining my skill set to pursue the next big opportunity. I am committed to staying updated with the latest front-end frameworks prevalent in today's market, such as ReactJS 18 and NextJS 13.
          </p>
          <p>
          If I were to define myself in one sentence it would be <i>passionate</i> with a tenacious drive for exploring the latest technologies and growth hacking solutions. I'm also a music lover and composer under the brand name Joey Bonneville, bringing a creative and artistic perspective to my work. I'm also an enthusiast of photography, art, and abstract design.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <SiPowerbi icon={SiPowerbi} color="#F9A600" />
            </div>   
            <div className="face2">
              <SiMapbox icon={SiMapbox} color="#76ABFF" />
            </div>                
            <div className="face3">
              <FontAwesomeIcon icon={faSass} color="#C76496" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>     
          </div>
        </div>
      </div>
      
      <Loader type="pacman" />
    </>
  )
}

export default About
