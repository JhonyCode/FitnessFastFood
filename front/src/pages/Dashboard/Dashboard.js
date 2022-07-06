import { useEffect, useState } from "react";
import styles from "./Dashboard.module.css"
import { useContext } from "react";
import { AuthContext } from "../../components/AuthContext";
import Spinner from "../../components/Spinner/Spinner";
function edit(){
  window.location.href = "/edituser";
}
export function Dashboard() {
  const [user, setUser] = useState();
  //const { token } = useContext(AuthContext);
  //localStorage.setItem("token", token);
    useEffect(() => {
    fetch("http://localhost:8080/admin/usuario/get",{
      headers: {
        Authorization : 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then((res) => res.json())
      .then((data) => setUser(data.result));
  }, []);
  return (
    <div className={styles.box}>
      {user ? (
        <div key={user.id}>
          <h1>Bienvenido a tu panel de control</h1>
          <div className={styles.info}>
          <div><button onClick={edit} > CAMBIAR INFO</button></div>
          <p>Email: {user.email}</p>
          <p>{user.publicaciones}</p>
          <img className={styles.imgas} src={`../images/${user.perfil}`} />
        </div></div>
      ) : (
        <div><Spinner/></div>
      )}
    </div>
  );
}
