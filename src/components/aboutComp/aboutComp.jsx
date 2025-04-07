import './aboutComp.css';
import { useNavigate } from 'react-router-dom';
import { Images } from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef } from 'react';

function AboutComp() {
    const navigate = useNavigate();
    const aboutT = useRef();
    const aboutB = useRef();

    function slideUp() {
        if (window.location.pathname == "/") {
            if (window.innerHeight * 0.9 >= aboutT.current.getBoundingClientRect().top) {
                aboutT.current.classList.add("slide-up");
            } else {
                aboutT.current.classList.remove("slide-up");
            }

            if (window.innerHeight * 0.9 >= aboutB.current.getBoundingClientRect().top) {
                aboutB.current.classList.add("slide-up");
            } else {
                aboutB.current.classList.remove("slide-up");
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", slideUp);

        return () => {
            if (window.location.pathname == "/") {
                aboutT.current.classList.remove("slide-up");
                aboutB.current.classList.remove("slide-up");
            }
        }
    }, []);

    return (
        <div className="about-comp">
            <div className="about-comp-imgs" ref={aboutT}>
                <img className='a-height' src={Images.acompImg1} alt="" />
                <img className='a-img-1' src={Images.acompImg1} alt="" />
                <img className='a-img-2' src={Images.acompImg2} alt="" />
            </div>

            <div className="about-comp-text" ref={aboutB}>
                <div className="a-headline">ABOUT RICHER CONCRETE LLC</div>
                <h2>We Deliver High-Quality Concrete Services With Integrity</h2>
                <p>At Richer Concrete LLC, we pride ourselves on being a locally-owned and operated business, serving Wind Lake and the surrounding areas with top-notch concrete services. With years of experience in the industry, we have built a strong reputation for providing high-quality concrete installations and renovations, both for residential and commercial projects</p>
                <div className="about-bullet">
                    <div className="item">
                        <FontAwesomeIcon className='a-check' icon={faCheck} />
                        <span>Professional Workers</span>
                    </div>
                    <div className="item">
                        <FontAwesomeIcon className='a-check' icon={faCheck} />
                        <span>Guaranteed Quality</span>
                    </div>
                    <div className="item">
                        <FontAwesomeIcon className='a-check' icon={faCheck} />
                        <span>Extensive Experience</span>
                    </div>
                    <div className="item">
                        <FontAwesomeIcon className='a-check' icon={faCheck} />
                        <span>Transparent Quotation</span>
                    </div>
                </div>
                <a href="#" onClick={() => { navigate("/about") }}>Learn &nbsp;More</a>
            </div>
        </div>
    )
}

export default AboutComp;