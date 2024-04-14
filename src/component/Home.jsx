import React from "react";
import Products from "./Products";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div classNameName="hero">
      <div className="card text-bg-dark border-0">
        <img
          src="/assets/banner.jpg"
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
            <img className="img-fluid" src="./assets/collect1.jpg" alt="img" />
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
                  to="/sanpham"
                  className="text-light nav-link fw-bolder"
                >
                  BUY NOW
                </NavLink>
              </button>
            </div>
            <img className="img-fluid" src="./assets/collect2.jpg" alt="img" />
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
                  src="./assets/icon/service1.png"
                  alt=""
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
                  src="./assets/icon/service2.png"
                  alt=""
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
                  src="./assets/icon/service3.png"
                  alt=""
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
