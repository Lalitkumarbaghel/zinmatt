import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png'
import PdfFile from '../../assets/images/Learn-Growth-50-Day-Class-Syllabus-2024.pdf'
import { useEffect } from 'react';
import './style.css'
function Header(){
  const onButtonClick = ()=>{
    const pdfUrl  = PdfFile;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = PdfFile;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
});

       
       const isSticky = (e) => {
            const header = document.querySelector('.header-section');
            const scrollTop = window.scrollY;
            scrollTop >= 150 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
        };
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar_box header-section">
  <div className="container">
    <Link className="navbar-brand" to="/">
        <img  style={{width:'190px'}} src={Logo} />
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
          <Link className="nav-link" to="/courses">Course</Link>
        </li>
        <li className="nav-item">
        <a className="nav-link dropdown-toggle" href="#" >
          Intern
        </a>
        <div className='submenu'>
            <ul>
                <li><a className='subItem' href='#'>Intership</a></li>
                <li><Link className='subItem' to='/our-qualified-intern'>Qualified intern</Link></li>
            </ul>
        </div>
      </li>
      <li className="nav-item">
          <Link className="nav-link" to="/review">Review</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/event">Event</Link>
        </li>
        <li className="nav-item">
        <a className="nav-link dropdown-toggle" href="#" >
          Other
        </a>
        <div className='submenu'>
            <ul>
                <li><Link className='subItem' to='/gallery'>Gallery</Link></li>
                <li><Link className='subItem' to='/contact-us'>Contact us</Link></li>
                <li><a className='subItem' href='#'>Certificate verification</a></li>
                <li><Link className='subItem' to='/blog'>Blog</Link></li>
            </ul>
        </div>
      </li>
      <li className="nav-item">
        <button type='button' onClick={onButtonClick} className='heade_downbtn'><span><i className="fa-solid fa-download"></i></span> Download Brochure</button>
      </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Header;