import React from "react";
import Products from "./Products";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div classNameName="hero">
      <div className="card text-bg-dark border-0">
        <img
          src="https://img3.thuthuatphanmem.vn/uploads/2019/10/14/banner-thoi-trang-dep-nhat-hien-nay_113856288.jpg"
          className="card-img"
          alt="Background"
          //   height="550px"
        />
        <div className="card-img-overlay d-flex flex-column">
          <div classNameName="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
            <p className="card-text">
              <small>Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-5">
        <div className="row">
          <div className="col-md-6">
            <img
              className="img-fluid"
              src="http://noithathot.com/cong-trinh/tranghannah/thiet-ke-shop-thoi-trang-nu-40m2-2.jpg"
              alt="img"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-between max-md:pl-3 max-md:pt-3 max-xl:pl-5 max-xl:pt-4 xl:pl-8 xl:pt-6">
            <div className="mb-4">
              <p className="text-secondary mb-2 fw-bolder">
                UP TO 30% OFF ALL ITEMS
              </p>
              <h1 className="fs-1 md:fs-3 mb-0 fw-bold">FASHION STYLE</h1>
              <h1 className="fs-4 md:fs-3 mb-3 ">Collection</h1>
              <button className="btn btn-dark px-4 py-2 mt-3">
                <NavLink
                  to="/products"
                  className="text-light nav-link fw-bolder"
                >
                  BUY NOW
                </NavLink>
              </button>
            </div>
            <img
              className="img-fluid"
              src="https://www.deco-crystal.com/wp-content/uploads/2021/11/thiet-ke-shop-thoi-trang-nam.jpg"
              alt="img"
            />
          </div>
        </div>
      </div>

      <form className="w-full mt-5">
        <div
          style={{ background: "#a5c4e2b0" }}
          className=" px-4 xs:px-10 py-8 xs:py-12 block"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-4 py-5">
                <img
                  className="img-fluid mx-auto d-block pb-4"
                  src="https://cdn0.iconfinder.com/data/icons/cosmo-layout/40/box_opened-1024.png"
                  alt=""
                  width="35%"
                />

                <h2 className="text-center py-3 font-weight-bold fs-4">
                  DELIVERY NATIONWIDE
                </h2>
                <p className="text-center text-muted">
                  Sit back and relax! We will bring the best products to you.
                </p>
              </div>
              <div className="col-md-4 py-5">
                <img
                  className="img-fluid mx-auto d-block pb-4"
                  src="https://png.pngtree.com/png-vector/20220511/ourmid/pngtree-approved-or-certified-medal-icon-png-image_4573209.png"
                  alt=""
                  width="35%"
                />
                <h2 className="text-center py-3 font-weight-bold fs-4">
                  BUY WITHOUT WORRY
                </h2>
                <p className="text-center text-muted">
                  Returns can be made within 7 days without any fees
                </p>
              </div>
              <div className="col-md-4 py-5">
                <img
                  className="img-fluid mx-auto d-block pb-4"
                  src="https://www.leikevakschilder.nl/wp-content/uploads/2019/11/wallpaper-roll-icon-61303.png"
                  alt=""
                  width="35%"
                />
                <h2 className="text-center py-3 font-weight-bold fs-4">
                  FROM MORE THAN 100 TYPES OF FABRIC
                </h2>
                <p className="text-center text-muted">
                  Selected and combined. Create your own one-of-a-kind piece of
                  furniture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Products />
    </div>
  );
};

export default Home;
