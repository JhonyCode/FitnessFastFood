import { useEffect, useState } from "react";
import "../Publicaciones/Publicaciones.css";
import { Link } from "react-router-dom";
function Home() {
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
      <h1>¡Bienvenid@!</h1>
      <h2>Últimas publicaciones</h2>
      <section className="seccion">
        {Publicaciones.map((publicacion) => (
          <div className="publicaciones" key={publicacion.id}>
            <div className="imagenes">
              <Link to={`/publicaciones/${publicacion.id}`}>
                <img src={`./images/${publicacion.imagen}`} />
              </Link>
            </div>
            <div className="titulo">{publicacion.titulo}</div>
            {/* <div className="ingredientes">{publicacion.ingredientes}</div>
            <div className="resumenes">{publicacion.resumen}</div>
            <div className="resumenes">{publicacion.comentario}</div>
            <div className="usuarios">{publicacion.usuario}</div>
            <div className="valoraciones">{publicacion.valoracion} Sobre 5</div> */}
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
