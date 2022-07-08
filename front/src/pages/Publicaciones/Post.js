import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import "./Publicaciones.css"
export function Post() {
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
      <Link className="linkpu" to={"/posts"}>
      Go back to list</Link>
    <div className="seccion1">
    
           {Publicaciones ? (
          <div className="publicacion">
          <div className="titulo">{Publicaciones.titulo}</div><br></br>
          <div className="imagen">
              <img src={Publicaciones.imagen} />
          </div>
          <div className="ingredientes">Ingredients: {Publicaciones.ingredientes}</div><br></br>
          <div className="resumenes">How to elaborate: {Publicaciones.resumen}</div><br></br>
          <div className="ingredientes">Nutritional value:  {Publicaciones.comentario}</div><br></br>
          <div className="usuarios">{Publicaciones.usuario}</div>
          </div>
      ) : (
        <div><Spinner/></div>
      )}
    </div></div>
  )
}
