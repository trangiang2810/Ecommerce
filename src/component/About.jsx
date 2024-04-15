import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <div className="lead mb-4">
              <p>
                Welcome to our fashion online store - where you can explore and
                shop the latest fashion trends. Here, we pride ourselves on
                providing you with a unique and convenient online shopping
                experience.
              </p>
              <p>
                With a variety of styles, colors, and materials, we are
                committed to offering you quality fashion products from
                reputable brands. Whether you're looking for everyday attire,
                workwear, or special occasion outfits, we always have a wide
                selection to meet your needs.
              </p>
              <p>
                Explore with us and elevate your style like never before. Place
                your order today and experience excellent online shopping
                service with us!
              </p>
            </div>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="https://i.pinimg.com/originals/9c/9e/9a/9c9e9ade2f78dfbec27da41d97a27769.jpg"
              alt="About Us"
              className="w-100 rounded-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
