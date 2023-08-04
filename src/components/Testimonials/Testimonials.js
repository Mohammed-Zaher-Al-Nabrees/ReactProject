import HeaderSection from '../HeaderSection/HeaderSection'
import './testimonials.css'
import testimonialData from './TestimonialData'
import {Pagination} from 'swiper/modules';
import {AiFillStar} from 'react-icons/ai';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const Testimonials = () => {
  
  return (
    <div className="testimonial">
        
      <div className="container">
          <HeaderSection title='Happy testimonial' desc='We are proud of our design team' />

          <Swiper className="content-testimonial"
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {
              testimonialData.map(({id,name,img,desc}) =>
                <SwiperSlide key={id} className="box">
                    <img src={img} alt="Person" />
                    <h3 style={{marginTop: '15px' , color:'#333' , fontSize:'16px'}}>{name}</h3>
                    <p>
                        {desc}
                    </p>
                    <div className="stars">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                </SwiperSlide>
              )
            }
          </Swiper>
      </div>
  </div>
  )
}

export default Testimonials