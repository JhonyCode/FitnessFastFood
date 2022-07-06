import { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import Spinner from "../../components/Spinner/Spinner";
import { Navigate, useNavigate } from "react-router";
import { Link } from "react-router-dom";
export function Dashboard() {
  const [user, setUser] = useState();
const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:42267/admin/usuario/get", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
          console.log(data.result);
          setUser(data.result);
        }
      );
  }, []);

  //console.log(user.publicaciones);
  return (
    <>
      {user ? ( <div>
          <h1>Bienvenido a tu panel de control</h1>
        <section className={styles.box}>
        <div className={styles.box}>
          <div className={styles.user}  key={user.id}>
              <div className={styles.nombre}>{user.nombre}</div>
              <div className={styles.imgas}><img  src={user.perfil} /></div>
              <div><button className={styles.boton} onClick={()=>{
                navigate(`/edituser/${user.id}`, { replace: true })
              }} > CAMBIAR INFO</button></div>
              

              {user.publicaciones.map((publicacion) => (
          <div className="publicaciones" key={publicacion.id}>
            <div className="titulo">{publicacion.titulo}</div>
            <div className="imagenes">
              <Link to={`/publicaciones/${publicacion.id}`}>
                <img src={`./images/${publicacion.imagen}`} />
              </Link>
            </div>
          </div>
        ))}
                    <Link to="/nuevapublicacion">
                CREAR PUBLICACION
              </Link>
          </div>
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
