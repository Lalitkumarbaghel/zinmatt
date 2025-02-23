import './style.css'
import CommunityImg from '../../../assets/images/communit.png'
function HomeCommunity(){
    return(
        <section className='container-fluid community_bg mt-5'>
            <div className='container'>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-md-6'>
                        <img src={CommunityImg} className='img-fluid' />
                    </div>
                    <div className='col-md-6'>
                        <div className='community_txt'>
                        <h1 className="head_high">Learn Growth Community</h1>
                        <p>"At Learn Growth, we embody the philosophy of Lern, Earn & Grow. Committed to your success, we stand by you 24 hours a day. Our unwavering dedication, doubt support, and emphasis on practical skills pave the way for your journey to excellence. Together, let's build a future where learning knows no bounds, earning knows no limits, and growth is a constant companion."</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeCommunity;