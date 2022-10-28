import './css/App.css';
import { useEffect, useState } from "react";
import Footer from './footer.js';
import './scroll.js';
import prod_1 from './img/img_main_product_banner_1_1.png';
import prod_2 from './img/img_main_product_banner_1_2.png';
import prod_3 from './img/img_main_product_banner_1_3.png';
import getImageView from './img/getImageView.png';

function App() {
  return (
    <>
    <main className="l_content" id="content" tabindex="0">
    <div className='main'>
      <figure>
            <nav className="tnb">
                <div className="tnb_center">
                    <ul className="tnb_left">
                        <li className="tnb_sns_list">
                            <a href="#" className="tnb_sns_link"><i className="xi-facebook"></i></a>
                        </li>
                        <li className="tnb_sns_list">
                            <a href="#" className="tnb_sns_link"><i className="xi-twitter"></i></a>
                        </li>
                        <li className="tnb_sns_list">
                            <a href="#" className="tnb_sns_link"><i className="xi-instagram"></i></a>
                        </li>
                    </ul>
                    <ul className="tnb_right">
                        <li className="user_service_list">
                            <a href="#">1대1문의</a>
                        </li>
                        <li className="user_service_list">
                            <a href="#">FAQ</a>
                        </li>
                        <li className="user_service_list">
                            <a href="#">로그인</a>
                        </li>
                        <li className="user_service_list">
                            <a href="#">회원가입</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <nav className="gnb">
                <div className="gnb_center">
                    <article className="gnb_left">
                        <figure className="gnb_left_img_box">
                            <img src="./img/logo_2.png" alt="#"/>
                        </figure>
                    </article>
                    <ul className="gnb_right">
                        <li className="gnb_right_list">
                            <a href="#">1인 GA모집</a>
                        </li>
                        <li className="gnb_right_list">
                            <a href="#">회사소개</a>
                        </li>
                        <li className="gnb_right_list">
                            <a href="#">수수료</a>
                        </li>
                        <li className="gnb_right_list">
                            <a href="#">영업지원프로그램</a>
                        </li>
                        <li className="gnb_right_list">
                            <a href="#">QNA</a>
                        </li>
                        <li className="gnb_right_list">
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* menu */}
            
            <section className="page">
                <section className="re_main">
                    <div className="re_main_head">
                        <div className="re_main_head__bg" aria-hidden="true">
                            <div className="re_main_head__shape_wrap">
                                <div className="re_main_head__shape re_main_head__shape__left_top"></div>
                                <div className="re_main_head__shape re_main_head__shape__left_bottom"></div>
                                <div className="re_main_head__shape re_main_head__shape__right_top"></div>
                                <div className="re_main_head__shape re_main_head__shape__right_bottom"></div>
                            </div>
                        </div>
                        <div className="re_main_top_title_box">
                            <h2 className="title_st5">타이틀</h2>
                            <div className="re_main_top_tab">
                                <div className="re_main_top_tab__top">
                                    <div className="title_st5_box">
                                        <h4 className="title_st5 sr_only">
                                            개인기업
                                        </h4>
                                        <p className="text_st5">
                                            계약확인 및 주요 업무처리를 비대면으로 쾌적하게
                                        </p>
                                    </div>
                                </div>
                                <div className="re_main_top_tab__bottom">
                                    <div className="sub_link_box">
                                        <ul>
                                            <li><a href="">간편비밀번호</a></li>
                                            <li><a href="">카카오페이</a></li>
                                            <li><a href="">공동인증서</a></li>
                                            <li><a href="">휴대폰</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="re_main_menu">
                            <div className="re_main_menu_list">
                                <button className="re_main_menu_button active" type="button" id="tab_list_1" aria-selected="true" aria-controls="tab_list_1">
                                    <span className="re_main_menu_underline">자주찾는 메뉴</span>
                                </button>
                                <button className="re_main_menu_button" type="button" id="tab_list_2" aria-selected="false" aria-controls="tab_list_2">
                                    <span className="re_main_menu_underline">고객안내 메뉴</span>
                                </button>
                            </div>
                            <div className="re_main_menu_panel" role="tabpanel" id="tab_panel_1" aria-labelledby="tab_list_1" >
                                <div>
                                    <a href="" className="re_main_menu_anchor">
                                        보험계약 <br/>
                                        조회
                                        <i></i>
                                    </a>
                                    <a href="" className="re_main_menu_anchor">
                                        보험료 <br/>
                                        납입
                                        <i></i>
                                    </a>
                                    <a href="" className="re_main_menu_anchor">
                                        보험계약 <br/>
                                        대출
                                        <i></i>
                                    </a>
                                    <a href="" className="re_main_menu_anchor">
                                        보험금 <br/>
                                        청구
                                        <i></i>
                                    </a>
                                </div>
                            </div>
                            {/* <div className="re_main_menu_panel" role="tabpanel" id="tab_panel_2" aria-labelledby="tab_list_2" >
                                <div>
                                    <a href="" className="re_main_menu_anchor">
                                        ARS <br/>
                                        상담안내
                                        <i></i>
                                    </a>
                                    <a href="" className="re_main_menu_anchor">
                                        고객상담 <br/>
                                        안내
                                        <i></i>
                                    </a>
                                    <a href="" className="re_main_menu_anchor">
                                        소비자정보 <br/>
                                        포털
                                        <i></i>
                                    </a>
                                    <a href="" className="re_main_menu_anchor">
                                        보험금청구 <br/>
                                        서류안내
                                        <i></i>
                                    </a>
                                </div>
                            </div> */}
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    <a href="">
                                        <img src={getImageView} alt=""/>
                                    </a>
                                </div>
                                <div className="re_main_menu_swiper__controller"></div>
                            </div>
                        </div>
                    </div>
                    <div className="re_main_content">
                        <div className="re_main_board">
                            <h2 className="sr_only">공지사항/이벤트</h2>
                            <ul className="re_main_board_list">
                                <li className="re_main_board_item">
                                    <span className="main_board_date">2022.07.12</span>
                                    <a href="#" className="re_main_board_anchor" onclick="">[공지사항] 홈페이지 시스템 정비 안내</a>
                                </li>
                                <li className="re_main_board_item">
                                    <span className="main_board_date"></span>
                                    <a href="#" className="re_main_board_anchor" onclick="">[공지사항] 시스템 정비작업에 따른 마이페이지 일부 서비스 이용 제한 안내</a>
                                </li>
                                <li className="re_main_board_item">
                                    <span className="main_board_date"></span>
                                    <a href="#" className="re_main_board_anchor" onclick="">[공지사항] 4세대 실손의료보험 전환 안내</a>
                                </li>
                            </ul>
                        </div>
                        <div className="re_main_product">
                            <div className="re_main_product_tab">
                                <div className="re_main_product_list">
                                    <button className="re_main_product_button active" type="button" id="tab_list8_1" aria-selected="true" aria-controls="tab_panel8_1">보험상품</button>
                                    <button className="re_main_product_button" type="button" id="tab_list8_2" aria-selected="false" aria-controls="tab_panel8_2">금융상품</button>
                                    <button className="re_main_product_button" type="button" id="tab_list8_3" aria-selected="false" aria-controls="tab_panel8_3">퇴직연금</button>
                                </div>
                                <div className="re_main_product_panel">
                                    <h2 className="sr_only">보험상품</h2>
                                    <ul className="re_main_product_list_fr">
                                        <li className="re_main_product_item">
                                            <a href="#" className="main_product_anchor" onclick="">
                                                <img src={prod_1} alt=""/>
                                            </a>
                                        </li>
                                        <li className="re_main_product_item">
                                            <a href="#" className="main_product_anchor" onclick="">
                                                <img src={prod_2} alt=""/>
                                            </a>
                                        </li>
                                        <li className="re_main_product_item">
                                            <a href="#" className="main_product_anchor" onclick="">
                                                <img src={prod_3} alt=""/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </figure>
    </div>
    </main>
    <Footer />
    </>
  );
}

export default App;
