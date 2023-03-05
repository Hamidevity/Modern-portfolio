import React from 'react';
import './testimonials.css';
import Avt1 from '../../assets/model.png';
import {Swiper, SwiperSlide} from 'swiper/react'

import {  Pagination } from 'swiper';

import 'swiper/css'
import 'swiper/css/pagination';


const Testimonials = () => {
  const data = [
    {
      avatar:Avt1 , 
      name: ' akbar ' , 
      review : 'aseryseyreuyertyuertyuertyurytuertuedrytjertjdrytj' , 
      
    },
    {
      avatar:Avt1 , 
      name: ' akbar ' , 
      review : 'aseryseyreuyertyuertyuertyurytuertuedrytjertjdrytj' , 
      
    },
    {
      avatar:Avt1 , 
      name: ' akbar ' , 
      review : 'aseryseyreuyertyuertyuertyurytuertuedrytjertjdrytj' , 
      
    },
     {
      avatar:Avt1 , 
      name: ' akbar' , 
      review : 'aseryseyreuyertyuertyuertyurytuertuedrytjertjdrytj' , 
      
    }
    
     ]



  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
                modules={[ Pagination]}
                spaceBetween={40}
                slidesPerView={1}
               
                pagination={{ clickable: true }}
               
              >
         




          {
            data.map(({avatar , name , review} , index) =>
            <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt="" />
            </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
               {review}
              </small>
          </SwiperSlide>
            )
          }
      </Swiper>
    </section>
  )
} 

export default Testimonials