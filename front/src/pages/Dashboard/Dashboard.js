import { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import Spinner from "../../components/Spinner/Spinner";
import { useNavigate } from "react-router";
export function Dashboard() {
  const [user, setUser] = useState();
const navigate = useNavigate();
// Fetch para obtener información del usuario actual y comprobarlo con el TOKEN.
  useEffect(() => {
    fetch("http://localhost:8080/api/usuario/get", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
          setUser(data.result);
        }
      );
  }, []);

  //console.log(user.publicaciones);
  return (
    // Condicional, si hay usuario pintamos y si no, no.
    <>
      {user ? ( <div>
          <h1 className={styles.welcome}>Welcome {user.nombre} to your dashboard</h1>
        <section className={styles.box}>
        <div className={styles.box}>
          <div className={styles.user}  key={user.id}>
              <div className={styles.imgas}><img  src={user.perfil} /></div>
              <button className={styles.boton} onClick={()=>{
                navigate(`/edituser/${user.id}`, { replace: true })
              }} > Change info</button></div>
            <button className={styles.boton1} onClick={()=>{
                navigate("/userposts", { replace: true })
              }} > My posts</button>
        </div>
        </section>
        </div>
      ) : (
        <div>
          <Spinner />
        </div>
      )}
    </>
  );
}
