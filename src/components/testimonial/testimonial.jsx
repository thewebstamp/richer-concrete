import './testimonial.css';
import { Images } from '../../assets/images';
import { useRef, useEffect } from 'react';

function Testimonial() {
    const testimonial = [
        {
            name: 'JOHN D',
            address: 'Wind Lake, WI',
            review: "Richer Concrete LLC completely transformed our driveway. The team was professional, efficient, and delivered high-quality work. The driveway looks great and holds up perfectly under traffic. Highly recommend their services!"
        },
        {
            name: 'EMILY S',
            address: 'Wind Lake, WI',
            review: 'We had some cracks in our foundation, and Richer Concrete LLC did an outstanding job repairing it. Their team was thorough, professional, and the repairs were seamless. Very happy with the results'
        },
        {
            name: 'DAVID M',
            address: 'Wind Lake, WI',
            review: 'Richer Concrete LLC designed and installed a beautiful stamped concrete patio for us. The design exceeded our expectations, and the finished product is not only stylish but also durable. Great job'
        }
    ];

    const testimonialB = useRef();

    function slideUp() {
        if (window.location.pathname == "/") {
            if (window.innerHeight * 0.9 >= testimonialB.current.getBoundingClientRect().top) {
                testimonialB.current.classList.add("slide-up");
            } else {
                testimonialB.current.classList.remove("slide-up");
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", slideUp);

        return () => {
            if (window.location.pathname == "/") {
                testimonialB.current.classList.remove("slide-up");
            }
        }
    }, []);

    return (
        <div className="testimonial-comp">
            <div className="t-top">
                <div className="t-screen"></div>
                <img src={Images.testimonial} alt="" />
            </div>

            <div className="t-base" ref={testimonialB}>
                <div className="t-headline">TESTIMONIALS</div>
                <h2>What Customers Say About Richer Concrete LLC</h2>
                <div className="testimonial-wrap">
                    {testimonial.map((review, i) => (
                        <div className="t-reviews" key={i}>
                            <div className="review">
                                <div className="big-circle"></div>
                                <div className="small-circle"></div>
                                <p>{review.review}</p>
                            </div>
                            <a href='#'>{review.name}</a>
                            <p className='t-address'>{review.address}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="base-rev">
                {/* <a className='facebook-review' href="https://www.facebook.com/StaircaseSpecialist/reviews" target='_blank'><img src={Images.facebookReviews} alt="" /></a> */}
            </div>
        </div>
    )
}

export default Testimonial;