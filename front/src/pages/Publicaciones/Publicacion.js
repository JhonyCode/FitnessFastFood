import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Publicaciones.css"
export function Publicacion() {
  const { id } = useParams();
  const [Publicaciones, setPublicacion] = useState();

  useEffect(() => {
    fetch(`http://localhost:8080/admin/publicaciones/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((data) => data.json())
        .then((data) => setPublicacion(data.result));
    }, []);

  return (
    <div>
      <Link className="linkpu" to={"/publicaciones"}>
      Volver atrás</Link>
    <div className="seccion1">
    
           {Publicaciones ? (
          <div className="publicacion">
          <div className="titulo">{Publicaciones.titulo}</div><br></br>
          <div className="imagen">
              <img src={`../images/${Publicaciones.imagen}`} />
          </div>
          <div className="ingredientes">{Publicaciones.ingredientes}</div><br></br>
          <div className="resumenes">{Publicaciones.resumen}</div><br></br>
          <div className="ingredientes">{Publicaciones.comentario}</div><br></br>
          <div className="usuarios">{Publicaciones.usuario}</div>
          <div className="valoraciones">{Publicaciones.valoracion} Sobre 5</div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div></div>
  )
}
