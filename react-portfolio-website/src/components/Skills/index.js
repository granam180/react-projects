import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import ninety from '../../assets/images/ninety.png'
import eighty from '../../assets/images/eighty.png'
import seventy from '../../assets/images/seventy.png'
import fifty from '../../assets/images/fifty.png'
import forety from '../../assets/images/forety.png'
import colorTexture from '../../assets/images/color-texture.jpeg'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Skills'.split('')}
              idx={15}
            />
          </h1>
        </div>
      </div>
      <section className="skill" id="skills">
        <Container>
          <Row>
            <Col>
              <div className="skill-bx">
                <p>
                  I've aquired skills with various companies over the years,
                  spanning projects in:
                </p>
                <Carousel
                  responsive={responsive}
                  infininte={true}
                  className="skill-slider"
                >
                  <div className="item">
                    <img src={eighty} alt="WordPress" />
                    <h3>WordPress</h3>
                  </div>
                  <div className="item">
                    <img src={seventy} alt="App Development" />
                    <h3>App Development</h3>
                  </div>
                  <div className="item">
                    <img src={seventy} alt="Full Stack" />
                    <h3>Full Stack</h3>
                  </div>
                  <div className="item">
                    <img src={forety} alt="Growth Hacking" />
                    <h3>Growth Hacking</h3>
                  </div>
                  <div className="item">
                    <img src={ninety} alt="Graphic Design" />
                    <h3>Graphic Design</h3>
                  </div>
                  <div className="item">
                    <img src={fifty} alt="Rapid-Prototyping" />
                    <h3>Rapid-Prototyping</h3>
                  </div>
                  <div className="item">
                    <img src={seventy} alt="Brand Identity" />
                    <h3>Brand Identity</h3>
                  </div>
                </Carousel>
              </div>
              <img className="background-image" alt="background" src={colorTexture} />
            </Col>
          </Row>
        </Container>
      </section>

      <Loader type="pacman" />
    </>
  )
}

export default Skills
