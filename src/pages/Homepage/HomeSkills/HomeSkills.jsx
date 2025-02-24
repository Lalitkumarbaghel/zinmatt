import { useEffect } from 'react';
import './style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
function HomeSkills(){
    useEffect(()=>{
        AOS.init({
            duration:2000,
            mirror: true,
            once: true
        })
    }, [])
    return (
        <section className='container-fluid'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1 className='head_high'>Build Your Career with New Skills</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-6 col-md-4 col-lg-3 pt-4' data-aos="zoom-in-up">
                        <div className='skills_card'>
                        <div className="card" >
                            <div className='icn'>
                            <i className="fa-solid fa-laptop-code"></i>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title orangeclr">Website Development</h3>
                                <p className="card-text">Build your own professional websites with ease through our step-by-step WordPress training—no coding required!</p>                                
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-6 col-md-4 col-lg-3 pt-4' data-aos="zoom-in-left">
                        <div className='skills_card'>
                        <div className="card" >
                            <div className='icn'>
                            <i className="fa-solid fa-filter-circle-dollar"></i>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title orangeclr">Funnel Building</h3>
                                <p className="card-text">Optimize your funnels to convert more visitors into paying customers, ensuring you capture every opportunity for growth.</p>                                
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 pt-4' data-aos="zoom-in-right">
                        <div className='skills_card'>
                        <div className="card" >
                            <div className='icn'>
                            <i className="fa-solid fa-file"></i>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title orangeclr">Blogging</h3>
                                <p className="card-text">Share insights and connect with your audience. Boost authority and drive traffic for personal or business growth.</p>                                
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 pt-4' data-aos="zoom-out">
                        <div className='skills_card'>
                        <div className="card" >
                            <div className='icn'>
                            <i className="fa-solid fa-icons"></i>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title orangeclr">Social Media Optimization</h3>
                                <p className="card-text">Engage your audience and boost brand visibility with targeted strategies.</p>                                
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 pt-4' data-aos="zoom-out-up">
                        <div className='skills_card'>
                        <div className="card" >
                            <div className='icn'>
                            <i className="fa-solid fa-globe"></i>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title orangeclr">Search Engine Optimization</h3>
                                <p className="card-text">Enhance visibility and drive organic traffic to boost your rankings and reach your audience.</p>                                
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 pt-4' data-aos="zoom-out-down">
                        <div className='skills_card'>
                        <div className="card" >
                            <div className='icn'>
                            <i className="fa-brands fa-facebook"></i>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title orangeclr">Facebook Ads</h3>
                                <p className="card-text">Reach your target audience effectively with engaging Facebook campaigns that drive traffic and boost visibility.</p>                                
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 pt-4' data-aos="zoom-out-left">
                        <div className='skills_card'>
                        <div className="card" >
                            <div className='icn'>
                            <i className="fa-solid fa-palette"></i>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title orangeclr">Graphics Designing</h3>
                                <p className="card-text">Design stunning visuals to enhance your brand identity and effectively engage your audience.</p>                                
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 pt-4' data-aos="zoom-out-right">
                        <div className='skills_card'>
                        <div className="card" >
                            <div className='icn'>
                            <i className="fa-brands fa-google"></i>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title orangeclr">Google Ads</h3>
                                <p className="card-text">Drive targeted traffic and boost visibility with effective advertising on Google.</p>                                
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 pt-4' data-aos="zoom-in">
                        <div className='skills_card'>
                        <div className="card" >
                            <div className='icn'>
                            <i className="fa-solid fa-robot"></i>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title orangeclr">Artificial Intellingence</h3>
                                <p className="card-text">Leverage AI to automate tasks, analyze data, and enhance decision-making across various industries.</p>                                
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 pt-4' data-aos="zoom-in-up">
                        <div className='skills_card'>
                        <div className="card" >
                            <div className='icn'>
                            <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title orangeclr">Email Marketing</h3>
                                <p className="card-text">Engage your audience and drive conversions with targeted email campaigns that deliver personalized content directly to inboxes.</p>                                
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 pt-4' data-aos="zoom-in-down">
                        <div className='skills_card'>
                        <div className="card" >
                            <div className='icn'>
                            <i className="fa-solid fa-photo-film"></i>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title orangeclr">Video Editing</h3>
                                <p className="card-text">Create stunning videos by cutting, trimming, and enhancing content for impactful storytelling and engagement.</p>                                
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 pt-4' data-aos="zoom-in-left">
                        <div className='skills_card'>
                        <div className="card" >
                            <div className='icn'>
                            <i className="fa-solid fa-bag-shopping"></i>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title orangeclr">Dropshipping</h3>
                                <p className="card-text">Start an online store without inventory, selling products directly from suppliers to customers effortlessly.</p>                                
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}


export default HomeSkills;