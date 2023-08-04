import './header.css'
import logo from '../../assets/images/logo.png'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className="navbar navbar-expand-md py-3">
        <div className="container">
            <a href="#" className="navbar-brand"><img src={logo} alt="Logo" className='logo' /></a>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu" aria-expanded="false">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="mainmenu" >
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                    <li className="nav-item"><Link to="/services" className="nav-link">Services</Link></li>
                    <li className="nav-item"><Link to="/latestNews" className="nav-link">Latest News</Link></li>
                    <li className="nav-item"><Link to="/contact" className="nav-link">Contact Us</Link></li>
                    <li className="nav-item"><a href="#" className="nav-link support">Support</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header