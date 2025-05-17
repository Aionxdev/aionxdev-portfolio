// src/components/common/TestimonialsSlider.jsx
import React from 'react';
import { testimonialsData } from '../../data/testimonialsData'; // Your testimonials data

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow'; // Example effect

// import required modules
import { Pagination, Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';

// Import custom CSS for the slider and testimonial cards
import '../../styles/components/testimonialsSlider.css'; // We'll create this

// Import an icon for quotes
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="testimonial-card">
            <div className="testimonial-card-header">
                {testimonial.image ? (
                    <img
                        src={testimonial.image} // Assuming paths are relative to public folder
                        alt={testimonial.name}
                        className="testimonial-author-image"
                    />
                ) : (
                    <div className="testimonial-author-placeholder-image">
                        {testimonial.name.charAt(0)} {/* First letter as placeholder */}
                    </div>
                )}
                <div className="testimonial-author-info">
                    <h4 className="testimonial-author-name">{testimonial.name}</h4>
                    {testimonial.role && <p className="testimonial-author-role">{testimonial.role}</p>}
                    {testimonial.company && <p className="testimonial-author-company">{testimonial.company}</p>}
                </div>
            </div>
            <div className="testimonial-card-body">
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-quote">{testimonial.quote}</p>
            </div>
        </div>
    );
};


const TestimonialsSlider = () => {
    if (!testimonialsData || testimonialsData.length === 0) {
        return (
            <div className="container section-padding text-center">
                <p>No testimonials available at the moment.</p>
            </div>
        );
    }

    return (
        <section className="testimonials-slider-section section-padding">
            <div className="container">
                <header className="section-header text-center">
                    <h2 className="section-title">What People Say</h2>
                    <p className="section-subtitle">
                        Hear from clients and collaborators about their experience working with me.
                    </p>
                </header>

                <Swiper
                    effect={'coverflow'} // Example effect
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'} // Or a number like 1, 2, 3 depending on desired view
                    loop={testimonialsData.length > 2} // Loop if enough slides
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 5000, // 5 seconds
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    navigation={testimonialsData.length > 1} // Show navigation if more than one slide
                    modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                    className="testimonials-swiper"
                    breakpoints={{
                        // When window width is >= 320px
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        // When window width is >= 768px
                        768: {
                            slidesPerView: 2, // Show 2 slides on tablets
                            spaceBetween: 30
                        },
                        // When window width is >= 1024px
                        1024: {
                            slidesPerView: testimonialsData.length > 2 ? 2.5 : testimonialsData.length, // Show 2.5 or less for coverflow
                            spaceBetween: 40
                        }
                    }}
                >
                    {testimonialsData.map((testimonial) => (
                        <SwiperSlide key={testimonial.id} className="testimonial-swiper-slide">
                            <TestimonialCard testimonial={testimonial} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TestimonialsSlider;