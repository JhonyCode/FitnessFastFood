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
    fetch("http://localhost:42617/api/login_check", {
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
        }
      }).catch((error)=>{
          console.log(error);
          swal("Usuario y/o contraseña incorrectos");
      })
  };
 
  return (
    <>
      <h1>Formulario de Login</h1>
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
            placeholder="Introduce tu email"
          />
          <label className={styles.labels} htmlFor="password">Contraseña</label>
          <input className={styles.password}
           required={true}
            id="password"
            name="password"
            type="password"
            onChange={handleInputChange}
            values={formValues.password}
            placeholder="Introduce tu contraseña"
          />
          <button className={styles.boton} type="submit">Iniciar sesión</button>
          <div className={styles.links}><Link to="/register">Crea una cuenta</Link></div>
        </form>
      </div>
    </>
  );
};
export default Login;
