import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_q86g40i', 'template_d9ajhrs', form.current, 'NcIroo0NLiIGnWmZJ')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['H', 'i', 'r', 'e', ' ', 'C', 'r', 'e', 'a', 't', 'i', 'v', 'e ', '!']}
              idx={17}
            />
          </h1>
          <p>
              I'm a Web App Developer with a background in Graphic Design, experienced in Growth Hacking solutions.  I am currently available for hire, so if I sound like a good fit your next project, don't hesitate to reach out!
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Bonneville Development & Design (BADD)
          <br /><br />
          Dover, DE
        </div>
        <div className="map-wrap">
          <MapContainer center={[39.1632152, -75.5131345]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {/* <Marker position={[39.1632152, -75.5131345]}>
              <Popup>HomeBase!</Popup>
            </Marker> */}
            <Marker position={[39.1265065, -75.4785807]}>
              <Popup>
                <a
                  href="https://en.wikipedia.org/wiki/Air_Force_Mortuary_Affairs_Operations"
                  target="_blank"
                  rel="noreferrer"
                  className="popup-link"
                >
                  🥹 AFMAO
                </a>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
