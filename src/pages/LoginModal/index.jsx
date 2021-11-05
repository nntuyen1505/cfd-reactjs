import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "../../hooks/useForm";
import { useAuth } from "../../hooks/useAuth";
import Modal from "../Modal";
import { useDispatch, useSelector } from "react-redux";
import authService from "../../services/authService";

export default function LoginModal() {
  const dispatch = useDispatch();

  const {user,openLogin} = useSelector((store) => store);

  let [requestError, setRequestError] = useState();
  let { error, handleSubmit, register } = useForm();
  // let { login, togglePopupLogin } = useAuth();
  // const submit = (form) => {
  //   login(form);
  //   togglePopupLogin(false);
  // };

  // const submit = (form) => {
  //   login(form).then((res) => {
  //     if (res) {
  //       setRequestError(res);
  //     } else {
  //       togglePopupLogin(false);
  //     }
  //   });
  // };
  const submit = async (form) => {
    // let res = await login(form);

    // if (res) {
    //   setRequestError(res);
    // } else {
    //   togglePopupLogin(false);
    // }
    let response = await authService.login(form);
    // let res = await response.json();
    if (response.data) {
      // localStorage.setItem("login", JSON.stringify(res.data));
      // localStorage.setItem("token", JSON.stringify(res.data.token));

      dispatch({
        type: "LOGIN_SUBCCESS",
        payload: response.data,
      });
    } else {
      return response.error;
    }
  };

  return (
    <Modal>
      <div
        className="popup-form popup-login"
        style={{ display: openLogin ? "flex" : "none" }}
        onClick={()=>dispatch({type:"CLOSE_LOGIN"})}
        // onClick={() => togglePopupLogin(false)}
      >
        <div className="wrap" onClick={(e) => e.stopPropagation()}>
          {/* login-form */}
          <form
            onSubmit={handleSubmit(submit)}
            className="ct_login"
            style={{ display: "block" }}
          >
            <h2 className="title">Đăng nhập</h2>
            {requestError && (
              <p className="errorText" style={{ color: "red" }}>
                {requestError}
              </p>
            )}
            <input
              {...register("username", { required: true, pattern: "username" })}
              type="text"
              placeholder="Username"
            />
            {error.username && (
              <p className="errorText" style={{ color: "red" }}>
                {error.username}
              </p>
            )}
            <input
              {...register("password", { min: 6, max: 32 })}
              type="password"
              placeholder="Mật khẩu"
            />
            {error.password && (
              <p className="errorText" style={{ color: "red" }}>
                {error.password}
              </p>
            )}
            <div className="remember">
              <label className="btn-remember">
                <div>
                  <input type="checkbox" />
                </div>
                <p>Nhớ mật khẩu</p>
              </label>
              <a href="#" className="forget">
                Quên mật khẩu?
              </a>
            </div>
            <button type="submit" className="btn rect main btn-login">
              đăng nhập
            </button>
            {/* <div className="text-register" style={{}}>
              <strong>hoặc đăng ký bằng</strong>
            </div>
            <div>
              <div className="btn btn-icon rect white btn-google">
                <img src="img/google.svg" alt="" /> Google
              </div>
            </div>
            <div className="close">
              <img src="img/close-icon.png" alt="" />
            </div> */}
          </form>
          {/* email form */}
          {/* <div className="ct_email">
            <h2 className="title">Đặt lại mật khẩu</h2>
            <input type="text" placeholder="Email" />
            <div className="btn rect main btn-next">Tiếp theo</div>
            <div className="back" />
            <div className="close">
              <img src="img/close-icon.png" alt="" />
            </div>
          </div>  */}
        </div>
      </div>
      , document.body
    </Modal>
  );
}
