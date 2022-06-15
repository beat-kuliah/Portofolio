import React from 'react'
import './Portofolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Sidebar from '../../img/sidebar.png'
import Ecomerce from '../../img/ecommerce.png'
import HOC from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
import 'swiper/css'
import { themeContext } from '../../Context'
import { useContext } from "react"

function Portofolio() {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    
    return (
        <div className="portofolio" id='Portofolio'>

            {/* Heading */}
            <span style={{color: darkMode? 'white' : ''}}>Recent Projects</span>
            <span>Portofolio</span>

            {/* Slider */}
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className="portofolio-slider"
            >
                <SwiperSlide>
                    <img src={Sidebar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecomerce} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={MusicApp} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HOC} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portofolio