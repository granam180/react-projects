import { Link } from 'react-router-dom'
import './index.scss'

export default function NotFound() {
  return (
    <div className="container not-found">
      <span>404</span>
      <h1>Oops! Hi there. You seem to be lost...🦄</h1>
      <p>
        Here are some helpful links to get you back: <br />
        <div className="links" style={{ display: 'inline-block' }}>
          <Link to="/">Home</Link>
          <Link to="/projects">Work</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </p>
    </div>
  )
}
