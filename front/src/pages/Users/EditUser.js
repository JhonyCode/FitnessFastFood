import { useState, useEffect } from "react";
import styles from "../Contact/Contact.module.css"
import swal from 'sweetalert';
import { useNavigate, useParams } from "react-router-dom";
const EditUser = () => {
    const navigate = useNavigate();
  const params = useParams("");
  const [formValues, setFormValues] = useState({
    nombre: "",
    password: "",
    perfil: "",
    username:""
  });

  const handleInputChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //Function for submit form
    const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("nombre", formValues.nombre);
    formData.append("password", formValues.password);
    formData.append("username", formValues.username);
    formData.append("perfil", e.target.perfil.files[0]);

    fetch(`http://localhost:8080/api/usuario/editar/${params.id}`, {
      method: "POST",
      body: formData,
      headers: {
        enctype: "multipart/form-data",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        generarNuevoToken(formValues.username, formValues.password);
        swal("User info edited correctly");
        // navigate("/dashboard", { replace: true })
        if(data.code===500){
          swal("Image size too high")
        }
    });

  };
const generarNuevoToken= (newUser, newPass)=>{
  fetch("http://localhost:8080/api/login_check", {
    method: "POST",
    body: JSON.stringify({username:newUser, password: newPass}),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
        localStorage.setItem("token", data.token);
        navigate("/dashboard", { replace: true })
    })
}

  useEffect(() => {
    //?token=${localStorage.getItem("token")}
    fetch(`http:///localhost:8080/api/usuario/get`, {
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
            username: data.result.email,
            perfil: data.result.perfil,
          }));
        })
        .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>Edit user info</h1>
      <div className={styles.default}>
        <form className={styles.contactform} onSubmit={handleSubmit}>
                  <label className={styles.labels} htmlFor="nombre">First name:</label>
          <input className={styles.usuario}
         id="nombre"
            name="nombre"
            type="text"
            onChange={handleInputChange}
            defaultValue={formValues.nombre}
          />
          <label className={styles.labels} htmlFor="username">Email:</label>
          <input className={styles.usuario}
            id="username"
            name="username"
            type="email"
            onChange={handleInputChange}
            defaultValue={formValues.username}
          />
           <label className={styles.labels} htmlFor="password">Password:</label>
          <input className={styles.usuario}
            id="password"
            name="password"
            type="password"
            onChange={handleInputChange}
          />
          <label className={styles.labels} htmlFor="perfil">Profile photo:</label>
          <input className={styles.usuario}
            id="perfil"
            name="perfil"
            type="file"
            accept="image/*"
            onChange={handleInputChange}
          />
          <button className={styles.boton}type="submit">Send changes</button>
          <button className={styles.boton} onClick={()=>{
                navigate("/dashboard", { replace: true })
              }} > Go back</button>
        </form>
      </div>
    </>
    
  );
};
export default  EditUser;
