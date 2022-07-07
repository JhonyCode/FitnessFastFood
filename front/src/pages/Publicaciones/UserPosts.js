import { useEffect, useState } from "react";
import "./Publicaciones.css";
import Spinner from "../../components/Spinner/Spinner";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Navigate, useNavigate } from "react-router";
export function UserPosts() {
  const [user, setUser] = useState();
  const params = useParams("");
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

  return (
    <>
      {user ? ( 
        <div>
          <h2>All your posts, {user.nombre}</h2>
        <section className="seccion">
          {user.publicaciones.map((publicacion) => (
            <div className="publicaciones" key={publicacion.id}>
              <div className="titulo1">{publicacion.titulo}</div>
              <div className="imagenes">
                <Link className="linkpu" to={`/posts/${publicacion.id}`}>
                <img src={publicacion.imagen} />
                </Link>
              </div>
              <div className="seccion">
              <button className="button1"onClick={()=>{
                navigate(`/editpost/${publicacion.id}`, { replace: true })
              }} > Edit</button>
                <div>
              <button className="button1"
              onClick={() => {
              if (window.confirm("Are you sure?") ) {fetch(
              `http://localhost:8080/admin/publicaciones/delete/${publicacion.id}`,{
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": 'Bearer '+ localStorage.getItem('token')
                },
                 }
                  )
                 .then((res) => res.json())
                 .then((data) => {
                 if (data.result === "ok") {
                 window.location.reload();}})}}}> 
                 Delete</button>
                 <button className="button1"onClick={()=>{
                navigate("/dashboard", { replace: true })
              }} > Back</button>
                   <button className="button1"onClick={()=>{
                navigate("/newpost", { replace: true })
              }} > New post</button>
              </div>
              </div>
                     
            </div>
          ))}
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
