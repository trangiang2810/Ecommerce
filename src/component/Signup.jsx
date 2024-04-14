import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length === 0 || pass.length === 0 || email.length === 0) {
      setError(true);
    } else if (phone.length < 10 || pass.length < 6) {
      setError2(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="py-5 px-2">
      <div className="container-sm">
        <div className="card mx-auto shadow p-5 rounded">
          <h1 className="text-center font-weight-bold pb-3">Đăng Ký</h1>
          <div className="mb-4">
            <div className="py-2">
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
                  Vui lòng nhập số điện thoại
                </div>
              )}
              {error2 && (phone.length < 10 || phone.length > 10) && (
                <div className="invalid-feedback">
                  Số điện thoại không hợp lệ
                </div>
              )}
            </div>
            <div className="py-2">
              <input
                className={`form-control ${
                  error && email.length === 0 ? "is-invalid" : ""
                }`}
                type="email"
                placeholder="Nhập email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && email.length === 0 && (
                <div className="invalid-feedback">Vui lòng nhập email</div>
              )}
            </div>
            <div className="py-2">
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
                <div className="invalid-feedback">Vui lòng nhập mật khẩu</div>
              )}
              {error2 && pass.length < 6 && (
                <div className="invalid-feedback">
                  Vui lòng nhập tối thiểu 6 kí tự
                </div>
              )}
            </div>
          </div>

          <div className="text-center">
            <button className="btn btn-primary w-100 mb-3">ĐĂNG NHẬP</button>
            <div className="text-muted">
              Bạn đã có tài khoản?{" "}
              <Link className="text-primary" to="/dangnhap">
                Đăng Nhập
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
