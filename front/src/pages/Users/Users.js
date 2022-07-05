import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./imagenusuario.module.css";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../components/AuthContext";
export function Users() {
  const [users, setUsers] = useState([]);
  const { token } = useContext(AuthContext);
  useEffect(() => {
    fetch("http:///localhost:8080/admin/usuario")
      .then((res) => res.json())
      .then((data) => setUsers(data.result));
  }, []);
  if (!token) return <Navigate to="/login" replace />;
  return (
    <div className={styles.userlist}>
      {users.map((user) => {
        return (
          <div>
          <ul key={user.id}>
            <p>Nombre: {user.nombre}</p>
            <p>Email: {user.email}</p>
            <p>Publicaciones: {user.publicaciones}</p>
            <p>{user.rol}</p>
            <img src={`../images/${user.perfil}`} />
            <div>
              <Link className={styles.links} to={`/usuarios/${user.id}`}>Ver detalle</Link>
            </div>
          </ul>
          </div>
        );
      })}
    </div>
  );
}
