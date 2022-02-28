import React from 'react';
import "./BrandPage.css";

function BrandPage() {
    // const Location=()=>{

        useEffect(()=>{
            var container = document.getElementById('map');
            var options = {
                center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
                level: 3
            };

            var map = new kakao.maps.Map(container, options);
            var markerPosition  = new kakao.maps.LatLng(37.365264512305174, 127.10676860117488); 
            var marker = new kakao.maps.Marker({
                position: markerPosition
            });
            marker.setMap(map);
        
        }, [])
        
    return (
        
        <div className="pageWrapper">
            <section className="top-picture" />
            <div className="title">
                <h3>오늘의 꽃 디자인을 확인하세요</h3>
                <br />
                <h2>오시는 길</h2>
                <div id="map" style={{width:"500px", height:"400px"}}></div> 
            </div>
        </div>
    
    )
}

export default BrandPage;