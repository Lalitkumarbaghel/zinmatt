import ReviewBanner from "./ReviewBanner/ReviewBanner";
import MediaCoverage2 from "./MediaCoverage/MediaCoverage2";
import LiveClassReview from "./LiveClassReview/LiveClassReview";
import ReviewTestimorial from "./ReveiwTestimorial/ReviewTestimorial";
import GoogleReview from "./GoogleReview/GoogleReview";
import ReviewSlider1 from "./ReviewSlider1/ReviewSlider1";
import ReviewSlider2 from "./ReviewSlider2/ReviewSlider2";
import './style.css'
function Reviews(){
    return(
        <div>
            <ReviewBanner/>
            <MediaCoverage2/>
            <LiveClassReview/>
            <ReviewTestimorial/>
            <GoogleReview/>
            <ReviewSlider1/>
            <ReviewSlider2/>
            <section className="container-fluid pt-5 pb-5">
                <div className="container">
                    <div className="row elebox">
                        <div className="col-md-6 box1">
                            <div className="elebg">
                                <h3 className="ele-head">ELEVATE</h3>
                                <h5 className="ele-head2">Master the Digital Realm: Unlock Your Potential with Zinmatt Pvt Ltd's Premier Learning Platform!</h5>
                                <p className="ele-txt">Discover the art and science of digital marketing with Zinmatt Pvt Ltd. From fundamentals to advanced tactics, our platform provides a rich learning experience tailored to your goals. Gain the skills, insights, and strategies needed to thrive in today’s competitive digital landscape. Start your journey with us today!</p>
                                <a className="ele-btn" href="#">Get in Touch</a>
                            </div>
                        </div>
                        <div className="col-md-6 box2">
                            <div className="rev-platform">
                                <h5 className="plt-head">India's most active learning platform</h5>
                                <p className="plt-txt">Empowering India’s Brightest Minds: Experience Unparalleled Growth and Learning on Zinmatt, the Nation’s Leading Active Learning Platform.</p>
                                <ul className="plt-ul">
                                    <li><span className="icn"><i className="fa-solid fa-clock"></i></span><span className="txt">Project On Time</span></li>
                                    <li><span className="icn"><i className="fa-solid fa-desktop"></i></span><span className="txt">Modern Technology</span></li>
                                    <li><span className="icn"><i className="fa-solid fa-pen-ruler"></i></span><span className="txt">Latest Designs</span></li>
                                    <li><span className="icn"><i className="fa-solid fa-handshake-simple"></i></span><span className="txt">Hand holding Support</span></li>
                                </ul>
                                <h6 className="plt-head6">This is your last digital marketing platform</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Reviews;