import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../components/AuthContext";
import styles from "../Contact/Contact.module.css"
import swal from 'sweetalert';
import { useNavigate, Navigate } from "react-router-dom";
const EditUser = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    nombre: "",
    password: "",
    perfil: "",
    email:""
  });
  const handleInputChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http:///localhost:8080/admin/usuario/editar", {
      method: "PUT",
      body: JSON.stringify(formValues),
      headers: {
        Authorization : 'Bearer ' + localStorage.getItem('token'),
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        swal("Usuario editado satisfacctoriamente");
        navigate("/dashboard", { replace: true })
    });
  };


  useEffect(() => {
    //?token=${localStorage.getItem("token")}
    fetch(`http:///localhost:8080/admin/usuario/get`, {
        method: "GET",
        headers: {
          Authorization : 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then((res) => res.json())
        .then((data) => {
          setFormValues((prev) => ({
            ...prev,
            nombre: data.result.nombre,
            email: data.result.email
          }));
        })
        .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>Editar información del perfil</h1>
      <div className={styles.default}>
        <form className={styles.contactform} onSubmit={handleSubmit}>
                  <label className={styles.labels} htmlFor="nombre">Nombre:</label>
          <input className={styles.usuario}
         id="nombre"
            name="nombre"
            type="text"
            onChange={handleInputChange}
            defaultValue={formValues.nombre}
          />
          <label className={styles.labels} htmlFor="email">Email:</label>
          <input className={styles.usuario}
            id="email"
            name="email"
            type="email"
            onChange={handleInputChange}
            defaultValue={formValues.email}
          />
           <label className={styles.labels} htmlFor="password">Contraseña:</label>
          <input className={styles.usuario}
            id="password"
            name="password"
            type="password"
            onChange={handleInputChange}
          />
          <label className={styles.labels} htmlFor="perfil">Imagen:</label>
          <input className={styles.usuario}
            id="perfil"
            name="perfil"
            type="text"
            onChange={handleInputChange}
          />
          <button className={styles.boton}type="submit">Enviar formulario</button>
        </form>
      </div>
    </>
    
  );
};
export default  EditUser;
