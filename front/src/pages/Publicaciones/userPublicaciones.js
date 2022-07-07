import { useEffect, useState } from "react";
import styles from "./Publicacionuser.module.css";
import Spinner from "../../components/Spinner/Spinner";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
export function UserPublicaciones() {
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
          console.log(data.result);
          setUser(data.result);
        }
      );
  }, []);

  //console.log(user.publicaciones);
  return (
    <>
      {user ? ( 
      <section> <div>   
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
          </div>
        </section>
      ) : (
        <div>
                    <Link to="/nuevapublicacion">
               Create post
              </Link>
        </div>
      )}
    </>
  );
}
