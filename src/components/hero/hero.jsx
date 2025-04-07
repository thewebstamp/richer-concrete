import './hero.css';
import { Images } from '../../assets/images';

function Hero() {
    return (
        <div className="hero-wrap">
            <div className="hero-container">
                <div className="hero-background">
                    <img src={Images.heroBackground} alt="" />
                </div>
                <div className="hero">
                    <div className="hero-top">
                        <div className="small-headline">WELCOME TO RICHER CONCRETE LLC</div>
                        <h1>Your Trusted Partner for All Your Concrete Needs in Wind Lake, WI, United States and Surrounding Areas</h1>
                        <p><span>TRANSFORMING PROPERTIES | </span>Licensed and insured concrete services. Booking now for {new Date().getFullYear()}!</p>
                        <div className="hero-btn">
                            <a id='hero-f-btn' className='hero-f-btn' href="#portfolio">View Portfolio</a>
                            <a id='hero-s-btn' className='hero-s-btn' href="#services">See Services</a>
                        </div>
                    </div>

                    <div className="hero-base">
                        <img src={Images.heroImg4} alt="" />
                        <img src={Images.heroImg1} alt="" />
                        <img src={Images.heroImg2} alt="" />
                        <img src={Images.heroImg3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;