import React from "react";
import { Link, NavLink } from "react-router-dom";
// import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
// import payImg from "../../img/footer-payment.png";

const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="pb-4">
              <NavLink to="/" className="nav-link">
                <h1 className="fs-1 sm:fs-3 text-warning fw-bolder ">
                  Tr. <span className="text-primary">G</span>
                </h1>
              </NavLink>
            </div>
            <div>
              <p>Vĩnh Tuy - Hai Bà Trưng - Hà Nội</p>
              <p>
                <a to="/" className="nav-link" href="mailto:xyz@gmail.com">
                  xyz@gmail.com
                </a>
              </p>
              <p>
                <a className="nav-link" href="tel:0987654321">
                  0987654321
                </a>
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="font-medium mb-1">THÔNG TIN</h5>
            <ul>
              <li>
                <NavLink to="/goccamhung" className="nav-link">
                  Câu chuyện củNavLink chúng tôi
                </NavLink>
              </li>
              <li>
                <NavLink to="/goccamhung" className="nav-link">
                  Thiết kế
                </NavLink>
              </li>
              <li>
                <NavLink to="/goccamhung" className="nav-link">
                  Tài liệu củNavLink chúng tôi
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="font-medium mb-1">TRỢ GIÚP</h5>
            <ul>
              <li>
                <NavLink to="#" className="nav-link">
                  Liên hệ & Hỏi đáp
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="nav-link">
                  Trả lại & Hoàn tiền
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="nav-link">
                  Vận chuyển & Giao hàng
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="font-medium mb-1">DỊCH VỤ</h5>
            <ul>
              <li>
                <NavLink to="#" className="nav-link">
                  Vận chuyển nhanh
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="nav-link">
                  Chăm sóc nội thất
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="nav-link">
                  Thẻ quà tặng
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ fontSize: "10px" }} className="container py-3 border-top">
        <div className="d-flex  justify-content-center">
          <h6 style={{ fontSize: "10px" }}>© 2023 TrG . xyz Store</h6>
          <ul className="d-flex gap-4 font-semibold">
            <li>PRIVACY</li>
            <li>TERMS</li>
            <li>*PROMO T&CS APPLY</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
