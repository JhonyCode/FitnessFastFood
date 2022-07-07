import { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import Spinner from "../../components/Spinner/Spinner";
import { Navigate, useNavigate } from "react-router";
import { Link } from "react-router-dom";
export function Dashboard() {
  const [user, setUser] = useState();
const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8080/admin/usuario/get", {
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
