import './style.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function SyllabusCourses(){
    useEffect(()=>{
                AOS.init({
                      duration:2000,
                      mirror: true,
                      once: true
                    });
        }, []);

    return(
        <section className='container-fluid pt-5 pb-5'>
            <div className='container'>
                <div className='row' >
                        <div className='col-md-12 pb-3'>
                            <h1>Our Syllabus</h1>
                        </div>
                    <div className='col-md-6 col-lg-4 col-xl-3 pt-2' data-aos="slide-up">
                    <div className="card syllabuseCard" >
                            <img src="https://zinmatt.com/wp-content/uploads/2024/10/3-1536x1044.png" className="card-img-top" alt="..." />
                            <div className='d-flex align-items-center justify-content-between px-3 mt-3'>
                                <p className='bordertxt'>20 Days</p>
                                <h6>By Randheer Rawat</h6>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">WordPress Development</h4>
                                <div className='starcntnt'>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <p className="card-text">Master WordPress development to build websites with themes, plugins, and custom coding expertise.</p>
                                
                            </div>
                            </div>
                    </div>
                    <div className='col-md-6 col-lg-4 col-xl-3 pt-2' data-aos="slide-up">
                    <div className="card syllabuseCard" >
                            <img src="https://zinmatt.com/wp-content/uploads/2024/10/2-1536x1044.png" className="card-img-top" alt="..." />
                            <div className='d-flex align-items-center justify-content-between px-3 mt-3'>
                                <p className='bordertxt'>5 Days</p>
                                <h6>By Manish Rawat</h6>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Graphics Designing</h4>
                                <div className='starcntnt'>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <p className="card-text">Master graphic design to create stunning visuals using creativity, tools, and techniques.</p>
                                
                            </div>
                            </div>
                    </div>
                    <div className='col-md-6 col-lg-4 col-xl-3 pt-2' data-aos="slide-up">
                    <div className="card syllabuseCard" >
                            <img src="https://zinmatt.com/wp-content/uploads/2024/10/1-1536x1044.png" className="card-img-top" alt="..." />
                            <div className='d-flex align-items-center justify-content-between px-3 mt-3'>
                                <p className='bordertxt'>15 Days</p>
                                <h6>By Pankaj Kumar</h6>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Search Engine Optimization</h4>
                                <div className='starcntnt'>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <p className="card-text">Learn SEO strategies to improve website visibility, driving organic traffic and enhancing online presence.</p>
                                
                            </div>
                            </div>
                    </div>
                    <div className='col-md-6 col-lg-4 col-xl-3 pt-2' data-aos="slide-up">
                    <div className="card syllabuseCard">
                            <img src="https://zinmatt.com/wp-content/uploads/2024/10/Create-Manage-Optimize-1-1536x1044.png" className="card-img-top" alt="..." />
                            <div className='d-flex align-items-center justify-content-between px-3 mt-3'>
                                <p className='bordertxt'>5 Days</p>
                                <h6>By Sidharth Kumar</h6>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Google My Business (GMB)
                                </h4>
                                <div className='starcntnt'>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <p className="card-text">Grow your local presence and attract customers by mastering Google My Business.</p>
                                
                            </div>
                            </div>
                    </div>
                    <div className='col-md-6 col-lg-4 col-xl-3 pt-2' data-aos="slide-up">
                    <div className="card syllabuseCard">
                            <img src="https://zinmatt.com/wp-content/uploads/2024/10/8-1536x1044.png" className="card-img-top" alt="..." />
                            <div className='d-flex align-items-center justify-content-between px-3 mt-3'>
                                <p className='bordertxt'>5 Days</p>
                                <h6>By Raushan Kumar</h6>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Email Marketing</h4>
                                <div className='starcntnt'>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <p className="card-text">Master email marketing to engage audiences, boost conversions, and drive business growth effectively.</p>
                                
                            </div>
                            </div>
                    </div>
                    <div className='col-md-6 col-lg-4 col-xl-3 pt-2' data-aos="slide-up">
                    <div className="card syllabuseCard">
                            <img src="https://zinmatt.com/wp-content/uploads/2024/10/4-1536x1044.png" className="card-img-top" alt="..." />
                            <div className='d-flex align-items-center justify-content-between px-3 mt-3'>
                                <p className='bordertxt'>25 Days</p>
                                <h6>By Sidharth Kumar</h6>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Social Media Optimization</h4>
                                <div className='starcntnt'>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <p className="card-text">Social media optimization enhances your online presence by optimizing content to increase engagement, reach, and visibility across platforms.</p>
                                
                            </div>
                            </div>
                    </div>
                    <div className='col-md-6 col-lg-4 col-xl-3 pt-2' data-aos="slide-up">
                    <div className="card syllabuseCard">
                            <img src="https://zinmatt.com/wp-content/uploads/2024/10/5-1536x1044.png" className="card-img-top" alt="..." />
                            <div className='d-flex align-items-center justify-content-between px-3 mt-3'>
                                <p className='bordertxt'>15 Days</p>
                                <h6>By Amardeep Rawat</h6>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Facebook Advertisment</h4>
                                <div className='starcntnt'>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <p className="card-text">Leverage Facebook Ads to target audiences, drive traffic, and boost business conversions effectively.</p>
                                
                            </div>
                            </div>
                    </div>
                    <div className='col-md-6 col-lg-4 col-xl-3 pt-2' data-aos="slide-up">
                    <div className="card syllabuseCard">
                            <img src="https://zinmatt.com/wp-content/uploads/2024/10/Create-Manage-Optimize-3-1536x1044.png" className="card-img-top" alt="..." />
                            <div className='d-flex align-items-center justify-content-between px-3 mt-3'>
                                <p className='bordertxt'>3 Days</p>
                                <h6>By Raushan Kumart</h6>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Video Editing</h4>
                                <div className='starcntnt'>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <p className="card-text">Enhance your storytelling and create professional content by mastering the art of video editing.
                                </p>
                                
                            </div>
                            </div>
                    </div>
                    <div className='col-md-6 col-lg-4 col-xl-3 pt-2' data-aos="slide-up">
                    <div className="card syllabuseCard">
                            <img src="https://zinmatt.com/wp-content/uploads/2024/10/6-1536x1044.png" className="card-img-top" alt="..." />
                            <div className='d-flex align-items-center justify-content-between px-3 mt-3'>
                                <p className='bordertxt'>5 Days</p>
                                <h6>By Raushan Kumar</h6>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Content Marketing
                                </h4>
                                <div className='starcntnt'>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <p className="card-text">Content marketing focuses on creating valuable, relevant content to attract, engage, and convert target audiences.
                                </p>
                                
                            </div>
                            </div>
                    </div>
                    <div className='col-md-6 col-lg-4 col-xl-3 pt-2' data-aos="slide-up">
                    <div className="card syllabuseCard">
                            <img src="https://zinmatt.com/wp-content/uploads/2024/10/7-1536x1044.png" className="card-img-top" alt="..." />
                            <div className='d-flex align-items-center justify-content-between px-3 mt-3'>
                                <p className='bordertxt'>10 Days</p>
                                <h6>By Pankaj Kumar
                                </h6>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Google Ads
                                </h4>
                                <div className='starcntnt'>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <p className="card-text">Google Ads helps businesses reach targeted audiences, drive traffic, and increase conversions through paid search advertising.

                                </p>
                                
                            </div>
                            </div>
                    </div>
                    <div className='col-md-6 col-lg-4 col-xl-3 pt-2' data-aos="slide-up">
                    <div className="card syllabuseCard">
                            <img src="https://zinmatt.com/wp-content/uploads/2024/10/9-1536x1044.png" className="card-img-top" alt="..." />
                            <div className='d-flex align-items-center justify-content-between px-3 mt-3'>
                                <p className='bordertxt'>5 Days</p>
                                <h6>By Raushan Kumar
                                </h6>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Artificial Intelligence
                                </h4>
                                <div className='starcntnt'>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <p className="card-text">Learn AI to automate tasks, enhance decision-making, and create intelligent, data-driven solutions.

                                </p>
                                
                            </div>
                            </div>
                    </div>
                    <div className='col-md-6 col-lg-4 col-xl-3 pt-2' data-aos="slide-up">
                    <div className="card syllabuseCard">
                            <img src="https://zinmatt.com/wp-content/uploads/2024/10/Create-Manage-Optimize-2-1536x1044.png" className="card-img-top" alt="..." />
                            <div className='d-flex align-items-center justify-content-between px-3 mt-3'>
                                <p className='bordertxt'>5 Days</p>
                                <h6>By Amardeep Rawat
                                </h6>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Dropshipping</h4>
                                <div className='starcntnt'>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <p className="card-text">Boost your e-commerce success and profits by mastering the art of dropshipping.

                                </p>
                                
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )           
}

export default SyllabusCourses;