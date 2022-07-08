import { useEffect, useState } from "react";
import "../Publicaciones/Publicaciones.css";
import { Link } from "react-router-dom";
function Home() {
  const [Publicaciones, setPublicaciones] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/admin/publicaciones?page=1&limit=4", {
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
      <h1>Welcome!</h1>
      <h2>Latest posts</h2>
      <section className="seccion">
        {Publicaciones.map((publicacion) => (
          <div className="publicaciones" key={publicacion.id}>
            <div className="titulo">{publicacion.titulo}</div>
            <div className="imagenes">
              <Link to={`/posts/${publicacion.id}`}>
                <img src={publicacion.imagen} />
              </Link>
            </div>
         </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
