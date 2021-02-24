import React from "react";
import {ReactComponent as FooterLogo} from '../../assets/svg/teamLogo.svg';
import "../../../node_modules/font-awesome/css/font-awesome.min.css"

const Footer = () => {
  return <footer id="dk-footer" className="dk-footer mt-5">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-4">
          <div className="dk-footer-box-info">
            <a href="/" className="footer-logo">
            <FooterLogo className="footer-logo col-8" />
            </a>
            <p className="footer-info-text">
              Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
            </p>
            <div className="footer-social-link">
              <h3>Follow us</h3>
              <ul className="social-list">
                <li>
                  <a href="/">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="/">
                  <i className="fa fa-github" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-awarad">
            <img src="images/icon/best.png" alt="" />
              <p>Clean Coders 2021</p>
              </div>
          </div>
          <div className="col-md-12 col-lg-8">
            <div className="row">
              <div className="col-md-6">
                <div className="contact-us mt-3">
                  <div className="contact-icon">
                    <i className="fa fa-map-o" aria-hidden="true" />
                  </div>
                  <div className="contact-info">
                    <h3>Tehran Iran</h3>
                    <p>5353 Road Avenue</p>
                  </div>
                </div>
              </div>
                  <div className="col-md-6">
                <div className="contact-us contact-us-last mt-3">
                  <div className="contact-icon">
                    <i className="fa fa-volume-control-phone" aria-hidden="true" />
                  </div>
                  <div className="contact-info">
                    <h3>+98 987 654 3210</h3>
                    <p>Give us a call</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-12 col-lg-6">
                <div className="footer-widget footer-left-widget">
                  <div className="section-heading">
                    <h3>About us</h3>
                    <span className="animate-border border-black"></span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare commodo odio a commodo. Duis diam ex, semper ullamcorper risus ac, laoreet lacinia erat. Quisque hendrerit sit amet lectus sit amet sodales.</p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="footer-widget">
                  <div className="section-heading">
                    <h3>Contacts</h3>
                    <span className="animate-border border-black"></span>
                  </div>
                  <p>Reference site about Lorem Ipsum, giving information on its origins, as well.</p>
                  <ul className="contacts">
                    <li>
                        <span><i className="fa fa-phone" /></span>
                        <span> +98 987 654 3210</span>
                    </li>
                    <li>
                        <span><i className="fa fa-envelope" /></span>
                        <span> cleancoders@io.com</span>
                    </li>
                    <li>
                        <span><i className="fa fa-pin" /></span>
                        <span> Tehran, Iran</span>
                    </li>
                </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="copyright">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-x-12">
                <span>Copyright © 2021, All Right Reserved</span>
              </div>
            </div>
          </div>
        </div>
</footer>
;
};

export default Footer;
