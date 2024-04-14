import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const products = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(addCart(product));
  };

  const handleRemove = (product) => {
    dispatch(delCart(product));
  };

  const totalPrice = products.reduce(
    (total, product) => total + product.qty * product.price,
    0
  );

  return (
    <div className="container">
      <h2 className="text-center mt-4 mb-4">Your Cart</h2>
      {products.map((product) => (
        <div key={product.id} className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={product.image}
                alt={product.title}
                className="img-fluid p-5"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                  Quantity: {product.qty} | Price: ${product.price}
                </p>
                <div className="btn-group" role="group">
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => handleRemove(product)}
                  >
                    <i className="fa fa-minus"></i>
                  </button>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => handleAdd(product)}
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="text-end fs-3 fw-bolder">Total Price: ${totalPrice}</div>
      <div className="text-center">
        <NavLink to="/pay" className="btn btn-primary my-5 px-5 fs-3 py-3">
          PAY NOW
        </NavLink>
      </div>
    </div>
  );
};

export default Cart;
