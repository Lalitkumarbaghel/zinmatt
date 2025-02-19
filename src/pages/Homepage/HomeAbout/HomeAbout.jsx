import { Link } from "react-router-dom";
import "./style.css";
function HomeAbout() {
  
    return (
    <section className="container-fuild pt-5">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-4">
            <div className="about_img">
              <img
                src="https://zinmatt.com/wp-content/uploads/2025/01/Untitled-design-10.png"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="aboutInfo">
              <h1 className="head_light">About Us</h1>
              <h2 className="head_high">
                Transform Your Career with Leading-Edge
                <span className="orngeClr">Digital Marketing Skills</span>
              </h2>
              <h5 className="head_grey">
                Learn from the experts. Thrive in the digital age.
              </h5>
              <div
                className="btn-group aboutJoinbtn"
                role="group"
                aria-label="Basic example"
              >
                <Link className="btn joinBtn" to="/">
                  Join Now
                </Link>
                <Link className="btn exploreBtn" to="/">
                  Explore Our Courses
                </Link>
              </div>

              <Link to="/" className="aboutBtns">
                <span className="icn">
                  <i className="fa-brands fa-dropbox"></i>
                </span>
                <span>About Zinmatt</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="row pt-5 align-items-center justify-content-center">
          <div className="col-md-10">
            <p className="text-center about_btm">
              Professional Courses In The Field of Study To Expedite Career
              Growth
            </p>
          </div>
        </div>

        <div className="row pt-3">
          <div className="col-md-4 mt-4">
            <div className="about_cart d-flex">
              <div className="cart_icn">
                <div className="icnBg">
                  <i className="fa-solid fa-laptop"></i>
                </div>
              </div>
              <div className="cart_txt">
                <h6 className="title">Live Session</h6>
                <p className="textinfo">
                  Unlocking Success: Join Our Live Session for Expert Insights
                  and Strategies!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="about_cart d-flex">
              <div className="cart_icn">
                <div className="icnBg">
                  <i className="fa-solid fa-window-restore"></i>
                </div>
              </div>
              <div className="cart_txt">
                <h6 className="title">20 Modules</h6>
                <p className="textinfo">
                  Mastering Your Craft: Dive Deep into 15 Modules of Expert
                  Knowledge!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="about_cart d-flex">
              <div className="cart_icn">
                <div className="icnBg">
                  <i className="fa-solid fa-headset"></i>
                </div>
              </div>
              <div className="cart_txt">
                <h6 className="title">24/7 Technical Support</h6>
                <p className="textinfo">
                  Tech Solutions at Your Fingertips: 24/7 Support for Seamless
                  Connectivity!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="about_cart d-flex">
              <div className="cart_icn">
                <div className="icnBg">
                  <i className="fa-solid fa-video"></i>
                </div>
              </div>
              <div className="cart_txt">
                <h6 className="title">Recorded Video</h6>
                <p className="textinfo">
                  Elevate Your Skills: Access Our Exclusive Library of Recorded
                  Videos!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="about_cart d-flex">
              <div className="cart_icn">
                <div className="icnBg">
                  <i className="fa-solid fa-file"></i>
                </div>
              </div>
              <div className="cart_txt">
                <h6 className="title">Assignments</h6>
                <p className="textinfo">
                  Sharpen Your Skills: Engage with Our Thought-Provoking Student
                  Assignments!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="about_cart d-flex">
              <div className="cart_icn">
                <div className="icnBg">
                  <i className="fa-solid fa-file-pdf"></i>
                </div>
              </div>
              <div className="cart_txt">
                <h6 className="title">PDF Notes</h6>
                <p className="textinfo">
                  Knowledge at Your Fingertips: Explore Our Comprehensive PDF
                  Notes Collection!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="about_cart d-flex">
              <div className="cart_icn">
                <div className="icnBg">
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>
              </div>
              <div className="cart_txt">
                <h6 className="title">100% Internship</h6>
                <p className="textinfo">
                  Launch Your Career: Secure a 100% Internship Opportunity with
                  Us!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="about_cart d-flex">
              <div className="cart_icn">
                <div className="icnBg">
                  <i className="fa-solid fa-bag-shopping"></i>
                </div>
              </div>
              <div className="cart_txt">
                <h6 className="title">Job Assistance</h6>
                <p className="textinfo">
                  Career Catalyst: Propel Your Future with Our Premier Job
                  Assistance Program!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="about_cart d-flex">
              <div className="cart_icn">
                <div className="icnBg">
                  <i className="fa-solid fa-user-lock"></i>
                </div>
              </div>
              <div className="cart_txt">
                <h6 className="title">Exclusive Access </h6>
                <p className="textinfo">
                  Unlock Exclusive Benefits: Gain Access to Our Premier
                  Membership Program!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row pt-4 pb-4 align-items-center">
            <div className="col-md-6">
                <div className="Lounch">
                    <h2 className="orangeclr heading-title">Why Launch a Career in Digital Marketing</h2>
                    <p className="title-grey pt-3">Launching a career in Digital Marketing is your passport to a dynamic realm of global opportunities, where creativity meets analytics, and innovation thrives. Embrace the future of business – dive into Digital Marketing today!</p>
                    <ul>
                        <li><span className="icn"><i className="fa-solid fa-building"></i></span><span className="txt">Integrate all business departments
                        </span></li>
                        <li><span className="icn"><i className="fa-solid fa-link"></i></span><span className="txt">Connect to third-party apps
                        </span></li>
                    </ul>
                </div>
            </div>
            <div className="col-md-6">
                <img src="https://zinmatt.com/wp-content/uploads/2024/03/home-page-photo-zinmatt.png" className="img-fluid" />
            </div>
        </div>

      </div>
    </section>
  );
}
export default HomeAbout;
