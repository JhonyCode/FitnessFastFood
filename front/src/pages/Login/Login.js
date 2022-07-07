import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "../Login/Login.module.css"
import swal from 'sweetalert';

const Login = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({ username: "", password: "" });

  const handleInputChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/login_check", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.code===401){
          swal("Usuario y/o contraseña incorrectos");
        }
        else{
          localStorage.setItem("token", data.token);
          navigate("/dashboard", { replace: true })
          {
            window.location.reload();}
        }
      }).catch((error)=>{
          swal("Usuario y/o contraseña incorrectos");
      })
  };
 
  return (
    <>
      <h1>Login form</h1>
      <div className={styles.login}>
        <form  className={styles.contactform} onSubmit={handleSubmit}>
          <label className={styles.labels} htmlFor="username">Email</label>
          <input className={styles.user}
           required={true}
            id="username"
            name="username"
            type="email"
            onChange={handleInputChange}
            value={formValues.username}
            placeholder="Enter your email"
          />
          <label className={styles.labels} htmlFor="password">Password</label>
          <input className={styles.password}
           required={true}
            id="password"
            name="password"
            type="password"
            onChange={handleInputChange}
            values={formValues.password}
            placeholder="Enter your password"
          />
          <button className={styles.boton} type="submit">Sig in</button>
          <div className={styles.links}><Link to="/register">Sign up</Link></div>
        </form>
      </div>
    </>
  );
};
export default Login;
