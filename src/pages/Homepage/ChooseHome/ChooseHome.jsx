import './style.css'

function ChooseHome(){
    return(
        <section className='container-fluid chooseSection'>
        <div className="container pt-4 pb-5">
            <div className='row'>
                <div className='col-md-12'>
                    <div className='choose_zimatt_box'>
                        <img src='https://zinmatt.com/wp-content/uploads/2024/03/cropped-Red-Purple-Modern-Minimalist-Initial-AS-Letter-Logo.png' style={{width:"80px", display:"block", margin:"0 auto"}}/>
                        <h1 className="text-center head_high pb-4">Why Choose <span className='orangeclr'>Zinmatt</span>?</h1>
                    </div>
                </div>
            </div>
    <div className="row row-flex">
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <div className="price-table">
                <div className='choose_head'>
                    <div className='icn'>
                        <i className="fa-brands fa-youtube"></i>
                    </div>
                    <span className='txt youtube'>YOUTUBE</span>
                </div>
                <div className='choose_list'>
                    <div className='choose_list2'>
                        <h3 className='info'>Videos</h3>
                        <h1 className='prc'>₹0</h1>
                        <ul>
                            <li><span className='icn check'><i className="fa-solid fa-check"></i></span>Free Videos</li>
                            <li><span className='icn'><i className="fa-solid fa-xmark"></i></span>Structured Videos</li>
                            <li><span className='icn'><i className="fa-solid fa-xmark"></i></span>Live Class</li>
                            <li><span className='icn'><i className="fa-solid fa-xmark"></i></span>Support</li>
                            <li><span className='icn'><i className="fa-solid fa-xmark"></i></span>Test</li>
                            <li><span className='icn'><i className="fa-solid fa-xmark"></i></span>Certificate</li>
                            <li><span className='icn'><i className="fa-solid fa-xmark"></i></span>Lifetime Access</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
        <div className="price-table">
                <div className='choose_head'>
                    <div className='icn other'>
                    <i className="fa-solid fa-school"></i>
                    </div>
                    <span className='txt youtube'>OTHERS</span>
                    
                </div>
                <div className='choose_list'>
                    <div className='choose_list2'>
                        <h3 className='info'>Paid Classes</h3>
                        <h1 className='prc'>₹50,000</h1>
                        <ul>
                            <li><span className='icn'><i className="fa-solid fa-xmark"></i></span>Free Classes</li>
                            <li><span className='icn check'><i className="fa-solid fa-check"></i></span> Structured Videos</li>
                            <li><span className='icn'><i className="fa-solid fa-xmark"></i></span>Daily Live Classes</li>
                            <li><span className='icn'><i className="fa-solid fa-xmark"></i></span>Hand Holding Support</li>
                            <li><span className='icn'><i className="fa-solid fa-xmark"></i></span>Weekly Test</li>
                            <li><span className='icn'><i className="fa-solid fa-xmark"></i></span> Assignments</li>
                            <li><span className='icn check'><i className="fa-solid fa-check"></i></span>Certificate</li>
                            <li><span className='icn'><i className="fa-solid fa-xmark"></i></span> Lifetime Access</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            
            
        <div className="price-table">
                <div className='choose_head'>
                <div className='icn other'>
                    <img className='img' src='https://zinmatt.com/wp-content/uploads/2024/03/cropped-Red-Purple-Modern-Minimalist-Initial-AS-Letter-Logo.png' />
                    </div>
                    <span className='txt youtube'>ZINMATT</span>
                    
                </div>
                <div className='choose_list'>
                    <div className='choose_list2'>
                        <h3 className='info'>Free Classes</h3>
                        <h1 className='prc'>₹0</h1>
                        <ul>
                            <li><span className='icn check'><i className="fa-solid fa-check"></i></span>Free Videos</li>
                            <li><span className='icn check'><i className="fa-solid fa-check"></i></span>Structured Videos</li>
                            <li><span className='icn check'><i className="fa-solid fa-check"></i></span>Daily Live Classes</li>
                            <li><span className='icn check'><i className="fa-solid fa-check"></i></span>Practical Class</li>
                            <li><span className='icn check'><i className="fa-solid fa-check"></i></span>Hand Holding Support</li>
                            <li><span className='icn check'><i className="fa-solid fa-check"></i></span>Weekly Test</li>
                            <li><span className='icn check'><i className="fa-solid fa-check"></i></span>Assignments</li>
                            <li><span className='icn check'><i className="fa-solid fa-check"></i></span>Certificate after course completion</li>
                            <li><span className='icn check'><i className="fa-solid fa-check"></i></span>Exclusive Access</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
        
    </div>
</div>
</section>
    )
}
export default ChooseHome;