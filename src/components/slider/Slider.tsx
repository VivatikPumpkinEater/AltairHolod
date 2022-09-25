import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gippo from '../../assets/logo-Hippo.png'
import crown from '../../assets/crown-removebg-preview.png'
import bel from '../../assets/belm-removebg-preview.png'
import pros from '../../assets/pros.png'
import s from './Slider.module.scss'
export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 1500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed:3000,
            arrows:false
        };
        return (
            <div className={s.sliderWrapper}>
                <Slider {...settings}>
                    <div className={s.slide}>
                        <img  className={s.slide} src={gippo}/>
                    </div>
                    <div>
                        <img className={s.slide1} src={crown}/>
                    </div>
                    <div>
                        <img className={s.slide2}src={bel}/>
                    </div>
                    <div>
                        <img className={s.slide3}src={pros}/>
                    </div>
                </Slider>
            </div>
        );
    }
}