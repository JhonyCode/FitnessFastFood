import { useContext, useState } from "react";
import { useNavigate} from "react-router-dom";
import { AuthContext } from "../../components/AuthContext";
import styles from "../Contact/Contact.module.css"
import swal from "sweetalert";
const Contact = () => {
  const navigate = useNavigate();
  const { token, setToken } = useContext(AuthContext);
  const [formValues, setFormValues] = useState({
    nombre: "",
    mensaje: "",
    email: "",
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
                swal("Message sended!");
                navigate("/", { replace: true });
              });
  };
  return (
    <>
      <h1>Contact form</h1>
      <div className={styles.default}>
        <form className={styles.contactform} onSubmit={handleSubmit}>
        <label className={styles.labels} htmlFor="nombre">Name:</label>
          <input className={styles.usuario}
          required={true}
            id="nombre"
            name="nombre"
            type="text"
            onChange={handleInputChange}
            value={formValues.nombre}
            placeholder="Please enter a name"
          />
          <label className={styles.labels} htmlFor="email">Email:</label>
          <input className={styles.usuario}
          required={true}
            id="email"
            name="email"
            type="email"
            onChange={handleInputChange}
            value={formValues.email}
            placeholder="Please enter your email"
          />
          <label className={styles.labels} htmlFor="mensaje">Message:</label>
          <textarea className={styles.usuario}
           required={true}
            id="mensaje"
            name="mensaje"
            type="text"
            onChange={handleInputChange}
            placeholder="Please write something"
          ></textarea>
          <button className={styles.boton}type="submit">Send form</button>
        </form>
      </div>
    </>
    
  );
};
export default Contact;
