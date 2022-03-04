import React, { useRef, useEffect, Component } from "react";
import "./BrandPage.css";
import flower_01 from '../ProductListPage/ProductImage/basket-g88f898c39_1920(1).jpg';
import flower_02 from '../ProductListPage/ProductImage/bouquet-g943fd25b1_1920(1).jpg';
import flower_03 from '../ProductListPage/ProductImage/roses-g8b4353e8f_1920.jpg';
import Slider from "react-slick";

function BrandPage() {

    const options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new window.kakao.maps.LatLng(33.500685465347935, 126.52966788266464), //지도의 중심좌표.
        level: 3, //지도의 레벨(확대, 축소 정도)
    };

    const container = useRef(null); //지도를 담을 영역의 DOM 레퍼런스

    useEffect(() => {
        new window.kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
        return () => {};
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1400,
    }


    return (
        
        <div className="pageWrapper">
            {/* <section className="top-picture" /> */}
            <div className="title">
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
                <div className="desc">
                    <h3>매주 새롭게 바뀌는</h3>
                    <br />
                    <h3>오늘의 꽃 디자인을 확인하세요</h3>
                    
                </div>
                <div className="text-margin">
                    <h2>오시는 길</h2>
                    <div className="map-align">
                        <div
                            className="map"
                            style={{ width: "500px", height: "500px",}}
                            ref={container}
                            >
                        </div>
                    </div>
                </div>
                <p>T. 010-0000-0000</p>
            </div>
        </div>
    )
}

export default BrandPage;
