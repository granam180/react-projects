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
            I am a professional Front-end Developer with a strong foundation in Graphic Design. With an authentic personality and a deep passion for music, I bring a unique blend of creativity and technical expertise to my work. I am actively seeking new opportunities and would be delighted to contribute to your upcoming project. Please feel free to contact me without hesitation if you believe I would be a suitable addition to your team!
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    placeholder="Name"
                    type="text"
                    name="from_name"
                    id="from_name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="reply_to"
                    id="reply_to"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    id="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    id="message"
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
      {/* <Loader type="ball-scale-multiple" class="loader-container" /> */}
      {/* <Loader type="pacman" /> */}
      <Loader type="ball-scale-multiple" />
    </>
  )
}

export default Contact
