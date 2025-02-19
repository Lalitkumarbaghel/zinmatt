import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png'
import './style.css'
function Header(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar_box">
  <div className="container">
    <Link className="navbar-brand" to="/">
        <img  style={{width:'180px'}} src={Logo} />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
    	
      <ul className="navbar-nav navbar_nav">
        <li className="nav-item">
          <Link className="nav-link" to='/'> Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Course</a>
        </li>
        <li className="nav-item">
        <a className="nav-link dropdown-toggle" href="#" >
          Intern
        </a>
        <div className='submenu'>
            <ul>
                <li><a className='subItem' href='#'>Intership</a></li>
                <li><a className='subItem' href='#'>Qualified intern</a></li>
            </ul>
        </div>
      </li>
      <li className="nav-item">
          <a className="nav-link" href="#">Review</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Event</a>
        </li>
        <li className="nav-item">
        <a className="nav-link dropdown-toggle" href="#" >
          Other
        </a>
        <div className='submenu'>
            <ul>
                <li><a className='subItem' href='#'>Gallery</a></li>
                <li><a className='subItem' href='#'>Contact us</a></li>
                <li><a className='subItem' href='#'>Certificate verification</a></li>
                <li><a className='subItem' href='#'>Blog</a></li>
            </ul>
        </div>
      </li>
      <li className="nav-item">
        <a href='#' className='heade_downbtn'><span><i className="fa-solid fa-download"></i></span> Download Brochure</a>
      </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Header;