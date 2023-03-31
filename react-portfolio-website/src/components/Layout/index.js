import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">
          &lt;body&gt;
          <br />
          <span className="top-tags-div">
            <span className='top-tags-red'>&lt;div </span>
            <span className='top-tags-purple'>className=</span>
            <span className="top-tags-green">'container' </span>
            <span className="top-tags-purple">id=</span>
            <span className="top-tags-green">'joeHutchins-reactjs-portfolio'</span>
            <span className='top-tags-red'>&gt;</span>
          </span>
        </span>
        <span className="tags bottom-tags">
          <span className="bottom-tag-div">&lt;/div&gt;</span>
          <br />
          &lt;/body&gt;
          <br />
          <br />
        </span>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
