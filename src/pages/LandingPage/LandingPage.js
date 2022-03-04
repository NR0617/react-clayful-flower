import React, { useEffect, useState } from "react";
import clayful from "clayful/client-js";
import "./LandingPage.css";
import { Link } from "react-router-dom";

function LandingPage() {
  var Product = clayful.Product;
  const [items, setItems] = useState([]);

  useEffect(() => {
      const script = document.createElement('script');
      script.async = true;
      //에러처리
      try {
        if (window.Kakao) {
          window.Kakao.init('1178b18d2db493fcd89f112f73986343');
        }
      } catch (e) {}
      //Kakao chanel 추가 버튼 생성
          window.Kakao.Channel.createChatButton({
          container: '#kakao-talk-channel-chat-button',
          channelPublicId: '710815', // 카카오톡 채널 홈 URL에 명시된 id로 설정합니다.
          title: 'consult',
          size: 'small',
          color: 'yellow',
          shape: 'pc',
          supportMultipleDensities: true,
      });
      //Script사용을 위하여 추가
      document.body.appendChild(script);
      document.body.removeChild(script);
  }, []);
  
  useEffect(() => {
    var options = {
      query: {
        page: 1,
      },
    };

    Product.list(options, function (err, response) {
      if (err) {
        console.log(err.code);
        console.log(err.message);
        return;
      }
      console.log(response.data);
      setItems(response.data);
    });
  }, []);

  const renderCards = items.map((item) => {
    if (item) {
      return (
        <div key={item._id} className="grid-product">
          <Link to={`/product/${item._id}`}>
            <img src={item.thumbnail.url} alt={item.name} />
            <div className="grid-detail">
              <p>{item.name}</p>
              <p> From {item.price.original.formatted}</p>
            </div>
          </Link>
        </div>
      );
    }
  });

  return (
    <div>
      <section className="welcome">
        {/* <h1></h1> */}
      </section>

      <div className="chat_btn" id="kakao-talk-channel-chat-button"></div>

      <section className="product-grid">
        <div className="grid-container">
          <h2>Product</h2>
          <br />
          <div className="grid">{renderCards}</div>
        </div>
      </section>

      <section className="first-hightlight-wrapper">
        <div className="container">
          <div className="new-alert">New</div>

          <div className="title-wraper bold black">Oneul's Flower</div>

          <div className="description-wrapper black">
            오늘의 꽃을 선물하세요
          </div>

          {/* <div className="price-wrapper grey">From $999.</div> */}

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="/brand">오시는 길</a>
              </li>
              {/* <li>
                <a href="/">오시는 길</a>
              </li> */}
            </ul>
          </div>
        </div>
      </section>

      <section className="second-hightlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="title-wraper"></div>
                <div className="description-wraper">
                  
                </div>
                <div className="price-wrapper">
                  
                </div>

                <div className="links-wrapper">
                  <ul>
                    {/* <li>
                      <a href="/"></a>
                    </li>
                    <li>
                      <a href="/"></a> */}
                    {/* </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="title-wraper white">
                  
                </div>

                <div className="links-wrapper white">
                  <ul>
                    {/* <li>
                      <a href="/">Watch the PSA</a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="third-hightlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    {/* <img src={appletv} alt="apple" /> */}
                  </div>
                </div>

                <div className="tvshow-logo-wraper">
                  {/* <img src={banker} alt="apple" /> */}
                </div>

                <div className="watch-more-wrapper">
                  {/* <a href="/">Watch now on the Apple TV App</a> */}
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    {/* <img src={series5} alt="apple" /> */}
                  </div>
                </div>
                <div className="description-wraper">

                  <br />
                </div>
                <div className="links-wrapper">
                  <ul>
                    {/* <li>
                      <a href="/">Learn more</a>
                    </li>
                    <li>
                      <a href="/">Buy</a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fourth-hightlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    {/* <img src={arcade} alt="apple" /> */}
                  </div>
                </div>
                <div className="description-wraper white">
                </div>
                <div className="links-wrapper">
                  <ul>
                    {/* <li>
                      <a href="/">
                        Play now<sup>2</sup>
                      </a>
                    </li> */}
                    {/* <li>
                      <a href="/">Learn about Apple Arcade</a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="title-wraper">
                  
                </div>
                <div className="description-wraper">
                  
                </div>
                <div className="links-wrapper">
                  <ul>
                    {/* <li>
                      <a href="/">Learn more</a>
                    </li>
                    <li>
                      <a href="/">Apply now</a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;