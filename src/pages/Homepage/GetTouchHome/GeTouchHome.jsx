import './style.css'

function GeTouchHome(){
    return (
        <section className='container-fluid pt-5 pb-5 getborder'>
            <div className='container'>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-md-5'>
                        <img src='https://zinmatt.com/wp-content/uploads/2024/11/Untitled-design-14-1536x1157.png' className='img-fluid' />
                        <div className='callbtn d-flex align-items-center pt-4'>
                            <h2>Have a Question?</h2>
                            <a href='telto:+91 9045015882' className='btn btn-success'><i className="fa-solid fa-phone"></i>Call Now</a>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='getTouchform'>
                            <h1 className=''>Contact Us</h1>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control"  placeholder="Enter Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control"  placeholder="Enter Email" />
                            </div>
                            <div className="form-group">
                                <input type="number" className="form-control"  placeholder="Enter Mobile Number" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control"  placeholder="Enter Message"></textarea>
                                
                            </div>
                            
                            <button type="submit" className="btn btn-success">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GeTouchHome;