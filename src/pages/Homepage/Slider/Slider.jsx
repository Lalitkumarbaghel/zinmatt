import React from "react";
import './style.css'
import { Link } from "react-router-dom";
function Slider(){
    return(
        <section className="container-fluid sliderbg">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="slider_cntnt">
                            <h1 className="heading">Unlock Boundless Career Opportunities by Becoming a Digital Marketing Champion.</h1>
                            <p className="info">Rise  in your career by mastering digital marketing,Leading With expertise and innovation. As a digital marketing Champion, Unlock remarkable growth and recognition.</p>
                            <Link className="btn btn-primary applyBtn">Apply Now</Link>
                        </div>
                    </div>
                    <div className="col-md-5">
                    <img src='https://zinmatt.com/wp-content/uploads/2024/03/Wishing-you-an-abundance-of-love-and-riches-this-Diwali-1024x1024.png' alt=""  className="img-fluid" />
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Slider;