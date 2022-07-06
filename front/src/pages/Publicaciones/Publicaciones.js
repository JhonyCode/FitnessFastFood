import { useEffect, useState } from "react";
import "../Publicaciones/Publicaciones.css";
import { Link } from "react-router-dom";
function Publicaciones() {
  const [Publicaciones, setPublicaciones] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/admin/publicaciones", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => setPublicaciones(data.result));
  }, []);
  return (
    <div>
      <h2 className="header">Todas las publicaciones</h2>
      <section className="seccion">
        {Publicaciones.map((publicacion) => (
          <div className="publicaciones" key={publicacion.id}>
            <div className="titulo">{publicacion.titulo}</div>
            <div className="imagenes">
              <Link to={`/publicaciones/${publicacion.id}`}>
                <img src={`./images/${publicacion.imagen}`} />
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Publicaciones;
