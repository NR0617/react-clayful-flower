import './ProductListPage.css';
import flower_01 from './ProductImage/basket-g88f898c39_1920(1).jpg';
import flower_02 from './ProductImage/bouquet-g943fd25b1_1920(1).jpg';
import flower_03 from './ProductImage/roses-g8b4353e8f_1920.jpg';
import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        };
    return (
        <div className='pageWrapper'>
            <div className='title'>
                <h2>오늘의 꽃 디자인을 확인하세요</h2>
            </div>
            <Slider {...settings}>
                <div className='container_item'>
                    <img src={flower_01} />
                </div>
                <div className='container_item'>
                    <img src={flower_02} />
                </div>
                <div className='container_item'>
                    <img src={flower_03} />
                </div>
            </Slider>
        </div>
        );
    }
}
