import { useContext, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "../../components/AuthContext";
import styles from "./Register.module.css"
import { Link } from "react-router-dom";
import swal from 'sweetalert';
//Register function, gets token and formValues and check it
//after, then you will be redirected to Home if all ok.
const Register = () => {
  function Logear(){

  }
  const { token, setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({ username: "", password: "", nombre: "",  });
  const handleInputChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
//Petition to server.
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/admin/usuario/new", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setToken(data.token);
        navigate("/login", { replace: true })
        swal("Usuario registrado, ya puedes logear");
      });
  };
  return (
    <>

      <h1>Regístrese aquí</h1>
      <div className={styles.reg}>
        <form  className={styles.contactform} onSubmit={handleSubmit}>
          <label  className={styles.labels}  htmlFor="username">Email</label>
          <input className={styles.user}
            placeholder="Escriba aquí su email"
           required={true}
            id="username"
            name="username"
            type="email"
            onChange={handleInputChange}
            value={formValues.username}
          />
          <label className={styles.labels}  htmlFor="nombre">Nombre</label>
          <input className={styles.password}
          placeholder="Escriba aquí su nombre"
           required={true}
            id="nombre"
            name="nombre"
            type="text"
            onChange={handleInputChange}
            values={formValues.password}
          />
          <label className={styles.labels}  htmlFor="password">Contraseña</label>
          <input className={styles.password}
            placeholder="Escriba aquí su contraseña"
           required={true}
            id="password"
            name="password"
            type="password"
            onChange={handleInputChange}
            values={formValues.password}
          />
          <button className={styles.boton} type="submit"> Crear cuenta</button>
          <div className={styles.links}><Link to="/login"> Logear
          </Link></div>
        </form>
      </div>
    </>
  );
};
export default Register;
