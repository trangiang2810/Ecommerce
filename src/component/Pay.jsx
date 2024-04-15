import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import FromCart from "../components/FromCart";
import { toast } from "react-toastify";
import { delAll } from "../redux/action";
const Pay = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);

  const products = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const totalPrice = products.reduce(
    (total, product) => total + product.qty * product.price,
    0
  );

  const totalProducts = products.reduce(
    (total, product) => total + product.qty,
    0
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      phone.length === 0 ||
      email.length === 0 ||
      address.length === 0
    ) {
      setError(true);
    } else if (phone.length < 10 || phone.length > 10) {
      setError2(true);
    } else {
      toast.success("Đặt hàng thành công");
      console.log(name, phone, email, address);
    }
  };
  const deleteProduct = (productId) => {
    // Dispatch action to delete product only if it exists in the state
    const existingProduct = products.find(
      (product) => product.id === productId
    );
    if (existingProduct) {
      dispatch(delAll({ id: productId }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="m-5 container pt-5">
      <div className="row">
        <div className="col-md-6">
          <h1 className="fw-bolder  fs-4 pb-4">DELIVERY ADDRESS</h1>
          <label className="d-flex flex-column pt-4">
            <span className="text-0.7rem">First and last name*</span>
            <input
              className="border p-2 "
              type="text"
              placeholder="Enter your full name"
              onChange={(e) => setName(e.target.value)}
            />
            {error && name.length === 0 && (
              <span className="text-0.7rem text-danger font-medium">
                Please enter your full name
              </span>
            )}
          </label>
          <label className="d-flex flex-column pt-4">
            <span className="text-0.7rem">Phone number*</span>
            <input
              className="border p-2 "
              type="number"
              placeholder="Phone number*"
              onChange={(e) => setPhone(e.target.value)}
            />
            {error && phone.length === 0 && (
              <span className="text-0.7rem text-danger font-medium">
                Please enter the phone number
              </span>
            )}
            {error2 && phone.length !== 10 && (
              <span className="text-0.7rem text-danger font-medium">
                Số điện thoại không hợp lệ
              </span>
            )}
          </label>
          <label className="d-flex flex-column pt-4">
            <span className="text-0.7rem">Email address*</span>
            <input
              className="border p-2"
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && email.length === 0 && (
              <span className="text-0.7rem text-danger font-medium">
                Please enter email number
              </span>
            )}
          </label>
          <label className="d-flex flex-column pt-4">
            <span className="text-0.7rem">Address*</span>
            <input
              className="border p-3"
              type="text"
              placeholder="Enter the address"
              onChange={(e) => setAddress(e.target.value)}
            />
            {error && address.length === 0 && (
              <span className="text-0.7rem text-danger">
                Please enter your address
              </span>
            )}
          </label>
          <div>
            <h1 className="fw-bolder fs-5 pt-4">PAYMENT METHODS</h1>
            <div className="d-flex flex-column gap-1">
              <div className="d-flex align-items-center">
                <input
                  type="radio"
                  name="payment"
                  className="form-check-input"
                />
                <span>Card payment (ATM, Visa)</span>
              </div>
              <div className="d-flex align-items-center">
                <input
                  type="radio"
                  name="payment"
                  className="form-check-input"
                />
                <span>Momo wallet payment</span>
              </div>
              <div className="d-flex align-items-center">
                <input
                  type="radio"
                  name="payment"
                  className="form-check-input"
                />
                <span>Payment on delivery</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h1 className="fw-bolder fs-4 pb-4">ORDER SUMMARY</h1>
          <div className="leading-8">
            {products.map((product) => (
              <table key={product.id} className="m-auto w-full">
                <tr>
                  <td className="d-flex align-items-center gap-4 p-2 border">
                    <img
                      className="sm:w-20 w-50 rounded-3"
                      src={product.image}
                      alt=""
                    />
                    <h2 className="fs-6 leading-5 w-full">{product.title}</h2>
                  </td>
                  <td className="px-4 text-center border">${product.price}</td>
                  <td className="px-4 text-center border">{product.qty}</td>
                  <td className="px-2 border">
                    <i
                      class="fa-solid fa-trash
                      ccursor-pointer m-auto"
                      onClick={() => deleteProduct(product.id)}
                    ></i>
                  </td>
                </tr>
              </table>
            ))}
            <div className="p-4">
              <div className="d-flex justify-content-between">
                <span>Gross product : </span>
                {totalProducts}
              </div>
              <div className="d-flex justify-content-between">
                <span>Into money : </span>${totalPrice}
              </div>
              <div className="d-flex justify-content-between">
                <span>Transport : </span>
                <span className="font-light">
                  Contact us for shipping costs later
                </span>
              </div>
              <div className="d-flex justify-content-between pt-6">
                <span className="text-1.1rem font-weight-bold">
                  TOTAL MONEY :
                </span>
                <span className="font-weight-bold text-1.2rem">
                  ${totalPrice}
                </span>
              </div>
            </div>
            <hr className="mt-5" />
          </div>
          <h3 className="fs-5 pt-4">Shipment Details :</h3>
          <span className="font-light p-5">
            For regionally available products, TrG . Will ship within 2-7 days.
            For products that are not available, delivery time will be
            determined by TrG staff. notify you.
          </span>
          <div className="justify-content-center mt-5">
            {/* <NavLink to="/"> */}
            <button type="submit" className="btn btn-dark px-5 py-3 border">
              ORDER
            </button>
            {/* </NavLink> */}
          </div>
        </div>
      </div>
    </form>
  );
};

export default Pay;
