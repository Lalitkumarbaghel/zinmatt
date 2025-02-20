import './style.css'
function ChooseCourse(){
    return (
        <section className='container-fluid'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 pt-5'>
                        <div className='choose_card'>
                            <img className='img' src='https://zinmatt.com/wp-content/uploads/2024/10/choose-1.png' />
                            <h2 className='head2'>Why Choose Us</h2>
                            <p className='txt2'>At Zinmatt, we offer expert-led digital marketing training, real-world projects, and personalized support to help you succeed in the digital space.</p>
                            <a href='#' className='btn orngeBtn'>Learn More</a>
                        </div>
                    </div>
                    <div className='col-md-4 pt-5'>
                        <div className='choose_card'>
                            <img className='img' src='https://zinmatt.com/wp-content/uploads/2024/10/choose-2.png' style={{width:"60px"}} />
                            <h2 className='head2 text-deco'>Flexible Learning</h2>
                            <p className='txt2'>Learn at your own pace with Zinmatt's flexible online courses. Access lessons anytime, anywhere, and tailor your learning experience to fit your schedule.</p>
                        </div>
                    </div>
                    <div className='col-md-4 pt-3'>
                        <div className='choose_card'>
                            <img className='img' src='https://zinmatt.com/wp-content/uploads/2024/10/live.png' style={{width:"60px"}} />
                            <h2 className='head2 text-deco'>Live Session</h2>
                            <p className='txt2'>Join our live sessions for real-time learning with industry experts. Get personalized guidance, ask questions, and improve your digital marketing skills instantly.</p>
                        </div>
                    </div>
                    <div className='col-md-4 pt-3'>
                        <div className='choose_card'>
                            <img className='img' src='https://zinmatt.com/wp-content/uploads/2024/10/support.png' style={{width:"60px"}} />
                            <h2 className='head2 text-deco'>Flexible Learning</h2>
                            <p className='txt2'>At Zinmatt, we provide dedicated hand-holding support, guiding you step-by-step through your learning journey to ensure you gain confidence and achieve success.</p>
                        </div>
                    </div>
                    <div className='col-md-4 pt-3'>
                        <div className='choose_card'>
                            <img className='img' src='https://zinmatt.com/wp-content/uploads/2024/10/certificate.png' style={{width:"60px"}} />
                            <h2 className='head2 text-deco'>Certification</h2>
                            <p className='txt2'>Earn a recognized certification from Zinmatt upon course completion. Showcase your digital marketing skills to enhance your resume, boost credibility, and unlock career opportunities.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ChooseCourse;