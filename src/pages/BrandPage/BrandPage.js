import React, { useRef, useEffect } from "react";
import "./BrandPage.css";


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



    return (
        
        <div className="pageWrapper">
            <section className="top-picture" />
            <div className="title">
                <h3>오늘의 꽃 디자인을 확인하세요</h3>
                <br />
                <h2>오시는 길</h2>
                <div className="map-align">
                    <div
                        className="map"
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
