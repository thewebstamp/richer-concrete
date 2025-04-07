import './aboutHero.css';
import { Images } from '../../assets/images.js';

function AboutHero() {
    return (
        <div className="about-hero">
            <div className='ah-top'>
                <div className='img-wrap'>
                    <img className='ah-img-1' src={Images.p9} />
                    <img className='ah-img-2' src={Images.p1} />
                    <img className='ah-img-height' src={Images.p9} />
                </div>
            </div>
            
            <div className='ah-base'>
                <div className='ah-headline'>ABOUT RICHER CONCRETE LLC</div>
                <h2>We Provide the Best Concrete Services Across Wind Lake</h2>
                <p>At Richer Concrete LLC, we bring experience, precision, and craftsmanship to every project. Based in Wind Lake, Wisconsin, we specialize in delivering durable, high-quality concrete solutions tailored to residential and commercial needs. Whether it's a new driveway, a stamped patio, or a foundation repair, we approach every job with integrity and attention to detail.<br />With a commitment to reliability and customer satisfaction, we’ve built a reputation for results that stand the test of time.</p>
            </div>
        </div>
    )
}

export default AboutHero;