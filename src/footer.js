import './css/footer.css';

function Footer() {
    return(
        <footer className="footer">
        <div className="footer_wrap">
            <div className="footer_cetner">
                <div className="footer_logo">
                    <div className="footer_logo_box">
                        <a href="">
                            <img src="./img/logo_2_white.png" alt="#"/>
                        </a>
                    </div>
                    <ul className="footer_menu">
                        <li><a href="#">COMPANY</a></li>
                        <li><a href="#">사이트맵</a></li>
                        <li><a href="#">이용약관</a></li>
                        <li><a href="#">이메일 무단 수집거부</a></li>
                    </ul>
                </div> 
                <div className="footer_copyright">
                    <div className="ft_left_box">
                        <div className="ft_left_box_fr">
                            <ul className="footer_list">
                                <li className="footer_item">대표자 : 고성욱</li>
                                <li className="footer_item">문의전화 : <a href="tel:042-0000-0000" className="footer_link_tel">042) 0000-0000</a></li>
                                <li className="footer_item">사업장 등록번호 : 000-00-00000</li>
                            </ul>
                            <address className="footer_addr">
                                대전광역시 서구 둔산대로 117번길 95
                                <br className="hide show_640"/>
                                만년동 리더스타운 7층
                            </address>
                            <p className="footer_copy">
                                (C) Copyright merlot.lab All Rights Reserved.
                            </p>
                        </div>
                    </div>
                    <div className="ft_right_box">
                        <ul className="footer_etc_list">
                            <li className="footer_etc_item"><a href="#" className="footer_etc_link"><i className="footer_store_icon xi-facebook-official xi-2x"></i>페이스북</a></li>
                            <li className="footer_etc_item"><a href="#" className="footer_etc_link"><i className="footer_youtube_icon xi-2x xi-youtube-play"></i>유튜브 채널</a></li>
                            <li className="footer_etc_item"><a href="#" className="footer_etc_link"><i className="footer_youtube_icon xi-2x xi-instagram"></i>인스타그램</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;