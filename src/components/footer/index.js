import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return <footer id="dk-footer" className="dk-footer mt-5">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-4">
          <div className="dk-footer-box-info">
            <a href="index.html" className="footer-logo">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX///8AAAB2dnb39/f19fX7+/vb29vy8vKvr6/u7u6rq6vq6urf399XV1fn5+fCwsIyMjKbm5tqamrOzs7V1dW7u7ugoKCDg4OlpaWRkZFmZmaLi4sjIyPIyMhdXV3Q0NBMTEw7Ozt+fn4bGxsUFBQ6OjpISEgzMzNzc3MYGBgoKCgLCwtJSUnAcRnPAAAMF0lEQVR4nO2d6ZqivBKAG1dUFFFx13br1bn/6zvtBoFUJZWQsHyH99fM00FSRmpLpXh7q6mpqampqampqampqVFmtu8WPQXLuM5n0VOwTMdxpsShvc+T1anYwnGOxJEzx5lYnYolLo4T0ka+O47j252MFX7/5t0jjZz+jXTalqdjgfHftMekkbubhA3L07HATUKaPr1L6MxsT8g42/u8KdrmIaHTsj4lwzym7WxH0pFPCQ/Wp2SWtvMikA19Slg1k+FFEjpbidXwXwOrpW1ch+EadFrNG61ub7pMDw2jcfsiZqrL2kFJa81+/Kd/zUImq0MXF3CRHhuIxC8tK0y+vceNXSQGVMQLx5bwF1qiY3LM1c19uhoMYQFBe9Dihp37pfdS57CAG3BwCA1dlPt59KE5O84KHo1p3e956O/e3zue53Wb5VrUd3jGiD1vw6M5pK5RfiAr+IUM78PDOda5CiEiQGbIW4kHvzQBj2XxBbxPZIaYz4mseBrOTSiIbgOdIpbQGFPkA81oEQjWA4uMXPySGEQJF8Dp+nEKXN/vryaX1CR38BW8tQd4z1cKKt58y84SGbWXy3cZ5DpvJcJ4IZHAbykXcFwWHQoTRRjwk7QTifZcwXIL+PdbfS4jmMeYyQUk5pSLpPlxnyikaCgCllTJJBkjMwVDihTz/KerwT0Y5jfa0CQAwyH3yepx0yfp57B5IAjolNhOJFlzupTyCy1VvCShlwp9moJMI0tR89Vg4ZyZ/3Vo8jmVSEg96bLr4cllq9wS/imbTvzvDilewtJW1aA58LzZzvf90A0WqFLFcgIlg1I1NNtAAl6sz80IIbEcI+R/uRXZaQvJNRacjBXRpJ6C2U7lM8qSmZHxN1VygNf6x0pY/rDpwVlpd57dZitXGh/ntgdFrP26Eee/t/bmZJbJbbbyepOIyCXH9gBKx/dttleFWtqXiJUpTv1+zFdhFZ9bj//szcksrziJWkz79lI31NrUwonsuIIffd/b+bU3J6Mwu58Xskrt3cfbnJZBEinfX5do4+YVsvjpzbZDMG212+1ma+Svxnh4tFVTTkXiiMA3PW9l0dUID4WbgxOBDJuq1PCdcfk24lxoReqF8SU8VESPSMD3d6uT6hWD1LZV8/QIBFZXU40dMwLo1oRCuFhq0MKTspT+ZAUpv6yORy2hiyoZpyO/ugKgOqZMBYYZQH+gNyriTwsRVjkdip6dCRbOYdN3wzB0+wvucfyvWAqGMFluWhGHWo3pVywg7Uhp9YjL8yp2/I7O6FXKba4StjkYjUadO95o1GsWflrhqXIyRk2twTScn76HicJVhvPHcHJaLcNpr4CCxnU2CT0/OH1igkH8fp4CP99Uz1BTwoEfrNMV1XQu+03o5bWgW+XnsDkN9vrCMXwswjx8qVslFP1oYS9cfJgQLuI66Vt3+jeOMyQNbPoLlUdOgXXfarVjm2TxB3088jLBeGOxBOIv6JBslY7mZn+aCPbONl6EqfqcxLuzXdn5uXbxLFuz/yWfl1E+qTthRphNchbvwXdeLoFLLMe0wDGH5HSTUrNvka3l+rkuWHipTLBsDK/6V9tz63oL+e0pPMxs671PrJDnWNhpntc0JF+izuP9pPkRFhSrIKmqSrJYJ8ROIotZGf6thvqPDU/6wzt6jl/foHze0aB80Ja/MCuNYu48tRkFGgHoe9L5aYCJkXTnzEhUywC4mPrxiYGctTEN+gIIyaitNiDWGTXOyLyHBtQEEvs0IGTy5Gin8tQACjs1jeKLDH2cMt4ZBriPoFKJxJemj9O1EuECtoJ8Og5Hy26Mst8XArDTetYwiYZORRoPZQawFaQzxjKU91iyqTccw7aCQfH8ow0lis3D1JeppFKtCQiVkBnT2AqrSOjwIebgY1lw4G4/zz8tMrtP5J0k6uFtjMXo7Q1JNgL1OZGtmL21+8Q2WxjEJE4v003Gj7scyVOIbMV9J2aXbZOAVkeZ5Xv8fm0YIYE7YCuikc9saC9TNo9SzKyf7b3O43ANtnFCWxHvGYb63tSHXEDdYNTZJ3rawBICZjlW2+yuqIe3WZMgrRYdaH7wKrVrC0sIxBXf0R+Tn9BaavrjskNpR50PPfJeISwhcMM4g8DtbE/1HhixgIRmXhwTyLEHNQ0QVzCWCdi77wYaOT6hbyPol4xwmcPJoCM0GLAVTBoWrk7w1f1yUSj1Lb88wQFpzYdYfMBWHGUS/oVxqm6d4EyyYih6EuznQUYVsBXsKRa8wqS9VCuFwF0bFX9iLPaQIAmFtkJSj7wj9DOMQLuQKET1Q1naAPrSAZeKNXuSrfqRQmIa+/bJVnYjzfyA0Qkwjs02z6WZT/dInOAZvp4aay9lM+mtwDQ5EFekopiGtAyKWkEAm32av8a9KSENGh0AySJuy27cl319XdI2H1z7+09+ofR4ArJ8dwC3/wgMky4kaecY2kFtUi4UNxYQKjzASiEOxpe4iT1pEaFUPykhJKj87knuLLEVSUQLSUoiQSEGKUuCZiXl9gqwLyLljS8kKYsEFR0eKRfC7Ttly3cHuE5yRQP2mWhpJEBjka6Dkuc0dwP4fcun+gEtJM0x4b8dWujL2RlyoEqxFRD8E0mTkFc1U9J1KcdLoYRPHFeIGKc2c2hrwe8A0XLr7BfadhUSRj+8gArB6IL9zdGynbxOpHk08Z1GahlqQHsrbR0c4l85TUI+0qdt4sUujWKNFBAqq4Xbjcjbp609r9loM2adNlclLAV0osLV54DJldAk5P18WqY56ZZOycWFwLkG+u7IZ1Iv6kqovoY3BitaMizD3jZX+0yTkM/r0W4IeBn+kXAdEJKQ/ITtkk/l6a4hTbOBDrFcrQIxNyXeXoOBLE2X8pqGtiuKpMxlhxOA3Vmph3ENkH0kmsXnb0l78PGijo4oqwl8MZK80hrNxBK9Nj4ZRQqAha8GEPg4gK0QubMXbPke3yVppsDzRLJukqoVZCGB/QrBT02wfHdoWh/4Ukm5xKHs/FEbyvgBtgJ789c5kGQq27S06QG4lFjWMpQWO/ILCXwtsK2QLR/dWYQeJ3ppkvApuZNcSKA/LXSzrWz5VNLeYE5QYWcANlQsbOAIxBVQ1Zys+E5lwxQ+G6pUffUjyXyzTzXRVgglbLtKm96Izlf5CIepLJFJCKg1SHELHvCB6nEB5DlSLmT5wnfYGAmptgLVMupVRFgXR9JL1VJskG+LkZB6vgKuZ2rNNWoy0F+XVpXgHtQ6jISAWgPjSmhLUq+uBj9lr16ocGe75NV8PDOoHxr4MbyEGlUKyCdFaB9Q47ROLCEQV8AV1qmPaAW6h3WEDcr0TwB9Jc9axxICP2JYpSUkzHKYWuiQZKqdZbu4xhICtgI+iMPkD1QysRySOlrdg6sPhpHGjySkxxUvCVVKEgBkHf6zFs7/Pn2dSEIgrkCSzw+dm7GEltBEL/s5i8aMlRCIK5Dfyehm/H7gv9EhnCw1cOD+6EamFXKBkatanmrRGQCpPZmJdizXlzIBbAX2psijgfsSX2CQsWA+AdlWGOFKPG7ZNXhwG/h4i11RyD1ezB1bA2xFtsMOQhR6n1BeqkoC0Gz2Thwptc7KemzmBWCcrPW2UezKbeBcp6MQVxhA+Rhpz0SHMiAHZewBSKHRw65t4GgnkJiwYyt+9c46Zz8YCHzoMfOHAmi/XQNLvVMBsgmaaQQxGfqsetlsf062Ilt7rEy6PRdbccjaUinDlw69T8+cZE8MvF2krR32A5GMaVvxYabRqfZxcl4DGOw2Bd9AF+1T1qtU3kuv6xWCdLtWhZG2+T+4ygVbNH5Mdxjc6Xtxn8HL6zdoK6TnPjRwsxjHYbAbtZVP/6GYewCT6JwwZTGVHjHdjY6lwM6eEYHlVq2+UXWozFl8nsYMnpX2USSG0moUQzSXhfxYLbVLRvAMtxqUMslr+Rim2p0dlDnk2giaZdcw2fUTYegW+/bF2crqMzkJC3i7B0cvNOarJIi9vTLgud9GX5BwCBRenJ0bPX+l0hcAY9twO0W/aEfEaBesdZ/My2HjzsosXEzT84PGUUG238kqfLfTpdsq7UFnGrrL5TzYLBaL02Q/fLCf/NHYBPP50g2nnUEZ1GVNTU1NTU1NTU1NTc3/Lf8DTxOs94zmwrEAAAAASUVORK5CYII=" alt="footer_logo" className="img-fluid" />
            </a>
            <p className="footer-info-text">
              Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                  </p>
            <div className="footer-social-link">
              <h3>Follow us</h3>
              <ul>
                <li>
                  <a href="#">
                    <FontAwesomeIcon className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon className="fa fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- End Social link --> */}
          </div>
          {/* <!-- End Footer info --> */}
          <div className="footer-awarad">
            <img src="images/icon/best.png" alt="" />
              <p>Clean Coders 2021</p>
              </div>
          </div>
          {/* <!-- End Col --> */}
          <div className="col-md-12 col-lg-8">
            <div className="row">
              <div className="col-md-6">
                <div className="contact-us">
                  <div className="contact-icon">
                    <FontAwesomeIcon className="fa fa-map-o" aria-hidden="true" />
                  </div>
                  {/* <!-- End contact Icon --> */}
                  <div className="contact-info">
                    <h3>Tehran Iran</h3>
                    <p>5353 Road Avenue</p>
                  </div>
                  {/* <!-- End Contact Info --> */}
                </div>
                {/* <!-- End Contact Us --> */}
              </div>
              {/* <!-- End Col --> */}
                  <div className="col-md-6">
                <div className="contact-us contact-us-last">
                  <div className="contact-icon">
                    <FontAwesomeIcon className="fa fa-volume-control-phone" aria-hidden="true" />
                  </div>
                  {/* <!-- End contact Icon --> */}
                  <div className="contact-info">
                    <h3>95 711 9 5353</h3>
                    <p>Give us a call</p>
                  </div>
                  {/* <!-- End Contact Info --> */}
                </div>
                {/* <!-- End Contact Us --> */}
              </div>
              {/* <!-- End Col --> */}
            </div>
            {/* <!-- End Contact Row --> */}
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="footer-widget footer-left-widget">
                  <div className="section-heading">
                    <h3>Useful Links</h3>
                    <span className="animate-border border-black"></span>
                  </div>
                  <ul>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Projects</a>
                    </li>
                    <li>
                      <a href="#">Our Team</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Testimonials</a>
                    </li>
                    <li>
                      <a href="#">Faq</a>
                    </li>
                  </ul>
                </div>
                {/* <!-- End Footer Widget --> */}
              </div>
              {/* <!-- End col --> */}
              <div className="col-md-12 col-lg-6">
                <div className="footer-widget">
                  <div className="section-heading">
                    <h3>Contacts</h3>
                    <span className="animate-border border-black"></span>
                  </div>
                  <p>Reference site about Lorem Ipsum, giving information on its origins, as well.</p>
            </div>
                  {/* <!-- End footer widget --> */}
                </div>
                {/* <!-- End Col --> */}
              </div>
              {/* <!-- End Row --> */}
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Widget Row --> */}
        </div>
        {/* <!-- End Contact Container --> */}


        <div className="copyright">
          <div className="container justify-content-center">
            <div className="row">
              <div className="col-md-6">
                <span>Copyright © 2021, All Right Reserved</span>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Copyright --> */}
</footer>
;
};

export default Footer;
