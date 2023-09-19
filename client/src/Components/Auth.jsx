import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.scss";
import { useCookies } from "react-cookie";
function Auth() {
  const nav = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  const Switch = () => {
    setRegister(!register);
  };
  const authOperation = () => {
    if (register) {
      axios
        .post("http://localhost:3000/users/register", {
          username,
          password,
        }).then(res => console.log(res))
        .catch((err) => {
          console.log(err.response.data);
        });
    } else {
      axios
        .post("http://localhost:3000/users/login", {
          username,
          password,
        })
        .then((res) => {
          setCookie("accestoken", res.data.accestoken);
          window.localStorage.setItem("userId", res.data.id);
          window.localStorage.setItem("username", res.data.name);
          nav("/");
        })
        .catch((err) => {
         alert(err.response.data);
        });
    }
  };
  return (
    <div className="auth-container">
      <h2> {register ? "Register" : "Login"}</h2>
      <br />
      <label htmlFor="">Username : </label>
      <input
        maxLength={8}
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <code>8 characters</code>
      <br />
      <label htmlFor="">password : </label>
      <input
        maxLength={8}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <br />
      <button onClick={authOperation}>{register ? "register" : "Login"}</button>
      <br />
      <p onClick={Switch}>
        {register ? "already have an account ?" : "don t have an account ?"}
      </p>
    </div>
  );
}

export default Auth;
