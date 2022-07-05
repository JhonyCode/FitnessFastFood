import { useContext, useState } from "react";
import { useNavigate} from "react-router-dom";
import { AuthContext } from "../../components/AuthContext";
import styles from "../Contact/Contact.module.css"
const Login = () => {
  const navigate = useNavigate();
  const { token, setToken } = useContext(AuthContext);
  const [formValues, setFormValues] = useState({
    nombre: "",
    mensaje: "",
  });
  const handleInputChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http:///localhost:8080/contacto/new", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setToken(data.token);
        navigate("/enviado", { replace: true })
              });
  };
  return (
    <>
      <h1>Formulario de contacto</h1>
      <div className={styles.default}>
        <form className={styles.contactform} onSubmit={handleSubmit}>
                  <label className={styles.labels} htmlFor="nombre">Nombre:</label>
          <input className={styles.usuario}
          // required={true}
            id="nombre"
            name="nombre"
            type="text"
            onChange={handleInputChange}
            value={formValues.username}
            placeholder="Por favor, escribe tu nombre"
          />
          <label className={styles.labels} htmlFor="mensaje">Mensaje:</label>
          <textarea className={styles.usuario}
          //  required={true}
            id="mensaje"
            name="mensaje"
            type="text"
            onChange={handleInputChange}
            placeholder="Por favor, deja aquí tu mensaje..."
          ></textarea>
          <button className={styles.boton}type="submit">Enviar formulario</button>
        </form>
      </div>
    </>
    
  );
};
export default Login;
