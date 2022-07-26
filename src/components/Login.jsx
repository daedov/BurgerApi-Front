import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/auth", {
        email: user.email,
        password: user.password,
      })
      .then((response) => { 
        localStorage.setItem("token", response.data.token )
        response.data.data.role.description === 'admin' ? navigate("/Dashboard") : navigate("/")
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="card-container row">
      <div className="col s12 m6">
        <div className="card">
          <div className="card-panel black-text teal accent-4">
            <span className="card-title">Burger Administration</span>
          </div>
          <form className="form-container col s12" onSubmit={handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="white-text validate"
                  onChange={handleChange}
                />
                <label htmlFor="email" className="white-text">
                  Email
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="white-text validate"
                  onChange={handleChange}
                />
                <label htmlFor="password" className="white-text">
                  Password
                </label>
              </div>
            </div>
            <div>
              <button className="waves-effect waves-light btn" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
