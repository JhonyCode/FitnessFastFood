import { useEffect, useState } from "react";
import "../Publicaciones/Publicaciones.css";
import { Link } from "react-router-dom";
function Publicaciones() {
  const [page, setPage] = useState(1);
  const [Publicaciones, setPublicaciones] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:42267/admin/publicaciones?page=${page}&limit=6`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => setPublicaciones(data.result));
  }, [page]);
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
      <button onClick={()=>setPage(page-1)}>prev</button>
      <button onClick={()=>setPage(page+1)}>next</button>
    </div>
  );
}

export default Publicaciones;
