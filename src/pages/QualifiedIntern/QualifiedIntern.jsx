import './style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function QualifiedIntern(){
    useEffect(()=>{
            AOS.init({
                duration:2000,
                mirror: true,
                once: true
            })
        }, [])
    return (
        <div>
            <section className='container-fluid pt-5 pb-5 lightBg'>
                <div className='container'>
                    <div className='row justify-content-center align-items-center' data-aos="slide-up">
                        <div className='col-md-6'>
                            <div className='qualifyBanner'>
                                <h1 className='fs-50 orangeclr'>Our Qualified Intern</h1>
                                <p className='pt-2 pb-2'>Nurturing talent through our internship program.</p>
                                <h3>We Provide expert mentorshipendless </h3>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <img src='https://zinmatt.com/wp-content/uploads/2024/04/intern.jpg' className='img-fluid' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='container-fluid'>
                <div className='container'>
                <div className="row pt-5 pb-5" >
                    <div className="col-sm-6 col-md-4 col-lg-3 pt-2" data-aos="slide-up">
                        <div className='qualifi_box'>
                            <div className='qualifi-avtar'>
                                <img className="img-fluid" src="https://zinmatt.com/wp-content/uploads/2024/04/29-819x1024.png" />
                            </div>
                            <h3 className='typeInfo'>Graphic Designer</h3>
                            <h5 className='stuName'>Name :- YOGESH</h5>
                            <p className='stuRank'>Learn Growth Batch:- </p>
                        </div>
                        
                    </div>
                    
                    <div className="col-sm-6 col-md-4 col-lg-3 pt-2" data-aos="slide-up">
                        <div className='qualifi_box'>
                            <div className='qualifi-avtar'>
                                <img className="img-fluid" src="https://zinmatt.com/wp-content/uploads/2024/04/13-819x1024.png" />
                            </div>
                            <h3 className='typeInfo'>Content Writer</h3>
                            <h5 className='stuName'>Name :- Heikrujam </h5>
                            <p className='stuRank'>Learn Growth Batch:- </p>
                        </div>
                        
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 pt-2" data-aos="slide-up">
                        <div className='qualifi_box'>
                            <div className='qualifi-avtar'>
                                <img className="img-fluid" src="https://zinmatt.com/wp-content/uploads/2024/04/2-819x1024.png" />
                            </div>
                            <h3 className='typeInfo'>Content Writer</h3>
                            <h5 className='stuName'>Name :- Rampravesh</h5>
                            <p className='stuRank'>Learn Growth Batch:- </p>
                        </div>
                        
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 pt-2" data-aos="slide-up">
                        <div className='qualifi_box'>
                            <div className='qualifi-avtar'>
                                <img className="img-fluid" src="https://zinmatt.com/wp-content/uploads/2024/04/11-819x1024.png" />
                            </div>
                            <h3 className='typeInfo'>SEO</h3>
                            <h5 className='stuName'>Name :- Kirti Mishra</h5>
                            <p className='stuRank'>Learn Growth Batch:- </p>
                        </div>
                        
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 pt-2" data-aos="slide-up">
                        <div className='qualifi_box'>
                            <div className='qualifi-avtar'>
                                <img className="img-fluid" src="https://zinmatt.com/wp-content/uploads/2024/04/28-819x1024.png" />
                            </div>
                            <h3 className='typeInfo'>Content Writer</h3>
                            <h5 className='stuName'>Name :- Nikhil Khekade</h5>
                            <p className='stuRank'>Learn Growth Batch:- </p>
                        </div>
                        
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-3 pt-2" data-aos="slide-up">
                        <div className='qualifi_box'>
                            <div className='qualifi-avtar'>
                                <img className="img-fluid" src="https://zinmatt.com/wp-content/uploads/2024/04/9-819x1024.png" />
                            </div>
                            <h3 className='typeInfo'>SEO</h3>
                            <h5 className='stuName'>Name :- MANISH</h5>
                            <p className='stuRank'>Learn Growth Batch:- </p>
                        </div>
                        
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 pt-2" data-aos="slide-up">
                        <div className='qualifi_box'>
                            <div className='qualifi-avtar'>
                                <img className="img-fluid" src="https://zinmatt.com/wp-content/uploads/2024/04/3-819x1024.png" />
                            </div>
                            <h3 className='typeInfo'>Graphic Designer</h3>
                            <h5 className='stuName'>Name :- Arav sahu</h5>
                            <p className='stuRank'>Learn Growth Batch:- </p>
                        </div>
                        
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 pt-2" data-aos="slide-up">
                        <div className='qualifi_box'>
                            <div className='qualifi-avtar'>
                                <img className="img-fluid" src="https://zinmatt.com/wp-content/uploads/2024/04/24-819x1024.png" />
                            </div>
                            <h3 className='typeInfo'>Graphic Designer</h3>
                            <h5 className='stuName'>Name :- Jyoti Maheshwari</h5>
                            <p className='stuRank'>Learn Growth Batch:- </p>
                        </div>
                        
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 pt-2" data-aos="slide-up">
                        <div className='qualifi_box'>
                            <div className='qualifi-avtar'>
                                <img className="img-fluid" src="https://zinmatt.com/wp-content/uploads/2024/04/20-819x1024.png" />
                            </div>
                            <h3 className='typeInfo'>Content Writer</h3>
                            <h5 className='stuName'>Name :- Ankush</h5>
                            <p className='stuRank'>Learn Growth Batch:- </p>
                        </div>
                        
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 pt-2" data-aos="slide-up">
                        <div className='qualifi_box'>
                            <div className='qualifi-avtar'>
                                <img className="img-fluid" src="https://zinmatt.com/wp-content/uploads/2024/04/33-819x1024.png" />
                            </div>
                            <h3 className='typeInfo'>Graphic Designer</h3>
                            <h5 className='stuName'>Name :- Pawan Nagar</h5>
                            <p className='stuRank'>Learn Growth Batch:- </p>
                        </div>
                        
                    </div>
                    
                    </div>
                </div>
            </section>
        </div>
    )
}

export default QualifiedIntern;