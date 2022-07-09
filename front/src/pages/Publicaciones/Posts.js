import {createContext, useContext, useEffect, useState } from "react";
import "../Publicaciones/Publicaciones.css";
import { Link } from "react-router-dom";
export const GlobalContext = createContext({});

function Posts() {
  const [page, setPage] = useState(1);
  const [pageTotal, setPageTotal] = useState(1);
  const [Publicaciones, setPublicaciones] = useState([]);

  const limit = 4;

  // Fetch para obtener todas las publicaciones. con el paginador le decimos 
  // La cantidad de publicaciones por página cambiando el limit.
  useEffect(() => {
    fetch(`http://localhost:8080/api/publicaciones?page=${page}&limit=${limit}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setPublicaciones(data.result); 
        setPageTotal(data.count);
      });
  }, [page, limit]);
  return (
    <GlobalContext.Provider value={{ page, setPage, pageTotal }}>
      <div>
        <h2 className="header">All posts</h2>
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
        <Pagination limit={limit} />
      </div>
    </GlobalContext.Provider>
  );
}

export default Posts;

export function Pagination(props){
  //Usamos las variables usado en GlobalContext
  const {page, setPage} = useContext(GlobalContext);
  const {pageTotal} = useContext(GlobalContext);
  //Creamos la variable total de paginas
  const total=0;
  //Calculamos el numero de paginas totales
  total=Math.ceil(pageTotal/parseInt(props.limit));

  if(total>1)
  {
      return (
          <div className="paginado">
              {(page-1 > 0) 
              ? <button onClick={()=>setPage(page-1)}>Prev page</button>
              : ""
              }
              {(page+1 <= total) 
              ? <button onClick={()=>setPage(page+1)}>Next page</button>
              : ""
              }
          </div>
      );
  }
}