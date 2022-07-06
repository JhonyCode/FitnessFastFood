import { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import Spinner from "../../components/Spinner/Spinner";
function edit() {
  window.location.href = "/edituser";
}
export function Dashboard() {
  const [user, setUser] = useState();
  //const { token } = useContext(AuthContext);
  //localStorage.setItem("token", token);
  useEffect(() => {
    fetch("http://localhost:8080/admin/usuario/get", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data.result));
  }, []);
  return (
    <div className={styles.box}>
      {user ? (
        <div>
          {" "}
          <h1>Bienvenido a tu panel de control</h1>
          <div className={styles.box} key={user.id}>
            <div className={styles.info}>
              <p className={styles.nombre}>{user.nombre}</p>
              <img className={styles.imgas} src={`../images/${user.perfil}`} />
              <div><button className={styles.boton} onClick={edit} > CAMBIAR INFO</button></div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Spinner />
        </div>
      )}
    </div>
  );
}
