import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length === 0 || pass.length === 0) {
      setError(true);
    } else if (phone.length < 10) {
      setError2(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="py-5 px-2">
      <div className="container-sm">
        <div className="card mx-auto shadow p-5 rounded">
          <h1 className="text-center font-weight-bold pb-3">Đăng Nhập</h1>
          <div className="mb-4">
            <div className="pb-3">
              <input
                className={`form-control ${
                  error && phone.length === 0 ? "is-invalid" : ""
                }`}
                type="number"
                placeholder="Số điện thoại"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {error && phone.length === 0 && (
                <div className="invalid-feedback">
                  Please enter the phone number
                </div>
              )}
              {error2 && phone.length !== 10 && (
                <div className="invalid-feedback">
                  Số điện thoại không hợp lệ
                </div>
              )}
            </div>
            <div>
              <input
                className={`form-control ${
                  error && pass.length === 0 ? "is-invalid" : ""
                }`}
                type="password"
                placeholder="Mật khẩu"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
              {error && pass.length === 0 && (
                <div className="invalid-feedback">Please enter a password</div>
              )}
              {error2 && pass.length < 6 && (
                <div className="invalid-feedback">
                  Vui lòng nhập tối thiểu 6 kí tự
                </div>
              )}
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember account
              </label>
            </div>
            <NavLink className="text-primary nav-link" href="#">
              Forgot password
            </NavLink>
          </div>
          <div className="text-center">
            <button className="btn btn-primary w-100 mb-3">LOGIN</button>
            <div className="text-muted">
              Do not have an account?
              <NavLink className="text-primary nav-link" to="/dangky">
                Register
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
