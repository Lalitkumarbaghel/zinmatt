import './style.css'
function ContactUs(){
    return(
        <div>
            <section className='container-fluid contactBanner light-ornage-bg'>
                <div className='container'>
                    <div className='row align-items-center justify-content-center'>
                        <div className='col-md-5'>
                            <img src='https://zinmatt.com/wp-content/uploads/2024/03/129-1024x1024.png' className='img-fluid' />
                        </div>
                        <div className='col-md-5'>
                        <img src='https://zinmatt.com/wp-content/uploads/2024/03/130-1024x1024.png' className='img-fluid' />
                        </div>
                    </div>
                </div>
                <div className='curv'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path fill='#F4690114' opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
                        <path fill='#F4690114' opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
                        <path fill='#F4690114' d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
                    </svg>
                </div>
            </section>
            <section className='containerfluid pt-5 pb-5'>
                <div className='container'>
                    <div className='row pb-4'>
                        <div className='col-md-12'>
                            <p>Contact us</p>
                            <h1 className='orangeclr'>Can’t find what you’re looking for?</h1>
                        </div>
                    </div>
                    <div className='row '>
                        <div className="col-md-4 pt-2">
                            <div className='contactCard'>
                                <i className="fa-solid fa-life-ring icn"></i>
                                <h4 className='head'>Our support</h4>
                                <p className='txt'>"Your Direct Line to Solutions!" 9560488126</p>
                                <a href='tel:9560488126' className='smpbtn'>Get support<span><i className="fa-solid fa-arrow-right"></i></span></a>
                            </div>
                        </div>
                        <div className="col-md-4 pt-2">
                        <div className='contactCard'>
                                <i className="fa-brands fa-rocketchat icn"></i>
                                <h4 className='head'>FAQs Unlocked</h4>
                                <p className='txt'>Answers to Common Student Queries About Our Organization</p>
                                <a href='#' className='smpbtn'>Get in Touch<span><i className="fa-solid fa-arrow-right"></i></span></a>
                            </div>
                        </div>
                        <div className="col-md-4 pt-2">
                        <div className='contactCard'>
                                <i className="fa-solid fa-book icn"></i>
                                <h4 className='head'>Basic knowledge</h4>
                                <p className='txt'>"Discover the Essentials: Unveiling the Basics of Our Organization"</p>
                                <a href='#' className='smpbtn'>Learn more<span><i className="fa-solid fa-arrow-right"></i></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='containerfluid pt-5 pb-5'>
                <div className='container'>
                    <div className='row pb-4'>
                        <div className='col-md-12'>
                            <h1 className='orangeclr'>Get in touch</h1>
                        </div>
                    </div>
                    <div className='row '>
                        <div className="col-md-5 pt-2">
                            <div className='contactCard'>
                                <i className="fa-solid fa-location-dot icn"></i>
                                <h4 className='head'>WELCOME TO Learn Growth</h4>
                                <p className='txt'>"Where Community meets Opportunity"</p>
                                <h5>Address: H 94 h block sector 63 near sector 63 metro station noida up 201301</h5>
                                <a href='tel:9560488126' className='smpbtn'>Get in Touch<span><i className="fa-solid fa-arrow-right"></i></span></a>
                            </div>
                        </div>
                        <div className="col-md-7 pt-2">
                        <div className='mapbox'>
                        

                        {/* <div className="mapouter"><div className="gmap_canvas"><iframe className="gmap_iframe" width="100%" scrolling="no" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Gate no:-7, Regent theatre, The Hub, 3rd Floor Besides, Near, Gandhi Maidan Rd, Patna, Bihar 800004&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://sprunkin.com/">Sprunki Game</a></div></div> */}
                        <div className="mapouter"><div className="gmap_canvas"><iframe className="gmap_iframe" width="100%" scrolling="no" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=H 94 h block sector 63 near sector 63 metro station noida up 201301&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://sprunkin.com/">Sprunki Game</a></div></div>

                        </div>
                        </div>
                        
                    </div>

                    <div className='row'>

                    <div className="col-md-4 pt-4">
                            <div className='contactCard'>
                                <i className="fa-solid fa-question icn"></i>
                                <h4 className='head'>MASTERING EFFECTIVE QUESTIONING</h4>
                                <p className='txt'>"Guiding Students to ask for Deeper Guiding Students to ask for Deeper Understanding"</p>
                                <a href='#' className='smpbtn'>Open a support ticket<span><i className="fa-solid fa-arrow-right"></i></span></a>
                            </div>
                        </div>
                        <div className="col-md-4 pt-4">
                        <div className='contactCard'>
                                <i className="fa-solid fa-layer-group icn"></i>
                                <h4 className='head'>EXCLUSIVE GROUP</h4>
                                <p className='txt'>"Empowering Excellence : Our Exclusive Group dedicated to student support"</p>
                                <a href='#' className='smpbtn'>Join now<span><i className="fa-solid fa-arrow-right"></i></span></a>
                            </div>
                        </div>
                        <div className="col-md-4 pt-4">
                        <div className='contactCard'>
                                <i className="fa-brands fa-whatsapp icn"></i>
                                <h4 className='head'>WHATSAPP GROUP</h4>
                                <p className='txt'>"Students Success Hub : Join Our Whatsapp Group for Support & Resources"</p>
                                <a href='#' className='smpbtn'>Join Now<span><i className="fa-solid fa-arrow-right"></i></span></a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default ContactUs;