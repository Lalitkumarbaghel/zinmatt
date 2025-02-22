import './style.css'
import Logo from '../../assets/images/logo.png'
import MobileScreen from '../../assets/images/download_mobile.png'
import GooglePlay from '../../assets/images/googleplay.png'
import { Link } from 'react-router-dom'
function Footer(){
    return(
        <footer className="container-fluid pt-5 refer_clients_bg text-white mt-auto">
	<div className="container pb-5">
		<div className="row">
			<div className="col-md-4">
				<div className="footer_cntnt">
					<img src={Logo} alt="" className='img-fluid' style={{width:"250px"}} />
					<p>Enroll in our free program at Zinmatt and gain valuable skills in digital marketing, website development, graphics designing, and Facebook Ads. Unlock the door to limitless possibilities in the digital realm  start your learning journey with us today!</p>
					
				</div>
			</div>
			<div className="col-md-2">
				<div className="footer_cntnt">
					<h5>Quick Links</h5>
					<ul className="links">
						<li>
							<a href="#">Download the App</a>
						</li>
						<li>
							<Link to="/about">About Us</Link>
						</li>
						<li>
							<Link to="/contact-us">Contact</Link>
						</li>
						<li>
							<a href="#">Privacy Policy</a>
						</li>
						<li>
							<a href="#">Terms Condition</a>
						</li>
						<li>
							<a href="#">Disclaimer</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="col-md-3">
				<div className="footer_cntnt">
					<h5>Contact Info</h5>
					
					<ul className="links contact_info">
						<li>
							<a href="#" className='cont_icn'><span className='icn'><i className="fa-solid fa-location-dot"></i></span> <span className='info'>Gate No:-7, Regent Theatre, The Hub, 3rd Floor Besides, Near Gandhi Maidan Rd, Patna, Bihar 800004</span></a>
						</li>
						<li>
							<a href="#" className='cont_icn'><span className='icn'><i className="fa-solid fa-envelope"></i></span><span className='info'>Email: Support@zinmatt.com</span></a>
						</li>
						<li>
							<a href="#" className='cont_icn'><span className='icn'><i className="fa-solid fa-mobile-screen"></i></span><span className='info'>Mobile: +91 8969353544</span></a>
						</li>
						
					</ul>
				</div>
			</div>
			<div className="col-md-3">
				<div className="footer_cntnt">
					<h5>Download Zinmatt App</h5>
                    <img src={MobileScreen} style={{width: "120px", marginTop:"10px"}} />
					<img src={GooglePlay} style={{width: "120px", marginTop:"10px", display:"block"}}/>
				</div>
			</div>
		</div>
		
	</div>
    <div className='footerbtm'>
        <div className='container'>
            <div className='row'>
                <div className="col-md-6">
                    <p>Copyright © 2025 Zinmatt.com | Powered by ZINMATT PRIVATE LIMITED</p>
                </div>
                <div className="col-md-6">
                <ul className="social_icns">
						<li>
							<a href="#"><i className="fab fa-facebook-f"></i></a>
						</li>
						<li>
							<a href="#"><i className="fab fa-twitter"></i></a>
						</li>
						<li>
							<a href="#"><i className="fab fa-linkedin-in"></i></a>
						</li>
						<li>
							<a href="#"><i className="fab fa-youtube"></i></a>
						</li>
						<li>
							<a href="#"><i className="fab fa-instagram"></i></a>
						</li>
					</ul>
                </div>
            </div>
        </div>
    </div>
</footer>
    )
}
export default Footer;