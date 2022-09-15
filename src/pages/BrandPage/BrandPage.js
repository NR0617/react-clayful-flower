import React, { useRef, useEffect, useState } from "react";
import "./BrandPage.css";
import flower_01 from './BrandPageImage/basket-g88f898c39_1920(1).jpg';
import flower_02 from './BrandPageImage/bouquet-g943fd25b1_1920(1).jpg';
import flower_03 from './BrandPageImage/roses-g8b4353e8f_1920.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function BrandPage() {

    // const options = {
    //     //지도를 생성할 때 필요한 기본 옵션
    //     center: new window.kakao.maps.LatLng(33.500685465347935, 126.52966788266464), //지도의 중심좌표.
    //     level: 3, //지도의 레벨(확대, 축소 정도)
    // };
    const container = useRef(null); //지도를 담을 영역의 DOM 레퍼런스

    const [KakaoMap, setKakaoMap] = useState(null);
    
    const initMap = () => {
        const center = new window.kakao.maps.LatLng(33.50042790199649, 126.52955418761424);
        const options = {
        center,
        level: 3,
        };
        const map = new window.kakao.maps.Map(container.current, options);
        setKakaoMap(map);

        let marker = new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(33.50042790199649, 126.52955418761424),
            // title: position.longitude,
            image: null,
            clickable: true,
        });
        
        marker.setMap(map);
    };
    
    useEffect(() => {
        initMap();
    }, []);

    // useEffect(() => {
    //     new window.kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
    //     return () => {};
    // }, []);

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
                <p className="desc">매주 새롭게 바뀌는<br />오늘의 꽃 디자인을 확인하세요</p>
                    <p className="text-margin">오시는 길</p><br/><p>제주특별자치도 제주시 중앙로 215</p>
                    <div className="map-align">
                        <div
                            className="map"
                            id="KakaoMap"
                            style={{ width: "500px", height: "500px",}}
                            ref={container}
                            >
                        </div>
                    </div>
                <p>T. 010-0000-0000</p>
            </div>
        </div>
    )
}

export default BrandPage;
